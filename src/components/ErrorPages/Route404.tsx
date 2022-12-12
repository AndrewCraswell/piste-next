import { DefaultPageLayout } from "$components/AppShell/components"
import { BigMessage } from "$components/BigMessage"

export function Route404() {
  return (
    <DefaultPageLayout title="404" skipTitleHeading>
      <BigMessage heading="The page does not exist">
        Uh oh! The requested resource is missing or doesn't exist anymore.
      </BigMessage>
    </DefaultPageLayout>
  )
}
