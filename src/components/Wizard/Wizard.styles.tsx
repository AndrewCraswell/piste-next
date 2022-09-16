import styled from "@emotion/styled"

import { Caption2 } from "@fluentui/react-components"

export const WizardContent = styled.div`
  margin: ${({ theme }) => theme.fluentV9.spacingVerticalL}
    ${({ theme }) => theme.fluentV9.spacingHorizontalM};
`

export const Connector = styled.div`
  flex: 1 1 auto;
  align-items: center;
  display: flex;

  ::after {
    display: block;
    height: 1px;
    background-color: #bdbdbd;
    content: "";
    width: 100%;
  }
`

export const Step = styled.a`
  padding: 0 ${({ theme }) => theme.fluentV9.spacingHorizontalS};
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &.active {
    & > .icon {
      background-color: ${({ theme }) =>
        theme.fluentV9.colorBrandBackgroundStatic};
      color: white;
    }

    & > .label > span {
      font-weight: ${({ theme }) => theme.fluentV9.fontWeightSemibold};
    }
  }

  &.completed {
    & > .icon {
      background-color: green;
      color: white;
    }
  }

  &.error {
  }

  &.skipped {
  }
`

export const StepIcon = styled.div`
  min-width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.fluentV9.borderRadiusCircular};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: ${({ theme }) => theme.fluentV9.spacingHorizontalS};
  border: 1px solid #bdbdbd;
`

export const StepCaption = styled(Caption2)`
  text-transform: uppercase;
`
