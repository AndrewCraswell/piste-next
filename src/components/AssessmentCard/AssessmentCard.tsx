import {
  Body1,
  Caption1,
  Button,
  Text,
  CardHeader,
  CardFooter,
} from "@fluentui/react-components"
import { ClipboardDataBar32Regular } from "@fluentui/react-icons"

import { LinkButton } from "$components/LinkButton"
import { IAssessmentMetadata } from "$types"
import { formatLocalLocalizedTime } from "$lib/formatLocalTime"
import { AuthorAttribution, FlexCard } from "./AssessmentCard.styles"

interface IAssessmentCardProps {
  assessment: IAssessmentMetadata
}

export function AssessmentCard({ assessment }: IAssessmentCardProps) {
  const {
    id,
    title,
    description,
    createdAt,
    metricsCount,
    cohortsCount,
    authorName,
  } = assessment

  return (
    <FlexCard>
      <CardHeader
        image={<ClipboardDataBar32Regular />}
        header={
          <Body1>
            <Text weight="semibold">{title}</Text>
          </Body1>
        }
        description={
          <Caption1>
            {metricsCount} questions • {cohortsCount} cohorts
          </Caption1>
        }
      />
      <Body1 block style={{ flexGrow: 1, marginTop: 0 }}>
        {description}
      </Body1>
      <AuthorAttribution size={100}>
        {authorName || "Authored"} on{" "}
        {formatLocalLocalizedTime(createdAt, "LL")}
      </AuthorAttribution>
      <CardFooter>
        <LinkButton appearance="primary" href={`/assessments/${id}/`}>
          View
        </LinkButton>
        <Button disabled>Edit</Button>
      </CardFooter>
    </FlexCard>
  )
}
