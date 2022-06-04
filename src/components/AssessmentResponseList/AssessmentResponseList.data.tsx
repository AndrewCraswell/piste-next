import { Badge, BadgeProps, Caption1 } from "@fluentui/react-components"

import { AssessmentEvaluation } from "./AssessmentResponseList.types"
import { formatLocalLocalizedTime } from "$lib/formatLocalTime"

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
        <Caption1>{formatLocalLocalizedTime(item.createdAt, "lll")}</Caption1>
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
    onRender: (item: AssessmentEvaluation) => (
      <Caption1>
        {item.completedAnswers.length}/{item.metricsCount}
      </Caption1>
    ),
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
    onRender: (item: AssessmentEvaluation) => (
      <Caption1>{Math.round(item.score * 100)}%</Caption1>
    ),
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
