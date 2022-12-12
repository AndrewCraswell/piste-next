import styled from "@emotion/styled"

import { useGetPaymentMethodsQuery } from "$store"
import { PaymentMethodCard } from "$components/Cards/PaymentMethodCard"
import { ElementsProvider, PaymentMethodForm } from "$components/Forms"

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, 292px);
`

export function PaymentMethodsManager() {
  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")

  return (
    <>
      <PaymentMethodsGrid>
        {paymentMethods?.map(({ card, id, billing_details }, index) => {
          if (card) {
            return (
              <PaymentMethodCard
                key={id}
                card={card}
                themeIndex={index}
                name={billing_details.name}
                onEditClick={(event, card) => console.log("EDIT", card)}
              />
            )
          } else {
            return null
          }
        })}
      </PaymentMethodsGrid>
      <ElementsProvider>
        <PaymentMethodForm />
      </ElementsProvider>
    </>
  )
}
