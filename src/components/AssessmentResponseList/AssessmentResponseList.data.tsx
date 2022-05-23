import { Badge, BadgeProps, Caption } from "@fluentui/react-components"

import { AssessmentEvaluation } from "./AssessmentResponseList"
import { formatLocalLocalizedTime } from "$lib"

export const evaluationColumns = [
  {
    fieldName: "fencerName",
    key: "name",
    name: "Name",
    minWidth: 125,
    maxWidth: 150,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "proctorName",
    key: "proctor",
    name: "Proctor",
    minWidth: 125,
    maxWidth: 200,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "createdAt",
    key: "date",
    name: "Date",
    minWidth: 125,
    maxWidth: 200,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
    isSortedDescending: true,
    isSorted: true,
    onRender: (item: AssessmentEvaluation) => {
      return (
        <Caption>{formatLocalLocalizedTime(item.createdAt, "lll")}</Caption>
      )
    },
  },
  {
    fieldName: "metricsCount",
    key: "metrics",
    name: "Metrics",
    minWidth: 75,
    maxWidth: 100,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "score",
    key: "score",
    name: "Score",
    minWidth: 50,
    maxWidth: 75,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
  },
  {
    fieldName: "status",
    key: "status",
    name: "Status",
    minWidth: 75,
    maxWidth: 100,
    isResizable: true,
    isCollapsible: true,
    isPadded: true,
    onRender: (item: AssessmentEvaluation) => {
      let color: BadgeProps["color"] = "informative"
      let label = item.status

      switch (item.status) {
        case "completed":
          color = "success"
          label = "Completed"
          break
        case "in-progress":
          color = "warning"
          label = "In progress"
          break
        case "not-started":
          color = "danger"
          label = "Not started"
          break
      }

      return (
        <Badge appearance="filled" color={color}>
          {label}
        </Badge>
      )
    },
  },
]
