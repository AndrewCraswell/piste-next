export interface MetricFieldItem {
  metric_id: any
  order_number: number
  value?: string | null
  notes?: string | null
  metric_question: {
    id: any
    title: string
    description?: string | null | undefined
    metric_type_id: string
  }
}
