import { OneToTenDecimalSlider } from "./components/OneToTenDecimalSlider"
import { OneToTenRadios } from "./components/OneToTenRadios"
import { MetricAdapterProps } from "./MetricAdapter.types"

export function MetricAdapter(props: MetricAdapterProps) {
  const { type, ...fieldProps } = props

  switch (type) {
    case "1-10-radios":
      return <OneToTenRadios {...fieldProps} />
    case "1-10-decimal-slider":
      return <OneToTenDecimalSlider {...fieldProps} />
    default:
      return <></>
  }
}
