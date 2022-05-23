import { GetMetricAnswersByAssessmentIdQuery } from "$queries"
import { formatFullName } from "$lib"

export function mapAssessmentSubmissionsToTable(
  submissions: MetricAnswer[]
): AssessmentSubmission[] {
  return submissions.map((s) => ({
    fencerId: s.fencer?.StudentId,
    fencerName: formatFullName({
      firstName: s.fencer?.FirstName,
      lastName: s.fencer?.LastName,
      nickname: s.fencer?.Nickname,
    }),
    metricsCount: s.metric_results.length,
    proctorName: formatFullName({
      firstName: s.proctor?.Student?.FirstName,
      lastName: s.proctor?.Student?.LastName,
      nickname: s.proctor?.Student?.Nickname,
    }),
    proctorAccountId: s.proctor?.Oid!,
    submissionId: s.id,
    completedAnswers: [], // TODO: Map these
    status: s.status_id,
    score: "???",
    createdAt: s.created_at,
  }))
}

export function sortSubmissionsByDate(
  a: AssessmentSubmission,
  b: AssessmentSubmission
) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
}

export function submissionSearchFactory(searchText: string) {
  const filter = new RegExp(searchText, "i")

  return (submission: AssessmentSubmission) =>
    submission.fencerName?.search(filter) > -1 ||
    submission.proctorName?.search(filter) > -1
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
