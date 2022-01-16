import styled from "@emotion/styled"
import { AnimationStyles } from "@fluentui/react"

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.effects.roundedCorner4};
  border: 1px solid ${({ theme }) => theme.palette.neutralLight};
  background-clip: padding-box;
  position: relative;
  box-shadow: ${({ theme }) => theme.effects.elevation4};
  ${AnimationStyles.slideUpIn20 as unknown as string}
  display: inline-block;
`
