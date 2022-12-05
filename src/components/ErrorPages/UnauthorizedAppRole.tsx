import { Link } from "@fluentui/react-components"

import { DefaultPageLayout } from "$components/AppShell/components"
import { BigMessage } from "$components/BigMessage"

export const UnauthorizedAppRole: React.FunctionComponent = () => (
  <DefaultPageLayout title="Error" skipTitleHeading>
    <BigMessage heading="You are not authorized">
      Please contact{" "}
      <Link href={`mailto:${import.meta.env.VITE_APP_SUPPORT_EMAIL}`}>
        support
      </Link>{" "}
      for help if you feel this is incorrect.
    </BigMessage>
  </DefaultPageLayout>
)
