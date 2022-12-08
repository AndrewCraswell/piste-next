import React from "react"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  partitionAvatarGroupItems,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Tab,
  TabList,
  Tooltip,
} from "@fluentui/react-components"
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableCellLayout,
  TableCellActions,
} from "@fluentui/react-components/unstable"
import {
  // Sized
  Accessibility16Regular,
  Call16Regular,
  Mail16Regular,
  Info16Regular,
  Guest16Regular,
  Person16Regular,
  ContactCard16Regular,
  MoreHorizontal16Regular,
  FoodCake16Regular,
  PeopleTeam16Regular,

  // Unsized icons
  DrawerAddRegular,
  DrawerArrowDownloadRegular,
  AddRegular,
  FilterRegular,
  SearchRegular,
} from "@fluentui/react-icons"

import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import {
  MemberDetailItem,
  MemberDetailsList,
} from "$components/Cards/MemberDetailsCard"
import {
  DefaultPageLayout,
  PageToolbar,
  PageToolbarGrow,
} from "$components/AppShell/components"
import { useTabs, TabPanelList, TabPanel } from "$components/Tabs"
import { EditIcon, DeleteIcon, SendIcon } from "$components/Icons"
import { GetClubMembersByIdQuery, useGetClubMembersByIdQuery } from "$queries"
import { formatFullName } from "$lib/formatFullName"
import { formatPhoneNumber } from "$lib/formatPhoneNumber"
import { formatLocalLocalizedTime } from "$lib/formatLocalTime"
import { RoleBadge, RoleBadgeList } from "$components/RoleBadge"
import { ClubRole } from "$types/Rbac"

// TODO: Enable assigning/removing user role

// TODO: Make users filterable
//    - Name, Email, Phone, MembershipId
// TODO: Enable sort by name

// TODO: Show only staff

// TODO: Make data exportable to CSV, JSON, and Excel

type ClubStudent = NonNullable<
  GetClubMembersByIdQuery["club_accounts"][0]["Account"]["Students"][0]
>

type ClubAccount = NonNullable<
  GetClubMembersByIdQuery["club_accounts"][0]["Account"]
>

