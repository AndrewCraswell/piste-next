import {
  CheckboxVisibility,
  DetailsListLayoutMode,
  ICommandBarItemProps,
  SelectionMode,
  Selection,
  ShimmeredDetailsList,
} from "@fluentui/react"
import {
  AssessmentResponseActions,
  NoImageCardHeader,
} from "./AssessmentResponseList.styles"
import { useMemo, useState } from "react"
import {
  metricResponseColumns,
  metricResponses,
} from "./AssessmentResponseList.data"
import { Card } from "@fluentui/react-components/unstable"

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
      <Card>
        <NoImageCardHeader
          header={
            <AssessmentResponseActions
              items={responseActions}
              ariaLabel="Assessment response actions"
            />
          }
        />
        <ShimmeredDetailsList
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
      </Card>
    </>
  )
}
