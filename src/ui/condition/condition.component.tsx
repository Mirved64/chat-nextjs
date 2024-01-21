import { ConditionProps } from './condition.interfaces'

export const Condition = ({ match, children }: ConditionProps) => (match ? children : null)
