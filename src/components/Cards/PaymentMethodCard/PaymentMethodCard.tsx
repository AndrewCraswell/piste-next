import { IPaymentMethodProps, PaymentMethod } from "$components"
import styled from "@emotion/styled"
import { IButtonProps } from "@fluentui/react"
import { PaymentMethod as PM } from "@stripe/stripe-js"
import { useMemo } from "react"
import { HorizontalCard } from ".."

const PaymentContainer = styled(HorizontalCard)`
  padding: 0;
  border-radius: 10px 4px 4px 10px;

  & > .ms-Stack {
    button {
      box-shadow: none;
    }
  }

  & > .ms-Stack > .ms-Stack:last-of-type {
    margin: 0;
    border: none;
    padding: 6px;
  }
`

export interface IPaymentMethodCardProps extends IPaymentMethodProps {
  onEditClick?: (event: any, card: PM.Card) => void
  onDeleteClick?: (event: any, card: PM.Card) => void
}

export const PaymentMethodCard: React.FunctionComponent<
  IPaymentMethodCardProps
> = (props) => {
  const { card, onEditClick, onDeleteClick } = props

  const paymentActions: IButtonProps[] = useMemo(
    () => [
      {
        iconProps: { iconName: "Edit" },
        onClick: (event) => {
          onEditClick?.(event, card)
        },
      },
      {
        iconProps: {
          iconName: "Delete",
          onClick: (event) => {
            onDeleteClick?.(event, card)
          },
        },
      },
    ],
    []
  )

  return (
    <PaymentContainer actions={paymentActions}>
      <PaymentMethod {...props} />
    </PaymentContainer>
  )
}
