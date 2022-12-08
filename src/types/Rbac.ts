export type ClubRole = "armorer" | "coach" | "owner" | "member" | "admin"
export type AppRole = "admin" | "support"

export type AtLeastOne<T> = Partial<T> &
  { [K in keyof T]: { [_ in K]-?: T[K] } }[keyof T]

export type RbacRules<T = ClubRole | AppRole> = AtLeastOne<{
  anyOf?: T[]
  allOf?: T[]
}>

export type RbacRuleRoles<T = ClubRole | AppRole> = {
  required?: T[]
  roles: T[]
}

export type RbacPolicy = {
  clubRules?: RbacRules<ClubRole>
  appRules?: RbacRules<AppRole>
}

export class RbacRulesEvaluator<T = ClubRole | AppRole> {
  private _rules: RbacRules<T>

  get rules(): RbacRules<T> {
    return this._rules
  }

  set rules(rules: RbacRules<T>) {
    this._rules = rules
  }

  constructor(rules: RbacRules<T>) {
    this._rules = rules
  }

  public isAuthorized(roles: T[]): boolean {
    return this.anyOf(roles) && this.allOf(roles)
  }

  private anyOf(roles: T[]): boolean {
    return RbacRulesEvaluator.anyOf({
      required: this.rules.anyOf,
      roles,
    })
  }

  private allOf(roles: T[]): boolean {
    return RbacRulesEvaluator.allOf({
      required: this.rules.allOf,
      roles,
    })
  }

  static isAuthorized<T>(policy: RbacRules<T>, roles: T[]): boolean {
    const anyOfRuleRoles: RbacRuleRoles<T> = {
      required: policy.anyOf,
      roles,
    }

    const allOfRuleRoles: RbacRuleRoles<T> = {
      required: policy.allOf,
      roles,
    }

    return (
      RbacRulesEvaluator.anyOf(anyOfRuleRoles) &&
      RbacRulesEvaluator.allOf(allOfRuleRoles)
    )
  }

  static anyOf<T>(policy: RbacRuleRoles<T>): boolean {
    if (!policy.required || !policy.required.length) {
      return true
    }

    return !!policy.roles.find((r) => policy.required?.includes(r))
  }

  static allOf<T>(policy: RbacRuleRoles<T>): boolean {
    if (!policy.required || !policy.required.length) {
      return true
    }

    return policy.required.every((r) => policy.roles.includes(r))
  }
}
