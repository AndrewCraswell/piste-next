import { useTitle } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"

import styled from "@emotion/styled"
import { Caption1, Subtitle2, Text, Title1 } from "@fluentui/react-components"
import {
  PeopleCommunity24Regular,
  PeopleTeam24Regular,
  Person24Regular,
} from "@fluentui/react-icons"
import { Card, CardHeader } from "@fluentui/react-components/unstable"
import { LinkButton } from "$components/LinkButton"
import { AnimationStyles } from "@fluentui/react"

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.fluentV9.spacingHorizontalXL};
  grid-template-columns: repeat(auto-fill, minmax(250px, 290px));
  margin-top: ${({ theme }) => theme.fluentV9.spacingVerticalXXXL};
  justify-content: center;
  width: 100%;
`

const AnimatedCard = styled(Card)`
  ${AnimationStyles.slideUpIn20 as unknown as string}
`

const CardContent = styled(Text)`
  flex-grow: 1;
`

const HeroSection = styled.div`
  margin: ${({ theme }) => theme.fluentV9.spacingVerticalXXXL} 0;

  & > span:first-child {
    margin-bottom: ${({ theme }) => theme.fluentV9.spacingVerticalS};
  }
`

export const OnboardingPage: React.FunctionComponent = () => {
  const pageTitle = "Onboarding"
  useTitle(pageTitle)
  useTrackPisteMetric({ componentName: "OnboardingPage" })

  return (
    <>
      <HeroSection>
        <Title1 align="center" block>
          Welcome to Piste!
        </Title1>
        <Subtitle2 align="center" block>
          Choose which type of experience you would like to start with.
        </Subtitle2>
      </HeroSection>

      <GridContainer>
        <AnimatedCard>
          <CardHeader
            image={<Person24Regular />}
            header={<Text weight="semibold">Athlete</Text>}
            description={<Caption1>Personal account</Caption1>}
          />
          <CardContent>
            Manage your personal account, find tournaments and get coaching. Get
            notified of tournaments you qualify for, and never miss an event.
          </CardContent>
          <LinkButton appearance="primary" href="/onboarding/athlete">
            Select
          </LinkButton>
        </AnimatedCard>

        <AnimatedCard>
          <CardHeader
            image={<PeopleCommunity24Regular />}
            header={<Text weight="semibold">Parent</Text>}
            description={<Caption1>Family account</Caption1>}
          />
          <CardContent>
            Manage one or more athlete accounts for your family. Find
            tournaments and get coaching.
          </CardContent>
          <LinkButton appearance="primary" href="/onboarding/family">
            Select
          </LinkButton>
        </AnimatedCard>

        <AnimatedCard>
          <CardHeader
            image={<PeopleTeam24Regular />}
            header={<Text weight="semibold">Club owner</Text>}
            description={<Caption1>Organization account</Caption1>}
          />
          <CardContent>
            Manage your club, host tournaments, and organize strip coaching with
            built-in payment processing. Reach a wider audience and drive
            engagement across your entire region.
          </CardContent>
          <LinkButton appearance="primary" href="/onboarding/club">
            Select
          </LinkButton>
        </AnimatedCard>
      </GridContainer>
    </>
  )
}

export default OnboardingPage
