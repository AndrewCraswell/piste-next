export function formatFullName(config: {
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
}) {
  const { firstName = "", lastName = "", nickname = "" } = config

  return (
    `${firstName} ${lastName}` + (nickname ? ` (${nickname})` : "")
  ).trim()
}
