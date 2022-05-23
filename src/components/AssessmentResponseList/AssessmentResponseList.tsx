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
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { submissionColumns } from "./AssessmentResponseList.data"
import {
  Card,
  Input,
  InputOnChangeData,
} from "@fluentui/react-components/unstable"
import { SearchRegular } from "@fluentui/react-icons"
import {
  GetMetricAnswersByAssessmentIdQuery,
  useGetMetricAnswersByAssessmentIdQuery,
} from "$queries"
import { useRouter } from "next/router"
import {
  sortSubmissionsByDate,
  submissionSearchFactory,
  mapAssessmentSubmissionsToTable,
} from "./AssessmentResponseList.utils"

// TODO: Clean up component and separate into subcomponents

export interface IAssessmentResponseListProps {
  assessmentId: string
}

export const AssessmentResponseList: React.FunctionComponent<
  IAssessmentResponseListProps
> = ({ assessmentId }) => {
  const [selectedSubmission, setSelectedSubmission] = useState<
    AssessmentSubmission | undefined
  >(undefined)
  let [submissions, setSubmissions] = useState<AssessmentSubmission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    AssessmentSubmission[]
  >([])
  const router = useRouter()

  const { loading: isSubmissionsLoading } =
    useGetMetricAnswersByAssessmentIdQuery({
      variables: {
        assessmentId,
      },
      skip: !assessmentId,
      onCompleted: (data) => {
        const submissions = mapAssessmentSubmissionsToTable(
          data.assessments_assessment_result
        ).sort(sortSubmissionsByDate)

        setSubmissions(submissions)
        setFilteredSubmissions(submissions)
      },
      fetchPolicy: "cache-and-network",
    })

  const responseActions = useMemo(
    (): ICommandBarItemProps[] => [
      {
        key: "edit",
        text: "Edit",
        iconProps: { iconName: "Edit" },
        disabled: !selectedSubmission,
        onClick: () => {
          if (selectedSubmission) {
            const submissionId = selectedSubmission.submissionId
            router.push(`/assessments/${assessmentId}/${submissionId}`)
          }
        },
      },
      {
        key: "delete",
        text: "Delete",
        iconProps: { iconName: "Delete" },
        disabled: !selectedSubmission,
      },
    ],
    [assessmentId, router, selectedSubmission]
  )

  const selection = useMemo(() => {
    const selection = new Selection<AssessmentSubmission>({
      onSelectionChanged: () => {
        const selectedItem = getSelectedItem()
        setSelectedSubmission(selectedItem)
      },
      getKey: (item) => item.submissionId,
    })

    function getSelectedItem() {
      const items = selection.getSelection()
      return items.length ? items[0] : undefined
    }

    return selection
  }, [])

  const resetFilteredSubmissions = useCallback(() => {
    setFilteredSubmissions(submissions)
  }, [submissions])

  const filterSubmissions = useCallback(
    (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
      if (data.value) {
        const filterFunc = submissionSearchFactory(data.value)
        const filteredItems = submissions.filter(filterFunc)

        setFilteredSubmissions(filteredItems)
      } else {
        resetFilteredSubmissions()
      }
    },
    [resetFilteredSubmissions, submissions]
  )

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
                          placeholder="Filter by name"
                          onChange={filterSubmissions}
                        />
                      </div>
                    )
                  },
                },
              ]}
              ariaLabel="Evaluation actions"
            />
          }
        />
        <ShimmeredDetailsList
          items={filteredSubmissions}
          columns={submissionColumns}
          selectionMode={SelectionMode.single}
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          checkboxVisibility={CheckboxVisibility.always}
          enableShimmer={isSubmissionsLoading}
          shimmerLines={5}
          selection={selection as any}
        />
      </Card>
    </>
  )
}

export type MetricAnswer = NonNullable<
  GetMetricAnswersByAssessmentIdQuery["assessments_assessment_result"]
>[0]

export type AssessmentSubmissionAnswer = {
  value: string
  notes: string
}

export type AssessmentSubmission = {
  submissionId: string
  fencerName: string
  fencerId: string
  completedAnswers: AssessmentSubmissionAnswer[]
  metricsCount: number
  proctorName: string
  proctorAccountId: string
  status: string
  score: string
  createdAt: string
}
