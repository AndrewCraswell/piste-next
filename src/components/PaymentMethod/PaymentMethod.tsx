import styled from "@emotion/styled"
import { Badge, Text } from "@fluentui/react-components"
import { PaymentMethod as StripePayment } from "@stripe/stripe-js"
import { lighten } from "polished"

const PaymentCard = styled.button<{ primaryColor: string }>`
  // Remove user agent button styles
  position: relative;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // Add card styles
  font-size: 2.5rem;
  font-family: "OCR A Std", monospace;
  text-shadow: -0.01em -0.01em 0.01em #eee;
  width: 6.15em;
  height: 3.85em;
  color: #c0c0c0;
  border-radius: 10px;
  padding: 0.9em 0.3em 0.3em 0.5em;
  box-shadow: ${({ theme }) => theme.fluentV9.shadow8};
  display: grid;

  background-image: linear-gradient(
    147deg,
    ${({ primaryColor }) => lighten(0.15, primaryColor)} 0%,
    ${({ primaryColor }) => primaryColor} 60%,
    ${({ primaryColor }) => lighten(0.15, primaryColor)} 100%
  );

  &:hover {
    box-shadow: ${({ theme }) => theme.fluentV9.shadow28};

    background-image: linear-gradient(
      147deg,
      ${({ primaryColor }) => lighten(0.15, primaryColor)} 0%,
      ${({ primaryColor }) => primaryColor} 40%,
      ${({ primaryColor }) => lighten(0.15, primaryColor)} 100%
    );
  }

  // Add the standard credit card fonts
  @font-face {
    font-family: "OCR A Std";
    src: url("/fonts/ocr_a_std/OCRAStd.eot");
    src: url("/fonts/ocr_a_std/OCRAStd.eot?#iefix") format("embedded-opentype"),
      url("/fonts/ocr_a_std/OCRAStd.woff2") format("woff2"),
      url("/fonts/ocr_a_std/OCRAStd.woff") format("woff"),
      url("/fonts/ocr_a_std/OCRAStd.ttf") format("truetype");
  }
`

const EpsChip = styled.img`
  height: 0.6em;
  margin: 0 0 0.3em 0.1em;
`

const CardNumber = styled(Text)`
  font-size: 0.38em;
  font-family: "OCR A Std", monospace;
  margin-bottom: 0.6em;
`

const ExpirationRow = styled.div`
  font-size: 0.3em;
  justify-content: center;
  align-items: center;
  display: flex;

  & > span:first-of-type {
    font-size: 0.5em;
    display: block;
    margin-right: 1em;
    text-shadow: none;
  }

  & > span:last-child {
    font-size: 0.8em;
  }
`

const CardAttribution = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`

const CardName = styled.div`
  font-size: 0.28em;
  flex-grow: 1;
  text-transform: uppercase;
  text-align: left;
`

const PaymentLogo = styled.img`
  width: 1em;
  margin: -0.15em 0;
`

const DefaultBadge = styled(Badge)`
  position: absolute;
  right: 1em;
  top: 1em;
  border: none;
`

export interface IPaymentMethodProps {
  card: StripePayment.Card
  themeIndex?: number
  name?: string | null
  isDefault?: boolean
}

export const PaymentMethod: React.FunctionComponent<IPaymentMethodProps> = ({
  card,
  themeIndex,
  name,
  isDefault,
}) => {
  const { brand, exp_month, exp_year, last4 } = card

  const color = getCardColor({ index: themeIndex, last4 })
  const logoName = getLogoName(brand)
  const month = exp_month.toString().padStart(2, "0")
  const year = exp_year.toString().substring(2)
  const fullName = name ?? "Unknown"

  return (
    <PaymentCard primaryColor={color}>
      {isDefault ? (
        <DefaultBadge appearance="filled" size="large" color="success">
          Default
        </DefaultBadge>
      ) : null}
      <EpsChip src="/payments/emv.svg" alt="" />
      <CardNumber>**** **** **** {last4}</CardNumber>
      <ExpirationRow>
        <span>
          GOOD
          <br />
          THRU
        </span>
        <span>
          {month}/{year}
        </span>
      </ExpirationRow>
      <CardAttribution>
        <CardName>{fullName}</CardName>
        <PaymentLogo src={`/payments/${logoName}.svg`} />
      </CardAttribution>
    </PaymentCard>
  )
}

const getCardColor = (options: { index?: number; last4?: string }) => {
  let { index = undefined, last4 = "" } = options

  // Calculate a theme to use
  if (index === undefined) {
    index = parseInt(last4) ?? 0
  }

  const colorIndex = index % 5
  switch (colorIndex) {
    case 4:
      return "#750b1c"
    case 3:
      return "#b6480e"
    case 2:
      return "#6b0045"
    case 1:
      return "#005669"
    case 0:
    default:
      return "#28313b"
  }
}

const getLogoName = (brand: string) => {
  switch (brand) {
    case "amex":
    case "diners":
      return "amex"
    case "discover":
      return "discover"
    case "mastercard":
      return "mastercard"
    case "visa":
      return "visa"
    case "unknown":
    default:
      return "cc"
  }
}
