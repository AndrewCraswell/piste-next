import { GetAssessmentEvaluationsByIdQuery } from "$queries"

export type MetricAnswer = NonNullable<
  GetAssessmentEvaluationsByIdQuery["assessments_assessment_result"]
>[0]
