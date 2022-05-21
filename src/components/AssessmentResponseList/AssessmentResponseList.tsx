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
import { Card, Input } from "@fluentui/react-components/unstable"
import { SearchRegular } from "@fluentui/react-icons"

// TODO: Clean up component and seaprate into subcomponents
// TODO: Query the actual responses for the assessmentId

export interface IAssessmentResponseListProps {
  isLoadingResponses: boolean
}

export const AssessmentResponseList: React.FunctionComponent<
  IAssessmentResponseListProps
> = ({ isLoadingResponses }) => {
  const [selectedResponse, setSelectedResponse] = useState<any>(undefined)
  const [responses, setResponses] = useState(metricResponses)

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
              farItems={[
                {
                  key: "search",
                  onRender: () => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: 8,
                        }}
                      >
                        <Input
                          contentBefore={<SearchRegular />}
                          onChange={(e, data) => {
                            console.log(data.value)
                            if (data.value) {
                              const filteredItems = metricResponses.filter(
                                (r) => {
                                  return (
                                    r.name
                                      .toLocaleLowerCase()
                                      .includes(
                                        data.value.toLocaleLowerCase()
                                      ) ||
                                    r.proctor
                                      .toLocaleLowerCase()
                                      .includes(data.value.toLocaleLowerCase())
                                  )
                                }
                              )
                              setResponses(filteredItems)
                            } else {
                              // Reset the responses
                              setResponses(metricResponses)
                            }
                          }}
                        />
                      </div>
                    )
                  },
                },
              ]}
              ariaLabel="Assessment response actions"
            />
          }
        />
        <ShimmeredDetailsList
          items={responses}
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
