import styled from "@emotion/styled"
import {
  MotionAnimations,
  MotionDurations,
  MotionTimings,
} from "@fluentui/react"

export const Card = styled.div`
  background: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.m};
  margin: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.l1};
  border-radius: ${({ theme }) => theme.effects.roundedCorner4};
  background-clip: padding-box;
  position: relative;
  box-shadow: ${({ theme }) => theme.effects.elevation4};
  animation: ${MotionAnimations.slideUpIn};
  animation-duration: ${MotionDurations.duration4};
  animation-timing-function: ${MotionTimings.decelerate};
  display: inline-block;
`