const UsersPage: React.FunctionComponent = () => {
  const pageTitle = "Users"
  useTrackPisteMetric({ componentName: "UsersPage" })
  const { onTabSelected, selectedTab } = useTabs("membersTab")

  // TODO: Parameterize the clubId
  const { data, loading, error } = useGetClubMembersByIdQuery({
    variables: {
      clubId: "61B591E9-5093-4A05-A3C2-6E7154660BA2",
    },
  })

  const accounts = data?.club_accounts.reduce((members, account) => {
    return [...members, account.Account]
  }, [] as ClubAccount[])

  const members = accounts?.reduce((members, account) => {
    return [...members, ...account.Students]
  }, [] as ClubStudent[])

  return (
    <>
      <PageToolbar>
        <Menu>
          <MenuTrigger>
            <MenuButton appearance="primary" icon={<AddRegular />}>
              Add
            </MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>Account</MenuItem>
              <MenuItem>Athlete</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>

        <Tooltip content="Import athletes from a CSV file" relationship="label">
          <Button icon={<DrawerAddRegular />}>Import</Button>
        </Tooltip>

        <Menu>
          <MenuTrigger>
            <MenuButton icon={<DrawerArrowDownloadRegular />}>
              Export
            </MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>CSV</MenuItem>
              <MenuItem>Excel</MenuItem>
              <MenuItem>JSON</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>

        <PageToolbarGrow />

        <Button icon={<FilterRegular />}>Filter</Button>
        <Input
          contentBefore={<SearchRegular />}
          placeholder="Search users"
          onChange={() => {}}
        />
      </PageToolbar>

      <DefaultPageLayout title={pageTitle}>
        <TabList onTabSelect={onTabSelected} selectedValue={selectedTab}>
          <Tab value="membersTab">Athletes</Tab>
          <Tab value="accountsTab">Accounts</Tab>
          <Tab value="staffTab">Staff</Tab>
        </TabList>

        <TabPanelList selectedPanel={selectedTab}>
          <TabPanel name="membersTab">
            <Table size="medium">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>
                    <Person16Regular /> Name
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Mail16Regular /> Email
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Call16Regular /> Phone
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Accessibility16Regular /> Gender
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <FoodCake16Regular /> Birthdate
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <ContactCard16Regular /> Association membership
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members?.map((m) => (
                  <TableRow key={m.StudentId}>
                    <TableCell>
                      <TableCellLayout
                        media={
                          <Avatar
                            name={formatFullName({
                              firstName: m.FirstName,
                              lastName: m.LastName,
                              nickname: m.Nickname,
                            })}
                            badge={{
                              status: m.Oid ? "available" : "offline",
                            }}
                            color="colorful"
                          />
                        }
                      >
                        {formatFullName({
                          firstName: m.FirstName,
                          lastName: m.LastName,
                          nickname: m.Nickname,
                        })}
                      </TableCellLayout>
                      <TableCellActions>
                        <Menu>
                          <MenuTrigger>
                            <Button
                              icon={<MoreHorizontal16Regular />}
                              appearance="subtle"
                            />
                          </MenuTrigger>

                          <MenuPopover>
                            <MenuList>
                              <MenuGroup>
                                <MenuGroupHeader>Modify</MenuGroupHeader>
                                <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                                <MenuItem icon={<DeleteIcon />}>
                                  Remove
                                </MenuItem>
                                <MenuItem icon={<SendIcon />}>Invite</MenuItem>
                              </MenuGroup>
                              <MenuDivider />
                              <MenuGroup>
                                <MenuGroupHeader>View</MenuGroupHeader>
                                <MenuItem>View account</MenuItem>
                                <MenuItem>View athlete</MenuItem>
                              </MenuGroup>
                            </MenuList>
                          </MenuPopover>
                        </Menu>
                      </TableCellActions>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>{m.Email}</TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>
                        {formatPhoneNumber(m.Phone)}
                      </TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>{m.Gender ?? "Unknown"}</TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>
                        {m.Birthdate
                          ? formatLocalLocalizedTime(m.Birthdate, "ll")
                          : "Unknown"}
                      </TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>{m.AssociationMemberId}</TableCellLayout>
                      <TableCellActions>
                        <Popover>
                          <PopoverTrigger>
                            <Button
                              icon={<Info16Regular />}
                              appearance="subtle"
                            />
                          </PopoverTrigger>
                          <PopoverSurface>
                            <MemberDetailsList>
                              <MemberDetailItem
                                title="Member Id"
                                value={m.AssociationMemberId}
                              />
                              <MemberDetailItem
                                title="Expiration"
                                value={m.AssociationMember?.Expiration}
                              />
                              <MemberDetailItem
                                title="Birthdate"
                                value={m.AssociationMember?.Birthdate}
                              />
                              <MemberDetailItem
                                title="Foil"
                                value={m.AssociationMember?.Foil}
                              />
                              <MemberDetailItem
                                title="Epee"
                                value={m.AssociationMember?.Epee}
                              />
                              <MemberDetailItem
                                title="Sabre"
                                value={m.AssociationMember?.Saber}
                              />
                            </MemberDetailsList>
                          </PopoverSurface>
                        </Popover>
                      </TableCellActions>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel name="accountsTab">
            <Table size="medium">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>
                    <Person16Regular /> Name
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Mail16Regular /> Email
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Call16Regular /> Phone
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <PeopleTeam16Regular /> Family
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Guest16Regular /> Roles
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts?.map(
                  ({ Oid, Students, Student, AccountClubRoles }) => (
                    <TableRow key={Oid + Student?.StudentId}>
                      <TableCell>
                        <TableCellLayout
                          media={
                            <Avatar
                              name={formatFullName({
                                firstName: Student?.FirstName,
                                lastName: Student?.LastName,
                                nickname: Student?.Nickname,
                              })}
                              badge={{
                                status: Oid ? "available" : "offline",
                              }}
                              color="colorful"
                            />
                          }
                        >
                          {formatFullName({
                            firstName: Student?.FirstName,
                            lastName: Student?.LastName,
                            nickname: Student?.Nickname,
                          })}
                        </TableCellLayout>
                        <TableCellActions>
                          <Menu>
                            <MenuTrigger>
                              <Button
                                icon={<MoreHorizontal16Regular />}
                                appearance="subtle"
                              />
                            </MenuTrigger>

                            <MenuPopover>
                              <MenuList>
                                <MenuGroup>
                                  <MenuGroupHeader>Modify</MenuGroupHeader>
                                  <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                                  <MenuItem icon={<DeleteIcon />}>
                                    Remove
                                  </MenuItem>
                                  <MenuItem icon={<SendIcon />}>
                                    Invite
                                  </MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup>
                                  <MenuGroupHeader>View</MenuGroupHeader>
                                  <MenuItem>View account</MenuItem>
                                  <MenuItem>View athlete</MenuItem>
                                </MenuGroup>
                              </MenuList>
                            </MenuPopover>
                          </Menu>
                        </TableCellActions>
                      </TableCell>
                      <TableCell>
                        <TableCellLayout>{Student?.Email}</TableCellLayout>
                      </TableCell>
                      <TableCell>
                        <TableCellLayout>
                          {formatPhoneNumber(Student?.Phone)}
                        </TableCellLayout>
                      </TableCell>

                      <TableCell>
                        <TableCellLayout>
                          <MemberAvatarStack
                            names={Students.map((s) =>
                              formatFullName({
                                firstName: s.FirstName,
                                lastName: s.LastName,
                                nickname: s.Nickname,
                              })
                            )}
                          />
                        </TableCellLayout>
                      </TableCell>
                      <TableCell>
                        <TableCellLayout>
                          <RoleBadgeList maxItems={2}>
                            {AccountClubRoles.map((r) => (
                              <RoleBadge
                                key={r.ClubRoleId}
                                role={r.ClubRole.Name as ClubRole}
                              />
                            ))}
                          </RoleBadgeList>
                        </TableCellLayout>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel name="staffTab"></TabPanel>
        </TabPanelList>
      </DefaultPageLayout>
    </>
  )
}

export default UsersPage

const MemberAvatarStack: React.FunctionComponent<{ names: string[] }> = ({
  names,
}) => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
    layout: "stack",
    maxInlineItems: 4,
  })

  return (
    <AvatarGroup layout="stack" size={24}>
      {inlineItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {overflowItems && (
        <AvatarGroupPopover>
          {overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  )
}
