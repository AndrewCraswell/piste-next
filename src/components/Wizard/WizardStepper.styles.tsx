import styled from "@emotion/styled"

import { Caption2 } from "@fluentui/react-components"

export const Stepper = styled.div`
  display: flex;
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

export const StepLink = styled.a`
  padding: 0 ${({ theme }) => theme.fluentV9.spacingHorizontalS};
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &.skipped {
    & > .icon {
      color: ${({ theme }) => theme.fluentV9.colorNeutralForeground1};
    }
  }

  &.completed {
    & > .icon {
      background-color: ${({ theme }) =>
        theme.fluentV9.colorPaletteGreenBackground3};
      border-color: ${({ theme }) =>
        theme.fluentV9.colorPaletteGreenBackground3};
      color: ${({ theme }) => theme.fluentV9.colorNeutralForegroundInverted};
    }
  }

  &.error {
    & > .icon {
      background-color: ${({ theme }) =>
        theme.fluentV9.colorPaletteRedBackground3};
      border-color: ${({ theme }) => theme.fluentV9.colorPaletteRedBackground3};
      color: ${({ theme }) => theme.fluentV9.colorNeutralForegroundInverted};
    }
  }

  &.active {
    & > .icon {
      background-color: ${({ theme }) =>
        theme.fluentV9.colorBrandBackgroundStatic};
      border-color: ${({ theme }) => theme.fluentV9.colorBrandBackgroundStatic};
      color: ${({ theme }) => theme.fluentV9.colorNeutralForegroundInverted};
    }

    & > .label > span {
      font-weight: ${({ theme }) => theme.fluentV9.fontWeightSemibold};
    }
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
  border: 1px solid ${({ theme }) => theme.fluentV9.colorNeutralForeground1};
`

export const StepCaption = styled(Caption2)`
  text-transform: uppercase;
`
