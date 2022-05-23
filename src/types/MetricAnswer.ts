import { GetMetricAnswersByAssessmentIdQuery } from "$queries"

export type MetricAnswer = NonNullable<
  GetMetricAnswersByAssessmentIdQuery["assessments_assessment_result"]
>[0]
