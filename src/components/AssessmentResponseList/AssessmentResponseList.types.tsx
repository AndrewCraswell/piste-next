export type AssessmentEvaluationAnswer = {
  value: string
  notes?: string
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
  score: number
  createdAt: string
}
