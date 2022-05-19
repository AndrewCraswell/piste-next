export interface IAssessmentMetadata {
  id: string
  title: string
  description: string | null | undefined
  createdAt: Date
  metricsCount: number
  cohortsCount: number
}
