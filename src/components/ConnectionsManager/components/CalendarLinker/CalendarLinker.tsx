import { useCallback } from "react"
import { Text } from "@fluentui/react-components"
import { MessageBar, MessageBarButton, MessageBarType } from "@fluentui/react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

import { useAccountProfile, useDisclosure } from "$hooks"
import { useLazyDeleteCalendarQuery, useGetCalendarsQuery } from "$store"
import { titleCase } from "./CalendarLinker.utils"
import { ConfirmDialog } from "$components/ConfirmDialog"
import { LinkButton } from "$components/LinkButton"

dayjs.extend(utc)

export const CalendarLinker: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  const {
    account: { UserId, Email, isCalendarLinked, calendar },
    loading: isProfileLoading,
    refetch: refetchAccount,
  } = useAccountProfile()

  const { data } = useGetCalendarsQuery(calendar?.access_token!, {
    skip: !calendar?.access_token,
  })

  const [deleteCalendar, { isLoading: isUnlinking }] =
    useLazyDeleteCalendarQuery()

  const getCalendarLinkingUri = useCallback(() => {
    return `/api/scheduling/connect/?userId=${UserId ?? ""}&login_hint=${
      Email ?? ""
    }`
  }, [Email, UserId])

  const onUnlinkClicked = useCallback(async () => {
    if (calendar?.id) {
      await deleteCalendar({ accountId: calendar?.id })
      await refetchAccount()
      onClose()
    }
  }, [calendar?.id, deleteCalendar, onClose, refetchAccount])

  const isProcessing = isProfileLoading || isUnlinking
  const provider = titleCase(calendar?.provider)

  return (
    <>
      <Text block style={{ marginBottom: "1rem" }}>
        Connect to your calendar to enable appointment bookings during available
        hours.
      </Text>
      {isCalendarLinked ? (
        <MessageBar
          messageBarType={MessageBarType.success}
          isMultiline={false}
          actions={
            <MessageBarButton disabled={isProcessing} onClick={onOpen}>
              Unlink
            </MessageBarButton>
          }
        >
          Your {provider} calendar was linked on{" "}
          {dayjs.utc(calendar?.created_at).local().format("MMM DD, YYYY")}.
        </MessageBar>
      ) : (
        <LinkButton appearance="primary" href={getCalendarLinkingUri()}>
          Link calendar
        </LinkButton>
      )}
      <>{JSON.stringify(data)}</>
      <ConfirmDialog
        hidden={!isOpen}
        onClose={onClose}
        onConfirmed={onUnlinkClicked}
        confirmLabel="Unlink"
        title="Unlink calendar?"
        isProcessing={isProcessing}
      >
        Are you sure you want to unlink your {provider} calendar account?
      </ConfirmDialog>
    </>
  )
}
