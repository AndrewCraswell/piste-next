import { AzureFunction, Context } from "@azure/functions"
import axios from "axios"
import csv from "csvtojson"
const he = require("he")
const request = require("request")
const sql = require("mssql")

interface CsvMemberRow {
  "Member #": number
  "First Name": string
  "Last Name": string
  Nickname?: string
  Gender?: string
  Birthdate: number
  Division?: string
  "Club 1 Name"?: string
  "Club 2 Name"?: string
  "Club 1 Abbreviation"?: string
  "Club 2 Abbreviation"?: string
  "Club 1 ID#"?: string
  "Club 2 ID#"?: string
  "Member Type"?: string
  CheckEd: string
  Competitive: string
  Expiration: Date
  Saber: string
  Epee: string
  Foil: string
  "Region #"?: string
  "Background Check Expires"?: Date
  "SafeSport Expires"?: Date
  "Updated At": Date
  "Last Modified": Date
}

interface IAssociationMember {
  AssociationMemberId: number
  FirstName: string
  LastName: string
  FullName: string
  Nickname?: string
  Gender?: string
  Birthdate: number
  Division?: string
  Club1Name?: string
  Club2Name?: string
  Club1Abbreviation?: string
  Club2Abbreviation?: string
  Club1Id?: string
  Club2Id?: string
  MemberType?: string
  CheckEd: string
  Competitive: string
  Expiration: Date
  Saber: string
  Epee: string
  Foil: string
  Region?: string
  BackgroundCheckExpires?: Date
  SafeSportExpires?: Date
  UpdatedAt: Date
  LastModified: Date
}

const scheduledIngest: AzureFunction = async function (
  context: Context,
  timer: any
): Promise<void> {
  // Request the members page
  const { data: response } = await axios.get<string>(
    process.env.USA_FENCING_MEMBERS_CSV_URL
  )

  // Parse the URL to the latest document
  const match = response.match(
    /<a href="(.*)" class="card p-2 text-white bg-blued tight d-inline-block no-link">/
  )
  let membersCsvUrl = ""
  if (match.length === 2) {
    membersCsvUrl = he.decode(match[1])
  } else {
    // TODO: Warn that the member file wasn't parsed
  }

  context.log(membersCsvUrl)

  // Fetch the CSV file
  const members: Array<IAssociationMember> = []
  await csv()
    .fromStream(request.get(membersCsvUrl))
    .subscribe((row: CsvMemberRow) => {
      return new Promise((resolve, reject) => {
        const member = parseMember(row)

        if (member.AssociationMemberId) {
          members.push(member)
        }

        resolve()
      })
    })

  context.log("Found", members.length, "members to ingest.")

  // Upsert the results into the database
  await updateDatabase(context, members)
}

async function updateDatabase(
  context: Context,
  data: Array<IAssociationMember>
) {
  try {
    const pool = await sql.connect(process.env.PISTE_DB_CONNECTION_STRING)

    let chunk = 150
    let processed = 0
    for (let i = 0, j = data.length; i < j; i += chunk) {
      const members = data.slice(i, i + chunk)
      const query = getUpsertQuery(members)

      try {
        const result = await sql.query(query)
        processed += result.rowsAffected.reduce((a, b) => a + b, 0)
        context.log(processed, "of", data.length)
      } catch (error) {
        context.log(error)
      }
    }
  } catch (error) {
    context.log(error)
  }
}

function parseMember(row: CsvMemberRow): IAssociationMember {
  return {
    AssociationMemberId: row["Member #"],
    FirstName: row["First Name"],
    LastName: row["Last Name"],
    FullName: `${row["First Name"]} ${row["Last Name"]}`,
    Nickname: row.Nickname,
    Gender: row.Gender,
    Birthdate: row.Birthdate,
    Division: row.Division,
    Club1Name: row["Club 1 Name"],
    Club2Name: row["Club 2 Name"],
    Club1Abbreviation: row["Club 1 Abbreviation"],
    Club2Abbreviation: row["Club 2 Abbreviation"],
    Club1Id: row["Club 1 ID#"],
    Club2Id: row["Club 2 ID#"],
    MemberType: row["Member Type"],
    CheckEd: row.CheckEd,
    Competitive: row.Competitive,
    Expiration: row.Expiration,
    Saber: row.Saber,
    Epee: row.Epee,
    Foil: row.Foil,
    Region: row["Region #"],
    BackgroundCheckExpires: row["Background Check Expires"],
    SafeSportExpires: row["SafeSport Expires"],
    UpdatedAt: row["Updated At"],
    LastModified: row["Last Modified"],
  }
}

function getSqlValue(value?: string): string | null {
  if (value) {
    return `'${value.split("'").join("''")}'`
  } else {
    return null
  }
}

function getUpsertQuery(members: IAssociationMember[]) {
  let query = ""

  for (const member of members) {
    const columns = Object.keys(member)
    query = `
      ${query}

      UPDATE dbo.AssociationMembers WITH (UPDLOCK, SERIALIZABLE) SET 
        ${columns
          .map((col) => `[${col}] = ${getSqlValue(member[col])},`)
          .join("")
          .slice(0, -1)}
      WHERE AssociationMemberId = '${member.AssociationMemberId}';
      
      IF @@ROWCOUNT = 0
      BEGIN
        INSERT dbo.AssociationMembers(
          ${columns
            .map((col) => `[${col}],`)
            .join("")
            .slice(0, -1)}
        ) VALUES(
          ${columns
            .map((col) => `${getSqlValue(member[col])},`)
            .join("")
            .slice(0, -1)}
        );
      END
    `
  }

  return `
    BEGIN TRANSACTION;

    ${query}

    COMMIT TRANSACTION;
  `
}

export default scheduledIngest
