import { Shimmer, ShimmerElementType } from "@fluentui/react"
import { Body, Text } from "@fluentui/react-components"
import {
  Card,
  CardHeader,
  CardFooter,
} from "@fluentui/react-components/unstable"

const iconShimmer = [
  {
    type: ShimmerElementType.circle,
    width: 32,
    height: 32,
  },
]

const descriptionShimmer = [
  {
    type: ShimmerElementType.line,
    width: "25%",
    height: 12,
  },
  {
    type: ShimmerElementType.gap,
    width: "5%",
    height: 12,
  },
  {
    type: ShimmerElementType.line,
    width: "25%",
    height: 12,
  },
  {
    type: ShimmerElementType.gap,
    width: "55%",
    height: 12,
  },
]

const captionShimmer = [
  {
    height: 10,
    width: "60%",
    type: ShimmerElementType.line,
  },
  {
    height: 10,
    width: "40%",
    type: ShimmerElementType.gap,
  },
]

const attributionShimmer = [
  {
    height: 32,
    width: 96,
    type: ShimmerElementType.line,
  },
  {
    height: 32,
    width: 24,
    type: ShimmerElementType.gap,
  },
  {
    height: 32,
    width: 96,
    type: ShimmerElementType.line,
  },
  {
    height: 32,
    width: "100%",
    type: ShimmerElementType.gap,
  },
]

export const AssessmentCardSkeleton: React.FunctionComponent = () => {
  return (
    <Card>
      <CardHeader
        image={<Shimmer shimmerElements={iconShimmer} />}
        header={<Shimmer width="75%" />}
        description={
          <Shimmer
            style={{ marginTop: 4 }}
            shimmerElements={descriptionShimmer}
          />
        }
      />
      <Body block>
        <Shimmer style={{ marginTop: 5 }} width="75%"></Shimmer>
        <Shimmer style={{ marginTop: 5 }} width="90%"></Shimmer>
        <Shimmer style={{ marginTop: 5 }} width="65%"></Shimmer>
        <Shimmer style={{ marginTop: 5 }} width="45%"></Shimmer>
      </Body>
      <Text size={100} block>
        <Shimmer
          style={{ marginTop: 15 }}
          shimmerElements={captionShimmer}
        ></Shimmer>
      </Text>
      <CardFooter>
        <Shimmer shimmerElements={attributionShimmer}></Shimmer>
      </CardFooter>
    </Card>
  )
}
