export type ClubRole = "Armorer" | "Coach" | "Owner" | "Member" | "Admin"
export type AppRole = "Admin" | "Support"

export type RbacRules<T = ClubRole | AppRole> = {
  anyOf?: T[]
  allOf?: T[]
} & ({ anyOf: T[] } | { allOf: T[] })

export type RbacRuleRoles<T = ClubRole | AppRole> = {
  required?: T[]
  roles: T[]
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

  public isAuthorized(roles: T[]) {
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

  static anyOf<T>(options: RbacRuleRoles<T>): boolean {
    if (!options.required || !options.required.length) {
      return true
    }

    return !!options.roles.find((r) => options.required?.includes(r))
  }

  static allOf<T>(options: RbacRuleRoles<T>): boolean {
    if (!options.required || !options.required.length) {
      return true
    }

    return options.required.every((r) => options.roles.includes(r))
  }
}
