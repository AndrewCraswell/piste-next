import { GetMetricAnswersByAssessmentIdQuery } from "$queries"
import { formatFullName } from "$lib"

export function mapAssessmentEvaluationsToTable(
  evaluations: MetricAnswer[]
): AssessmentEvaluation[] {
  return evaluations.map((s) => ({
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
    evaluationId: s.id,
    completedAnswers: [], // TODO: Map these
    status: s.status_id,
    score: "???",
    createdAt: s.created_at,
  }))
}

export function sortEvaluationsByDate(
  a: AssessmentEvaluation,
  b: AssessmentEvaluation
) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
}

export function evaluationSearchFactory(searchText: string) {
  const filter = new RegExp(searchText, "i")

  return (evaluation: AssessmentEvaluation) =>
    evaluation.fencerName?.search(filter) > -1 ||
    evaluation.proctorName?.search(filter) > -1
}

export type MetricAnswer = NonNullable<
  GetMetricAnswersByAssessmentIdQuery["assessments_assessment_result"]
>[0]

export type AssessmentEvaluationAnswer = {
  value: string
  notes: string
}

export type AssessmentEvaluation = {
  evaluationId: string
  fencerName: string
  fencerId: string
  completedAnswers: AssessmentEvaluationAnswer[]
  metricsCount: number
  proctorName: string
  proctorAccountId: string
  status: string
  score: string
  createdAt: string
}
