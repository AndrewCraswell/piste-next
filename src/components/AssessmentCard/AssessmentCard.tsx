import { Body, Caption, Button, Text } from "@fluentui/react-components"
import {
  Card,
  CardHeader,
  CardFooter,
} from "@fluentui/react-components/unstable"
import { ClipboardDataBar32Regular } from "@fluentui/react-icons"
import dayjs from "dayjs"

import { LinkButton } from "$components"
import { IAssessmentMetadata } from "$types"

interface IAssessmentCardProps {
  assessment: IAssessmentMetadata
}

export const AssessmentCard: React.FunctionComponent<IAssessmentCardProps> = ({
  assessment,
}) => {
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
    <Card>
      <CardHeader
        image={<ClipboardDataBar32Regular />}
        header={
          <Body>
            <Text weight="semibold">{title}</Text>
          </Body>
        }
        description={
          <Caption>
            {metricsCount} questions • {cohortsCount} cohorts
          </Caption>
        }
      />
      <Body block>{description}</Body>
      <Text size={100} block>
        {authorName || "Authored"} on {dayjs(createdAt).format("MMMM D, YYYY")}
      </Text>
      <CardFooter>
        <LinkButton appearance="primary" href={`/assessments/${id}/`}>
          View
        </LinkButton>
        <Button disabled>Edit</Button>
      </CardFooter>
    </Card>
  )
}
