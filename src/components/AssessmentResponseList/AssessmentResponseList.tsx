import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Badge, BadgeProps, Body } from "@fluentui/react-components"

import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import {
  CheckboxVisibility,
  CommandBar,
  DetailsListLayoutMode,
  ICommandBarItemProps,
  SelectionMode,
  ShimmeredDetailsList,
} from "@fluentui/react"
import { useGetAssessmentByIdQuery } from "$queries"
import styled from "@emotion/styled"
import { AssessmentResponseActions } from "./AssessmentResponseList.styles"
import { useMemo } from "react"
import {
  metricResponseColumns,
  metricResponses,
} from "./AssessmentResponseList.data"

export interface IAssessmentResponseListProps {
  isLoadingResponses: boolean
}

export const AssessmentResponseList: React.FunctionComponent<
  IAssessmentResponseListProps
> = ({ isLoadingResponses }) => {
  const responseActions: ICommandBarItemProps[] = useMemo(
    () => [
      {
        key: "new",
        text: "New",
        iconProps: { iconName: "Add" },
      },
      {
        key: "edit",
        text: "Edit",
        iconProps: { iconName: "Edit" },
      },
      {
        key: "delete",
        text: "Delete",
        iconProps: { iconName: "Delete" },
      },
    ],
    []
  )

  return (
    <>
      {/* <AssessmentResponseActions
        items={responseActions}
        ariaLabel="Assessment response actions"
      /> */}
      <ShimmeredDetailsList
        items={metricResponses}
        columns={metricResponseColumns}
        selectionMode={SelectionMode.single}
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        checkboxVisibility={CheckboxVisibility.always}
        enableShimmer={isLoadingResponses}
        shimmerLines={5}
        onActiveItemChanged={(item) => {
          console.log("SELECTED")
          console.log(item)
        }}
      />
    </>
  )
}
