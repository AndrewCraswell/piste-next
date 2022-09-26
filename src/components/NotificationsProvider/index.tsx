import { useAuth0 } from "@auth0/auth0-react"
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center"

export const NotificationsProvider: React.FunctionComponent = () => {
  const { user } = useAuth0()

  return (
    <NovuProvider
      subscriberId={user?.sub}
      applicationIdentifier={"hT93xsQtq4Nv"}
    >
      <PopoverNotificationCenter
        colorScheme="light"
        onNotificationClick={(msg) => console.log(msg)}
      >
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  )
}
