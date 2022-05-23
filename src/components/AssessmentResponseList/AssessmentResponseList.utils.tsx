import { formatFullName } from "$lib"
import { MetricAnswer } from "$types"
import {
  AssessmentEvaluation,
  AssessmentEvaluationAnswer,
} from "./AssessmentResponseList.types"

export function mapAssessmentEvaluationsToTable(
  evaluations: MetricAnswer[]
): AssessmentEvaluation[] {
  return evaluations.map((s) => {
    const completedAnswers = s.metric_results
      .filter((a) => !!a.value)
      .map(
        (a): AssessmentEvaluationAnswer => ({
          notes: a.notes || undefined,
          value: a.value,
        })
      )

    const score =
      completedAnswers.reduce(
        (total, answer) => total + parseInt(answer.value),
        0
      ) / 100

    return {
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
      completedAnswers,
      status: s.status_id,
      score,
      createdAt: s.created_at,
    }
  })
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
