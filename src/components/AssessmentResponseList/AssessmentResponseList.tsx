import {
  CheckboxVisibility,
  DetailsListLayoutMode,
  ICommandBarItemProps,
  SelectionMode,
  ShimmeredDetailsList,
  Selection,
} from "@fluentui/react"
import {
  AssessmentResponseActions,
  ResponseDetailsList,
} from "./AssessmentResponseList.styles"
import { useMemo, useState } from "react"
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
  const [selectedResponse, setSelectedResponse] = useState<any>(undefined)

  const responseActions = useMemo(
    (): ICommandBarItemProps[] => [
      {
        key: "new",
        text: "New",
        iconProps: { iconName: "Add" },
      },
      {
        key: "edit",
        text: "Edit",
        iconProps: { iconName: "Edit" },
        disabled: !selectedResponse,
      },
      {
        key: "delete",
        text: "Delete",
        iconProps: { iconName: "Delete" },
        disabled: !selectedResponse,
      },
    ],
    [selectedResponse]
  )

  const selection = new Selection({
    onSelectionChanged: () => {
      setSelectedResponse(getSelectedItem())
    },
  })

  function getSelectedItem() {
    const items = selection.getSelection()
    return items.length ? items[0] : undefined
  }

  return (
    <>
      <AssessmentResponseActions
        items={responseActions}
        ariaLabel="Assessment response actions"
      />
      <ResponseDetailsList
        items={metricResponses}
        columns={metricResponseColumns}
        selectionMode={SelectionMode.single}
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        checkboxVisibility={CheckboxVisibility.always}
        enableShimmer={isLoadingResponses}
        shimmerLines={5}
        selection={selection}
      />
    </>
  )
}
