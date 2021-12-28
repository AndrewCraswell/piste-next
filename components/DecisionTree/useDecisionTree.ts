import { useContext } from "react"

import { DecisionTreeContext } from "./DecisionTreeContext"

export const useDecisionTree = () => useContext(DecisionTreeContext)
