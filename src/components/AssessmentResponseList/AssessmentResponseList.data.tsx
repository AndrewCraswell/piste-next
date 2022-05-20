import { Badge, BadgeProps } from "@fluentui/react-components"

export const metricResponses = [
  {
    name: "Andrew Craswell",
    proctor: "Stewart Watson",
    date: "5/20/2022",
    metrics: 11,
    score: 96,
    status: "Complete",
  },
  {
    name: "Kevin Mar",
    proctor: "Stewart Watson",
    date: "5/19/2022",
    metrics: 11,
    score: 85,
    status: "Incomplete",
  },
  {
    name: "Yasser ElDarawani",
    proctor: "Stewart Watson",
    date: "5/17/2022",
    metrics: 11,
    score: 0,
    status: "Not started",
  },
]

export const metricResponseColumns = [
  {
    fieldName: "name",
    key: "name",
    name: "Name",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "proctor",
    key: "proctor",
    name: "Proctor",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "date",
    key: "date",
    name: "Date",
    minWidth: 75,
    maxWidth: 150,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
    isSortedDescending: true,
    isSorted: true,
  },
  {
    fieldName: "metrics",
    key: "metrics",
    name: "Metrics",
    minWidth: 75,
    maxWidth: 150,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "score",
    key: "score",
    name: "Score",
    minWidth: 75,
    maxWidth: 150,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "status",
    key: "status",
    name: "Status",
    minWidth: 75,
    maxWidth: 150,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
    onRender: (item: any) => {
      let color: BadgeProps["color"] = "informative"

      switch (item.status) {
        case "Complete":
          color = "success"
          break
        case "Incomplete":
          color = "warning"
          break
        case "Not started":
          color = "danger"
          break
      }

      return (
        <Badge appearance="filled" color={color}>
          {item.status}
        </Badge>
      )
    },
  },
]
