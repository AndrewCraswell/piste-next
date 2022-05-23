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
