import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  datetime2: any;
  uniqueidentifier: any;
};

/** columns and relationships of "AccountAppRoles" */
export type AccountAppRoles = {
  __typename?: 'AccountAppRoles';
  /** An object relationship */
  Account: Accounts;
  /** An object relationship */
  AppRole: AppRoles;
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};

/** aggregated selection of "AccountAppRoles" */
export type AccountAppRoles_Aggregate = {
  __typename?: 'AccountAppRoles_aggregate';
  aggregate?: Maybe<AccountAppRoles_Aggregate_Fields>;
  nodes: Array<AccountAppRoles>;
};

/** aggregate fields of "AccountAppRoles" */
export type AccountAppRoles_Aggregate_Fields = {
  __typename?: 'AccountAppRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AccountAppRoles_Max_Fields>;
  min?: Maybe<AccountAppRoles_Min_Fields>;
};


/** aggregate fields of "AccountAppRoles" */
export type AccountAppRoles_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<AccountAppRoles_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AccountAppRoles" */
export type AccountAppRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AccountAppRoles_Max_Order_By>;
  min?: InputMaybe<AccountAppRoles_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "AccountAppRoles". All fields are combined with a logical 'AND'. */
export type AccountAppRoles_Bool_Exp = {
  Account?: InputMaybe<Accounts_Bool_Exp>;
  AppRole?: InputMaybe<AppRoles_Bool_Exp>;
  AppRoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<AccountAppRoles_Bool_Exp>>;
  _not?: InputMaybe<AccountAppRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AccountAppRoles_Bool_Exp>>;
};

/** upsert condition type for table "AccountAppRoles" */
export type AccountAppRoles_If_Matched = {
  match_columns?: Array<AccountAppRoles_Insert_Match_Column>;
  update_columns?: Array<AccountAppRoles_Update_Column>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};

/** input type for inserting data into table "AccountAppRoles" */
export type AccountAppRoles_Insert_Input = {
  AppRoleId?: InputMaybe<Scalars['uniqueidentifier']>;
  Oid?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "AccountAppRoles" */
export enum AccountAppRoles_Insert_Match_Column {
  /** column name */
  AppRoleId = 'AppRoleId',
  /** column name */
  Oid = 'Oid'
}

/** aggregate max on columns */
export type AccountAppRoles_Max_Fields = {
  __typename?: 'AccountAppRoles_max_fields';
  Oid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AccountAppRoles" */
export type AccountAppRoles_Max_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AccountAppRoles_Min_Fields = {
  __typename?: 'AccountAppRoles_min_fields';
  Oid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AccountAppRoles" */
export type AccountAppRoles_Min_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "AccountAppRoles" */
export type AccountAppRoles_Mutation_Response = {
  __typename?: 'AccountAppRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AccountAppRoles>;
};

/** Ordering options when selecting data from "AccountAppRoles". */
export type AccountAppRoles_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  AppRole?: InputMaybe<AppRoles_Order_By>;
  AppRoleId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AccountAppRoles */
export type AccountAppRoles_Pk_Columns_Input = {
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};

/** select columns of table "AccountAppRoles" */
export enum AccountAppRoles_Select_Column {
  /** column name */
  AppRoleId = 'AppRoleId',
  /** column name */
  Oid = 'Oid'
}

/** input type for updating data in table "AccountAppRoles" */
export type AccountAppRoles_Set_Input = {
  AppRoleId?: InputMaybe<Scalars['uniqueidentifier']>;
  Oid?: InputMaybe<Scalars['String']>;
};

/** update columns of table "AccountAppRoles" */
export enum AccountAppRoles_Update_Column {
  /** column name */
  AppRoleId = 'AppRoleId',
  /** column name */
  Oid = 'Oid'
}

/** columns and relationships of "AccountClubRoles" */
export type AccountClubRoles = {
  __typename?: 'AccountClubRoles';
  /** An object relationship */
  Account: Accounts;
  /** An object relationship */
  Club: Clubs;
  ClubId: Scalars['uniqueidentifier'];
  /** An object relationship */
  ClubRole: ClubRoles;
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};

/** aggregated selection of "AccountClubRoles" */
export type AccountClubRoles_Aggregate = {
  __typename?: 'AccountClubRoles_aggregate';
  aggregate?: Maybe<AccountClubRoles_Aggregate_Fields>;
  nodes: Array<AccountClubRoles>;
};

/** aggregate fields of "AccountClubRoles" */
export type AccountClubRoles_Aggregate_Fields = {
  __typename?: 'AccountClubRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AccountClubRoles_Max_Fields>;
  min?: Maybe<AccountClubRoles_Min_Fields>;
};


/** aggregate fields of "AccountClubRoles" */
export type AccountClubRoles_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<AccountClubRoles_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AccountClubRoles" */
export type AccountClubRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AccountClubRoles_Max_Order_By>;
  min?: InputMaybe<AccountClubRoles_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "AccountClubRoles". All fields are combined with a logical 'AND'. */
export type AccountClubRoles_Bool_Exp = {
  Account?: InputMaybe<Accounts_Bool_Exp>;
  Club?: InputMaybe<Clubs_Bool_Exp>;
  ClubId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  ClubRole?: InputMaybe<ClubRoles_Bool_Exp>;
  ClubRoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<AccountClubRoles_Bool_Exp>>;
  _not?: InputMaybe<AccountClubRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AccountClubRoles_Bool_Exp>>;
};

/** upsert condition type for table "AccountClubRoles" */
export type AccountClubRoles_If_Matched = {
  match_columns?: Array<AccountClubRoles_Insert_Match_Column>;
  update_columns?: Array<AccountClubRoles_Update_Column>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};

/** input type for inserting data into table "AccountClubRoles" */
export type AccountClubRoles_Insert_Input = {
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  ClubRoleId?: InputMaybe<Scalars['uniqueidentifier']>;
  Oid?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "AccountClubRoles" */
export enum AccountClubRoles_Insert_Match_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  ClubRoleId = 'ClubRoleId',
  /** column name */
  Oid = 'Oid'
}

/** aggregate max on columns */
export type AccountClubRoles_Max_Fields = {
  __typename?: 'AccountClubRoles_max_fields';
  Oid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AccountClubRoles" */
export type AccountClubRoles_Max_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AccountClubRoles_Min_Fields = {
  __typename?: 'AccountClubRoles_min_fields';
  Oid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AccountClubRoles" */
export type AccountClubRoles_Min_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "AccountClubRoles" */
export type AccountClubRoles_Mutation_Response = {
  __typename?: 'AccountClubRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AccountClubRoles>;
};

/** Ordering options when selecting data from "AccountClubRoles". */
export type AccountClubRoles_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  Club?: InputMaybe<Clubs_Order_By>;
  ClubId?: InputMaybe<Order_By>;
  ClubRole?: InputMaybe<ClubRoles_Order_By>;
  ClubRoleId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AccountClubRoles */
export type AccountClubRoles_Pk_Columns_Input = {
  ClubId: Scalars['uniqueidentifier'];
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};

/** select columns of table "AccountClubRoles" */
export enum AccountClubRoles_Select_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  ClubRoleId = 'ClubRoleId',
  /** column name */
  Oid = 'Oid'
}

/** input type for updating data in table "AccountClubRoles" */
export type AccountClubRoles_Set_Input = {
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  ClubRoleId?: InputMaybe<Scalars['uniqueidentifier']>;
  Oid?: InputMaybe<Scalars['String']>;
};

/** update columns of table "AccountClubRoles" */
export enum AccountClubRoles_Update_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  ClubRoleId = 'ClubRoleId',
  /** column name */
  Oid = 'Oid'
}

/** columns and relationships of "Accounts" */
export type Accounts = {
  __typename?: 'Accounts';
  /** An array relationship */
  AccountAppRoles: Array<AccountAppRoles>;
  /** An aggregate relationship */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  /** An array relationship */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  AccountClubRoles_aggregate: AccountClubRoles_Aggregate;
  /** An object relationship */
  Address?: Maybe<Addresses>;
  AddressId?: Maybe<Scalars['uniqueidentifier']>;
  CreatedAt: Scalars['datetime2'];
  CreatedBy?: Maybe<Scalars['String']>;
  LanguageId: Scalars['String'];
  Oid: Scalars['String'];
  PrimaryStudentId?: Maybe<Scalars['uniqueidentifier']>;
  /** An object relationship */
  Student?: Maybe<Students>;
  /** An array relationship */
  Students: Array<Students>;
  /** An aggregate relationship */
  Students_aggregate: Students_Aggregate;
  UpdatedAt: Scalars['datetime2'];
  /** An array relationship */
  assessments: Array<Assessments_Assessments>;
  /** An aggregate relationship */
  assessments_aggregate: Assessments_Assessments_Aggregate;
  /** An object relationship */
  calendar?: Maybe<Calendars>;
  /** An array relationship */
  club_accounts: Array<Club_Accounts>;
  /** An aggregate relationship */
  club_accounts_aggregate: Club_Accounts_Aggregate;
};


/** columns and relationships of "Accounts" */
export type AccountsAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAccountAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAccountClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsStudents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAssessmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAssessments_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsClub_AccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsClub_Accounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};

/** aggregated selection of "Accounts" */
export type Accounts_Aggregate = {
  __typename?: 'Accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "Accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'Accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "Accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Accounts_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  AccountAppRoles?: InputMaybe<AccountAppRoles_Bool_Exp>;
  AccountClubRoles?: InputMaybe<AccountClubRoles_Bool_Exp>;
  Address?: InputMaybe<Addresses_Bool_Exp>;
  AddressId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  LanguageId?: InputMaybe<String_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  PrimaryStudentId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Student?: InputMaybe<Students_Bool_Exp>;
  Students?: InputMaybe<Students_Bool_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  assessments?: InputMaybe<Assessments_Assessments_Bool_Exp>;
  calendar?: InputMaybe<Calendars_Bool_Exp>;
  club_accounts?: InputMaybe<Club_Accounts_Bool_Exp>;
};

/** upsert condition type for table "Accounts" */
export type Accounts_If_Matched = {
  match_columns?: Array<Accounts_Insert_Match_Column>;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** input type for inserting data into table "Accounts" */
export type Accounts_Insert_Input = {
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  LanguageId?: InputMaybe<Scalars['String']>;
  Oid?: InputMaybe<Scalars['String']>;
  PrimaryStudentId?: InputMaybe<Scalars['uniqueidentifier']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "Accounts" */
export enum Accounts_Insert_Match_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  LanguageId = 'LanguageId',
  /** column name */
  Oid = 'Oid',
  /** column name */
  PrimaryStudentId = 'PrimaryStudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'Accounts_max_fields';
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  LanguageId?: Maybe<Scalars['String']>;
  Oid?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "Accounts" */
export type Accounts_Max_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'Accounts_min_fields';
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  LanguageId?: Maybe<Scalars['String']>;
  Oid?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "Accounts" */
export type Accounts_Min_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'Accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** Ordering options when selecting data from "Accounts". */
export type Accounts_Order_By = {
  AccountAppRoles_aggregate?: InputMaybe<AccountAppRoles_Aggregate_Order_By>;
  AccountClubRoles_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
  Address?: InputMaybe<Addresses_Order_By>;
  AddressId?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  PrimaryStudentId?: InputMaybe<Order_By>;
  Student?: InputMaybe<Students_Order_By>;
  Students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  assessments_aggregate?: InputMaybe<Assessments_Assessments_Aggregate_Order_By>;
  calendar?: InputMaybe<Calendars_Order_By>;
  club_accounts_aggregate?: InputMaybe<Club_Accounts_Aggregate_Order_By>;
};

/** primary key columns input for table: Accounts */
export type Accounts_Pk_Columns_Input = {
  Oid: Scalars['String'];
};

/** select columns of table "Accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  LanguageId = 'LanguageId',
  /** column name */
  Oid = 'Oid',
  /** column name */
  PrimaryStudentId = 'PrimaryStudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "Accounts" */
export type Accounts_Set_Input = {
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  LanguageId?: InputMaybe<Scalars['String']>;
  Oid?: InputMaybe<Scalars['String']>;
  PrimaryStudentId?: InputMaybe<Scalars['uniqueidentifier']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "Accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  LanguageId = 'LanguageId',
  /** column name */
  Oid = 'Oid',
  /** column name */
  PrimaryStudentId = 'PrimaryStudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** columns and relationships of "Addresses" */
export type Addresses = {
  __typename?: 'Addresses';
  /** An array relationship */
  Accounts: Array<Accounts>;
  /** An aggregate relationship */
  Accounts_aggregate: Accounts_Aggregate;
  Address: Scalars['String'];
  Address2?: Maybe<Scalars['String']>;
  AddressId: Scalars['uniqueidentifier'];
  City: Scalars['String'];
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An aggregate relationship */
  ClubLocations_aggregate: ClubLocations_Aggregate;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Postal: Scalars['String'];
  State: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};


/** columns and relationships of "Addresses" */
export type AddressesAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "Addresses" */
export type AddressesAccounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "Addresses" */
export type AddressesClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


/** columns and relationships of "Addresses" */
export type AddressesClubLocations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};

/** aggregated selection of "Addresses" */
export type Addresses_Aggregate = {
  __typename?: 'Addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "Addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'Addresses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
};


/** aggregate fields of "Addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Addresses_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  Accounts?: InputMaybe<Accounts_Bool_Exp>;
  Address?: InputMaybe<String_Mssql_Comparison_Exp>;
  Address2?: InputMaybe<String_Mssql_Comparison_Exp>;
  AddressId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  City?: InputMaybe<String_Mssql_Comparison_Exp>;
  ClubLocations?: InputMaybe<ClubLocations_Bool_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  Postal?: InputMaybe<String_Mssql_Comparison_Exp>;
  State?: InputMaybe<String_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>;
  _not?: InputMaybe<Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>;
};

/** upsert condition type for table "Addresses" */
export type Addresses_If_Matched = {
  match_columns?: Array<Addresses_Insert_Match_Column>;
  update_columns?: Array<Addresses_Update_Column>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** input type for inserting data into table "Addresses" */
export type Addresses_Insert_Input = {
  Address?: InputMaybe<Scalars['String']>;
  Address2?: InputMaybe<Scalars['String']>;
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  City?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Postal?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "Addresses" */
export enum Addresses_Insert_Match_Column {
  /** column name */
  Address = 'Address',
  /** column name */
  Address2 = 'Address2',
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  City = 'City',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Postal = 'Postal',
  /** column name */
  State = 'State',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'Addresses_max_fields';
  Address?: Maybe<Scalars['String']>;
  Address2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Postal?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'Addresses_min_fields';
  Address?: Maybe<Scalars['String']>;
  Address2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Postal?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** response of any mutation on the table "Addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'Addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** Ordering options when selecting data from "Addresses". */
export type Addresses_Order_By = {
  Accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  Address?: InputMaybe<Order_By>;
  Address2?: InputMaybe<Order_By>;
  AddressId?: InputMaybe<Order_By>;
  City?: InputMaybe<Order_By>;
  ClubLocations_aggregate?: InputMaybe<ClubLocations_Aggregate_Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Postal?: InputMaybe<Order_By>;
  State?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Addresses */
export type Addresses_Pk_Columns_Input = {
  AddressId: Scalars['uniqueidentifier'];
};

/** select columns of table "Addresses" */
export enum Addresses_Select_Column {
  /** column name */
  Address = 'Address',
  /** column name */
  Address2 = 'Address2',
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  City = 'City',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Postal = 'Postal',
  /** column name */
  State = 'State',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "Addresses" */
export type Addresses_Set_Input = {
  Address?: InputMaybe<Scalars['String']>;
  Address2?: InputMaybe<Scalars['String']>;
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  City?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Postal?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "Addresses" */
export enum Addresses_Update_Column {
  /** column name */
  Address = 'Address',
  /** column name */
  Address2 = 'Address2',
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  City = 'City',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Postal = 'Postal',
  /** column name */
  State = 'State',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** columns and relationships of "AppRoles" */
export type AppRoles = {
  __typename?: 'AppRoles';
  /** An array relationship */
  AccountAppRoles: Array<AccountAppRoles>;
  /** An aggregate relationship */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  Name: Scalars['String'];
  RoleId: Scalars['uniqueidentifier'];
};


/** columns and relationships of "AppRoles" */
export type AppRolesAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "AppRoles" */
export type AppRolesAccountAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};

/** aggregated selection of "AppRoles" */
export type AppRoles_Aggregate = {
  __typename?: 'AppRoles_aggregate';
  aggregate?: Maybe<AppRoles_Aggregate_Fields>;
  nodes: Array<AppRoles>;
};

/** aggregate fields of "AppRoles" */
export type AppRoles_Aggregate_Fields = {
  __typename?: 'AppRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AppRoles_Max_Fields>;
  min?: Maybe<AppRoles_Min_Fields>;
};


/** aggregate fields of "AppRoles" */
export type AppRoles_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<AppRoles_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "AppRoles". All fields are combined with a logical 'AND'. */
export type AppRoles_Bool_Exp = {
  AccountAppRoles?: InputMaybe<AccountAppRoles_Bool_Exp>;
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  RoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<AppRoles_Bool_Exp>>;
  _not?: InputMaybe<AppRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AppRoles_Bool_Exp>>;
};

/** upsert condition type for table "AppRoles" */
export type AppRoles_If_Matched = {
  match_columns?: Array<AppRoles_Insert_Match_Column>;
  update_columns?: Array<AppRoles_Update_Column>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
};

/** input type for inserting data into table "AppRoles" */
export type AppRoles_Insert_Input = {
  Name?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** select match_columns of table "AppRoles" */
export enum AppRoles_Insert_Match_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** aggregate max on columns */
export type AppRoles_Max_Fields = {
  __typename?: 'AppRoles_max_fields';
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AppRoles_Min_Fields = {
  __typename?: 'AppRoles_min_fields';
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "AppRoles" */
export type AppRoles_Mutation_Response = {
  __typename?: 'AppRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AppRoles>;
};

/** Ordering options when selecting data from "AppRoles". */
export type AppRoles_Order_By = {
  AccountAppRoles_aggregate?: InputMaybe<AccountAppRoles_Aggregate_Order_By>;
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AppRoles */
export type AppRoles_Pk_Columns_Input = {
  RoleId: Scalars['uniqueidentifier'];
};

/** select columns of table "AppRoles" */
export enum AppRoles_Select_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** input type for updating data in table "AppRoles" */
export type AppRoles_Set_Input = {
  Name?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** update columns of table "AppRoles" */
export enum AppRoles_Update_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** columns and relationships of "AssociationMembers" */
export type AssociationMembers = {
  __typename?: 'AssociationMembers';
  AssociationMemberId: Scalars['String'];
  BackgroundCheckExpires?: Maybe<Scalars['date']>;
  Birthdate: Scalars['Int'];
  CheckEd: Scalars['String'];
  Club1Abbreviation?: Maybe<Scalars['String']>;
  Club1Id?: Maybe<Scalars['String']>;
  Club1Name?: Maybe<Scalars['String']>;
  Club2Abbreviation?: Maybe<Scalars['String']>;
  Club2Id?: Maybe<Scalars['String']>;
  Club2Name?: Maybe<Scalars['String']>;
  Competitive: Scalars['String'];
  Division?: Maybe<Scalars['String']>;
  Epee: Scalars['String'];
  Expiration: Scalars['date'];
  FirstName: Scalars['String'];
  Foil: Scalars['String'];
  FullName: Scalars['String'];
  Gender?: Maybe<Scalars['String']>;
  LastModified: Scalars['datetime2'];
  LastName: Scalars['String'];
  MemberType: Scalars['String'];
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber: Scalars['String'];
  SafeSportExpires?: Maybe<Scalars['date']>;
  /** An array relationship */
  Students: Array<Students>;
  /** An aggregate relationship */
  Students_aggregate: Students_Aggregate;
  UpdatedAt: Scalars['datetime2'];
};


/** columns and relationships of "AssociationMembers" */
export type AssociationMembersStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "AssociationMembers" */
export type AssociationMembersStudents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "AssociationMembers" */
export type AssociationMembers_Aggregate = {
  __typename?: 'AssociationMembers_aggregate';
  aggregate?: Maybe<AssociationMembers_Aggregate_Fields>;
  nodes: Array<AssociationMembers>;
};

/** aggregate fields of "AssociationMembers" */
export type AssociationMembers_Aggregate_Fields = {
  __typename?: 'AssociationMembers_aggregate_fields';
  avg?: Maybe<AssociationMembers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AssociationMembers_Max_Fields>;
  min?: Maybe<AssociationMembers_Min_Fields>;
  stddev?: Maybe<AssociationMembers_Stddev_Fields>;
  stddev_pop?: Maybe<AssociationMembers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AssociationMembers_Stddev_Samp_Fields>;
  sum?: Maybe<AssociationMembers_Sum_Fields>;
  var_pop?: Maybe<AssociationMembers_Var_Pop_Fields>;
  var_samp?: Maybe<AssociationMembers_Var_Samp_Fields>;
  variance?: Maybe<AssociationMembers_Variance_Fields>;
};


/** aggregate fields of "AssociationMembers" */
export type AssociationMembers_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<AssociationMembers_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type AssociationMembers_Avg_Fields = {
  __typename?: 'AssociationMembers_avg_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "AssociationMembers". All fields are combined with a logical 'AND'. */
export type AssociationMembers_Bool_Exp = {
  AssociationMemberId?: InputMaybe<String_Mssql_Comparison_Exp>;
  BackgroundCheckExpires?: InputMaybe<Date_Mssql_Comparison_Exp>;
  Birthdate?: InputMaybe<Int_Mssql_Comparison_Exp>;
  CheckEd?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club1Abbreviation?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club1Id?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club1Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club2Abbreviation?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club2Id?: InputMaybe<String_Mssql_Comparison_Exp>;
  Club2Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Competitive?: InputMaybe<String_Mssql_Comparison_Exp>;
  Division?: InputMaybe<String_Mssql_Comparison_Exp>;
  Epee?: InputMaybe<String_Mssql_Comparison_Exp>;
  Expiration?: InputMaybe<Date_Mssql_Comparison_Exp>;
  FirstName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Foil?: InputMaybe<String_Mssql_Comparison_Exp>;
  FullName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Gender?: InputMaybe<String_Mssql_Comparison_Exp>;
  LastModified?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  MemberType?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  Region?: InputMaybe<String_Mssql_Comparison_Exp>;
  Saber?: InputMaybe<String_Mssql_Comparison_Exp>;
  SafeSportExpires?: InputMaybe<Date_Mssql_Comparison_Exp>;
  Students?: InputMaybe<Students_Bool_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<AssociationMembers_Bool_Exp>>;
  _not?: InputMaybe<AssociationMembers_Bool_Exp>;
  _or?: InputMaybe<Array<AssociationMembers_Bool_Exp>>;
};

/** upsert condition type for table "AssociationMembers" */
export type AssociationMembers_If_Matched = {
  match_columns?: Array<AssociationMembers_Insert_Match_Column>;
  update_columns?: Array<AssociationMembers_Update_Column>;
  where?: InputMaybe<AssociationMembers_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "AssociationMembers" */
export type AssociationMembers_Inc_Input = {
  Birthdate?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "AssociationMembers" */
export type AssociationMembers_Insert_Input = {
  AssociationMemberId?: InputMaybe<Scalars['String']>;
  BackgroundCheckExpires?: InputMaybe<Scalars['date']>;
  Birthdate?: InputMaybe<Scalars['Int']>;
  CheckEd?: InputMaybe<Scalars['String']>;
  Club1Abbreviation?: InputMaybe<Scalars['String']>;
  Club1Id?: InputMaybe<Scalars['String']>;
  Club1Name?: InputMaybe<Scalars['String']>;
  Club2Abbreviation?: InputMaybe<Scalars['String']>;
  Club2Id?: InputMaybe<Scalars['String']>;
  Club2Name?: InputMaybe<Scalars['String']>;
  Competitive?: InputMaybe<Scalars['String']>;
  Division?: InputMaybe<Scalars['String']>;
  Epee?: InputMaybe<Scalars['String']>;
  Expiration?: InputMaybe<Scalars['date']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Foil?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  LastModified?: InputMaybe<Scalars['datetime2']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "AssociationMembers" */
export enum AssociationMembers_Insert_Match_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  BackgroundCheckExpires = 'BackgroundCheckExpires',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CheckEd = 'CheckEd',
  /** column name */
  Club1Abbreviation = 'Club1Abbreviation',
  /** column name */
  Club1Id = 'Club1Id',
  /** column name */
  Club1Name = 'Club1Name',
  /** column name */
  Club2Abbreviation = 'Club2Abbreviation',
  /** column name */
  Club2Id = 'Club2Id',
  /** column name */
  Club2Name = 'Club2Name',
  /** column name */
  Competitive = 'Competitive',
  /** column name */
  Division = 'Division',
  /** column name */
  Epee = 'Epee',
  /** column name */
  Expiration = 'Expiration',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Foil = 'Foil',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastModified = 'LastModified',
  /** column name */
  LastName = 'LastName',
  /** column name */
  MemberType = 'MemberType',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Region = 'Region',
  /** column name */
  Saber = 'Saber',
  /** column name */
  SafeSportExpires = 'SafeSportExpires',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate max on columns */
export type AssociationMembers_Max_Fields = {
  __typename?: 'AssociationMembers_max_fields';
  AssociationMemberId?: Maybe<Scalars['String']>;
  BackgroundCheckExpires?: Maybe<Scalars['date']>;
  Birthdate?: Maybe<Scalars['Int']>;
  CheckEd?: Maybe<Scalars['String']>;
  Club1Abbreviation?: Maybe<Scalars['String']>;
  Club1Id?: Maybe<Scalars['String']>;
  Club1Name?: Maybe<Scalars['String']>;
  Club2Abbreviation?: Maybe<Scalars['String']>;
  Club2Id?: Maybe<Scalars['String']>;
  Club2Name?: Maybe<Scalars['String']>;
  Competitive?: Maybe<Scalars['String']>;
  Division?: Maybe<Scalars['String']>;
  Epee?: Maybe<Scalars['String']>;
  Expiration?: Maybe<Scalars['date']>;
  FirstName?: Maybe<Scalars['String']>;
  Foil?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  LastModified?: Maybe<Scalars['datetime2']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** aggregate min on columns */
export type AssociationMembers_Min_Fields = {
  __typename?: 'AssociationMembers_min_fields';
  AssociationMemberId?: Maybe<Scalars['String']>;
  BackgroundCheckExpires?: Maybe<Scalars['date']>;
  Birthdate?: Maybe<Scalars['Int']>;
  CheckEd?: Maybe<Scalars['String']>;
  Club1Abbreviation?: Maybe<Scalars['String']>;
  Club1Id?: Maybe<Scalars['String']>;
  Club1Name?: Maybe<Scalars['String']>;
  Club2Abbreviation?: Maybe<Scalars['String']>;
  Club2Id?: Maybe<Scalars['String']>;
  Club2Name?: Maybe<Scalars['String']>;
  Competitive?: Maybe<Scalars['String']>;
  Division?: Maybe<Scalars['String']>;
  Epee?: Maybe<Scalars['String']>;
  Expiration?: Maybe<Scalars['date']>;
  FirstName?: Maybe<Scalars['String']>;
  Foil?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  LastModified?: Maybe<Scalars['datetime2']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** response of any mutation on the table "AssociationMembers" */
export type AssociationMembers_Mutation_Response = {
  __typename?: 'AssociationMembers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AssociationMembers>;
};

/** Ordering options when selecting data from "AssociationMembers". */
export type AssociationMembers_Order_By = {
  AssociationMemberId?: InputMaybe<Order_By>;
  BackgroundCheckExpires?: InputMaybe<Order_By>;
  Birthdate?: InputMaybe<Order_By>;
  CheckEd?: InputMaybe<Order_By>;
  Club1Abbreviation?: InputMaybe<Order_By>;
  Club1Id?: InputMaybe<Order_By>;
  Club1Name?: InputMaybe<Order_By>;
  Club2Abbreviation?: InputMaybe<Order_By>;
  Club2Id?: InputMaybe<Order_By>;
  Club2Name?: InputMaybe<Order_By>;
  Competitive?: InputMaybe<Order_By>;
  Division?: InputMaybe<Order_By>;
  Epee?: InputMaybe<Order_By>;
  Expiration?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Foil?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  Gender?: InputMaybe<Order_By>;
  LastModified?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  MemberType?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
  Region?: InputMaybe<Order_By>;
  Saber?: InputMaybe<Order_By>;
  SafeSportExpires?: InputMaybe<Order_By>;
  Students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AssociationMembers */
export type AssociationMembers_Pk_Columns_Input = {
  AssociationMemberId: Scalars['String'];
};

/** select columns of table "AssociationMembers" */
export enum AssociationMembers_Select_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  BackgroundCheckExpires = 'BackgroundCheckExpires',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CheckEd = 'CheckEd',
  /** column name */
  Club1Abbreviation = 'Club1Abbreviation',
  /** column name */
  Club1Id = 'Club1Id',
  /** column name */
  Club1Name = 'Club1Name',
  /** column name */
  Club2Abbreviation = 'Club2Abbreviation',
  /** column name */
  Club2Id = 'Club2Id',
  /** column name */
  Club2Name = 'Club2Name',
  /** column name */
  Competitive = 'Competitive',
  /** column name */
  Division = 'Division',
  /** column name */
  Epee = 'Epee',
  /** column name */
  Expiration = 'Expiration',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Foil = 'Foil',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastModified = 'LastModified',
  /** column name */
  LastName = 'LastName',
  /** column name */
  MemberType = 'MemberType',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Region = 'Region',
  /** column name */
  Saber = 'Saber',
  /** column name */
  SafeSportExpires = 'SafeSportExpires',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "AssociationMembers" */
export type AssociationMembers_Set_Input = {
  AssociationMemberId?: InputMaybe<Scalars['String']>;
  BackgroundCheckExpires?: InputMaybe<Scalars['date']>;
  Birthdate?: InputMaybe<Scalars['Int']>;
  CheckEd?: InputMaybe<Scalars['String']>;
  Club1Abbreviation?: InputMaybe<Scalars['String']>;
  Club1Id?: InputMaybe<Scalars['String']>;
  Club1Name?: InputMaybe<Scalars['String']>;
  Club2Abbreviation?: InputMaybe<Scalars['String']>;
  Club2Id?: InputMaybe<Scalars['String']>;
  Club2Name?: InputMaybe<Scalars['String']>;
  Competitive?: InputMaybe<Scalars['String']>;
  Division?: InputMaybe<Scalars['String']>;
  Epee?: InputMaybe<Scalars['String']>;
  Expiration?: InputMaybe<Scalars['date']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Foil?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  LastModified?: InputMaybe<Scalars['datetime2']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** aggregate stddev on columns */
export type AssociationMembers_Stddev_Fields = {
  __typename?: 'AssociationMembers_stddev_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AssociationMembers_Stddev_Pop_Fields = {
  __typename?: 'AssociationMembers_stddev_pop_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AssociationMembers_Stddev_Samp_Fields = {
  __typename?: 'AssociationMembers_stddev_samp_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type AssociationMembers_Sum_Fields = {
  __typename?: 'AssociationMembers_sum_fields';
  Birthdate?: Maybe<Scalars['Int']>;
};

/** update columns of table "AssociationMembers" */
export enum AssociationMembers_Update_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  BackgroundCheckExpires = 'BackgroundCheckExpires',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CheckEd = 'CheckEd',
  /** column name */
  Club1Abbreviation = 'Club1Abbreviation',
  /** column name */
  Club1Id = 'Club1Id',
  /** column name */
  Club1Name = 'Club1Name',
  /** column name */
  Club2Abbreviation = 'Club2Abbreviation',
  /** column name */
  Club2Id = 'Club2Id',
  /** column name */
  Club2Name = 'Club2Name',
  /** column name */
  Competitive = 'Competitive',
  /** column name */
  Division = 'Division',
  /** column name */
  Epee = 'Epee',
  /** column name */
  Expiration = 'Expiration',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Foil = 'Foil',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastModified = 'LastModified',
  /** column name */
  LastName = 'LastName',
  /** column name */
  MemberType = 'MemberType',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Region = 'Region',
  /** column name */
  Saber = 'Saber',
  /** column name */
  SafeSportExpires = 'SafeSportExpires',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate var_pop on columns */
export type AssociationMembers_Var_Pop_Fields = {
  __typename?: 'AssociationMembers_var_pop_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AssociationMembers_Var_Samp_Fields = {
  __typename?: 'AssociationMembers_var_samp_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AssociationMembers_Variance_Fields = {
  __typename?: 'AssociationMembers_variance_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "ClubLocations" */
export type ClubLocations = {
  __typename?: 'ClubLocations';
  /** An object relationship */
  Address: Addresses;
  AddressId: Scalars['uniqueidentifier'];
  /** An object relationship */
  Club: Clubs;
  ClubId: Scalars['uniqueidentifier'];
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email: Scalars['String'];
  LocationId: Scalars['String'];
  Name: Scalars['String'];
  Phone: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** aggregated selection of "ClubLocations" */
export type ClubLocations_Aggregate = {
  __typename?: 'ClubLocations_aggregate';
  aggregate?: Maybe<ClubLocations_Aggregate_Fields>;
  nodes: Array<ClubLocations>;
};

/** aggregate fields of "ClubLocations" */
export type ClubLocations_Aggregate_Fields = {
  __typename?: 'ClubLocations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ClubLocations_Max_Fields>;
  min?: Maybe<ClubLocations_Min_Fields>;
};


/** aggregate fields of "ClubLocations" */
export type ClubLocations_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<ClubLocations_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ClubLocations" */
export type ClubLocations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ClubLocations_Max_Order_By>;
  min?: InputMaybe<ClubLocations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "ClubLocations". All fields are combined with a logical 'AND'. */
export type ClubLocations_Bool_Exp = {
  Address?: InputMaybe<Addresses_Bool_Exp>;
  AddressId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Club?: InputMaybe<Clubs_Bool_Exp>;
  ClubId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  Email?: InputMaybe<String_Mssql_Comparison_Exp>;
  LocationId?: InputMaybe<String_Mssql_Comparison_Exp>;
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Phone?: InputMaybe<String_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<ClubLocations_Bool_Exp>>;
  _not?: InputMaybe<ClubLocations_Bool_Exp>;
  _or?: InputMaybe<Array<ClubLocations_Bool_Exp>>;
};

/** upsert condition type for table "ClubLocations" */
export type ClubLocations_If_Matched = {
  match_columns?: Array<ClubLocations_Insert_Match_Column>;
  update_columns?: Array<ClubLocations_Update_Column>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};

/** input type for inserting data into table "ClubLocations" */
export type ClubLocations_Insert_Input = {
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  LocationId?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "ClubLocations" */
export enum ClubLocations_Insert_Match_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  LocationId = 'LocationId',
  /** column name */
  Name = 'Name',
  /** column name */
  Phone = 'Phone',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate max on columns */
export type ClubLocations_Max_Fields = {
  __typename?: 'ClubLocations_max_fields';
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  LocationId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "ClubLocations" */
export type ClubLocations_Max_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  LocationId?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ClubLocations_Min_Fields = {
  __typename?: 'ClubLocations_min_fields';
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  LocationId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "ClubLocations" */
export type ClubLocations_Min_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  LocationId?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ClubLocations" */
export type ClubLocations_Mutation_Response = {
  __typename?: 'ClubLocations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ClubLocations>;
};

/** Ordering options when selecting data from "ClubLocations". */
export type ClubLocations_Order_By = {
  Address?: InputMaybe<Addresses_Order_By>;
  AddressId?: InputMaybe<Order_By>;
  Club?: InputMaybe<Clubs_Order_By>;
  ClubId?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  LocationId?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ClubLocations */
export type ClubLocations_Pk_Columns_Input = {
  LocationId: Scalars['String'];
};

/** select columns of table "ClubLocations" */
export enum ClubLocations_Select_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  LocationId = 'LocationId',
  /** column name */
  Name = 'Name',
  /** column name */
  Phone = 'Phone',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "ClubLocations" */
export type ClubLocations_Set_Input = {
  AddressId?: InputMaybe<Scalars['uniqueidentifier']>;
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  LocationId?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "ClubLocations" */
export enum ClubLocations_Update_Column {
  /** column name */
  AddressId = 'AddressId',
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  LocationId = 'LocationId',
  /** column name */
  Name = 'Name',
  /** column name */
  Phone = 'Phone',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** columns and relationships of "ClubRoles" */
export type ClubRoles = {
  __typename?: 'ClubRoles';
  /** An array relationship */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  AccountClubRoles_aggregate: AccountClubRoles_Aggregate;
  Name: Scalars['String'];
  RoleId: Scalars['uniqueidentifier'];
};


/** columns and relationships of "ClubRoles" */
export type ClubRolesAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "ClubRoles" */
export type ClubRolesAccountClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};

/** aggregated selection of "ClubRoles" */
export type ClubRoles_Aggregate = {
  __typename?: 'ClubRoles_aggregate';
  aggregate?: Maybe<ClubRoles_Aggregate_Fields>;
  nodes: Array<ClubRoles>;
};

/** aggregate fields of "ClubRoles" */
export type ClubRoles_Aggregate_Fields = {
  __typename?: 'ClubRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ClubRoles_Max_Fields>;
  min?: Maybe<ClubRoles_Min_Fields>;
};


/** aggregate fields of "ClubRoles" */
export type ClubRoles_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<ClubRoles_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ClubRoles". All fields are combined with a logical 'AND'. */
export type ClubRoles_Bool_Exp = {
  AccountClubRoles?: InputMaybe<AccountClubRoles_Bool_Exp>;
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  RoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<ClubRoles_Bool_Exp>>;
  _not?: InputMaybe<ClubRoles_Bool_Exp>;
  _or?: InputMaybe<Array<ClubRoles_Bool_Exp>>;
};

/** upsert condition type for table "ClubRoles" */
export type ClubRoles_If_Matched = {
  match_columns?: Array<ClubRoles_Insert_Match_Column>;
  update_columns?: Array<ClubRoles_Update_Column>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};

/** input type for inserting data into table "ClubRoles" */
export type ClubRoles_Insert_Input = {
  Name?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** select match_columns of table "ClubRoles" */
export enum ClubRoles_Insert_Match_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** aggregate max on columns */
export type ClubRoles_Max_Fields = {
  __typename?: 'ClubRoles_max_fields';
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ClubRoles_Min_Fields = {
  __typename?: 'ClubRoles_min_fields';
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ClubRoles" */
export type ClubRoles_Mutation_Response = {
  __typename?: 'ClubRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ClubRoles>;
};

/** Ordering options when selecting data from "ClubRoles". */
export type ClubRoles_Order_By = {
  AccountClubRoles_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ClubRoles */
export type ClubRoles_Pk_Columns_Input = {
  RoleId: Scalars['uniqueidentifier'];
};

/** select columns of table "ClubRoles" */
export enum ClubRoles_Select_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** input type for updating data in table "ClubRoles" */
export type ClubRoles_Set_Input = {
  Name?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** update columns of table "ClubRoles" */
export enum ClubRoles_Update_Column {
  /** column name */
  Name = 'Name',
  /** column name */
  RoleId = 'RoleId'
}

/** columns and relationships of "Clubs" */
export type Clubs = {
  __typename?: 'Clubs';
  /** An array relationship */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  AccountClubRoles_aggregate: AccountClubRoles_Aggregate;
  ClubId: Scalars['uniqueidentifier'];
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An aggregate relationship */
  ClubLocations_aggregate: ClubLocations_Aggregate;
  Code?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Division?: Maybe<Scalars['String']>;
  IsClaimed?: Maybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  Region?: Maybe<Scalars['Int']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
  UsaFencingId: Scalars['String'];
  Website?: Maybe<Scalars['String']>;
  /** An array relationship */
  club_accounts: Array<Club_Accounts>;
  /** An aggregate relationship */
  club_accounts_aggregate: Club_Accounts_Aggregate;
};


/** columns and relationships of "Clubs" */
export type ClubsAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsAccountClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsClubLocations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsClub_AccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsClub_Accounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};

/** aggregated selection of "Clubs" */
export type Clubs_Aggregate = {
  __typename?: 'Clubs_aggregate';
  aggregate?: Maybe<Clubs_Aggregate_Fields>;
  nodes: Array<Clubs>;
};

/** aggregate fields of "Clubs" */
export type Clubs_Aggregate_Fields = {
  __typename?: 'Clubs_aggregate_fields';
  avg?: Maybe<Clubs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Clubs_Max_Fields>;
  min?: Maybe<Clubs_Min_Fields>;
  stddev?: Maybe<Clubs_Stddev_Fields>;
  stddev_pop?: Maybe<Clubs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Clubs_Stddev_Samp_Fields>;
  sum?: Maybe<Clubs_Sum_Fields>;
  var_pop?: Maybe<Clubs_Var_Pop_Fields>;
  var_samp?: Maybe<Clubs_Var_Samp_Fields>;
  variance?: Maybe<Clubs_Variance_Fields>;
};


/** aggregate fields of "Clubs" */
export type Clubs_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Clubs_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Clubs_Avg_Fields = {
  __typename?: 'Clubs_avg_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Clubs". All fields are combined with a logical 'AND'. */
export type Clubs_Bool_Exp = {
  AccountClubRoles?: InputMaybe<AccountClubRoles_Bool_Exp>;
  ClubId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  ClubLocations?: InputMaybe<ClubLocations_Bool_Exp>;
  Code?: InputMaybe<String_Mssql_Comparison_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  Division?: InputMaybe<String_Mssql_Comparison_Exp>;
  IsClaimed?: InputMaybe<Boolean_Mssql_Comparison_Exp>;
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Region?: InputMaybe<Int_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  UsaFencingId?: InputMaybe<String_Mssql_Comparison_Exp>;
  Website?: InputMaybe<String_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Clubs_Bool_Exp>>;
  _not?: InputMaybe<Clubs_Bool_Exp>;
  _or?: InputMaybe<Array<Clubs_Bool_Exp>>;
  club_accounts?: InputMaybe<Club_Accounts_Bool_Exp>;
};

/** upsert condition type for table "Clubs" */
export type Clubs_If_Matched = {
  match_columns?: Array<Clubs_Insert_Match_Column>;
  update_columns?: Array<Clubs_Update_Column>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "Clubs" */
export type Clubs_Inc_Input = {
  Region?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Clubs" */
export type Clubs_Insert_Input = {
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  Code?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Division?: InputMaybe<Scalars['String']>;
  IsClaimed?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['Int']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
  UsaFencingId?: InputMaybe<Scalars['String']>;
  Website?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "Clubs" */
export enum Clubs_Insert_Match_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  Code = 'Code',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Division = 'Division',
  /** column name */
  IsClaimed = 'IsClaimed',
  /** column name */
  Name = 'Name',
  /** column name */
  Region = 'Region',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UsaFencingId = 'UsaFencingId',
  /** column name */
  Website = 'Website'
}

/** aggregate max on columns */
export type Clubs_Max_Fields = {
  __typename?: 'Clubs_max_fields';
  Code?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Division?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['Int']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
  UsaFencingId?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Clubs_Min_Fields = {
  __typename?: 'Clubs_min_fields';
  Code?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Division?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['Int']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
  UsaFencingId?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Clubs" */
export type Clubs_Mutation_Response = {
  __typename?: 'Clubs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Clubs>;
};

/** Ordering options when selecting data from "Clubs". */
export type Clubs_Order_By = {
  AccountClubRoles_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
  ClubId?: InputMaybe<Order_By>;
  ClubLocations_aggregate?: InputMaybe<ClubLocations_Aggregate_Order_By>;
  Code?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Division?: InputMaybe<Order_By>;
  IsClaimed?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Region?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  UsaFencingId?: InputMaybe<Order_By>;
  Website?: InputMaybe<Order_By>;
  club_accounts_aggregate?: InputMaybe<Club_Accounts_Aggregate_Order_By>;
};

/** primary key columns input for table: Clubs */
export type Clubs_Pk_Columns_Input = {
  ClubId: Scalars['uniqueidentifier'];
};

/** select columns of table "Clubs" */
export enum Clubs_Select_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  Code = 'Code',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Division = 'Division',
  /** column name */
  IsClaimed = 'IsClaimed',
  /** column name */
  Name = 'Name',
  /** column name */
  Region = 'Region',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UsaFencingId = 'UsaFencingId',
  /** column name */
  Website = 'Website'
}

/** input type for updating data in table "Clubs" */
export type Clubs_Set_Input = {
  ClubId?: InputMaybe<Scalars['uniqueidentifier']>;
  Code?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Division?: InputMaybe<Scalars['String']>;
  IsClaimed?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['Int']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
  UsaFencingId?: InputMaybe<Scalars['String']>;
  Website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Clubs_Stddev_Fields = {
  __typename?: 'Clubs_stddev_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Clubs_Stddev_Pop_Fields = {
  __typename?: 'Clubs_stddev_pop_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Clubs_Stddev_Samp_Fields = {
  __typename?: 'Clubs_stddev_samp_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Clubs_Sum_Fields = {
  __typename?: 'Clubs_sum_fields';
  Region?: Maybe<Scalars['Int']>;
};

/** update columns of table "Clubs" */
export enum Clubs_Update_Column {
  /** column name */
  ClubId = 'ClubId',
  /** column name */
  Code = 'Code',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Division = 'Division',
  /** column name */
  IsClaimed = 'IsClaimed',
  /** column name */
  Name = 'Name',
  /** column name */
  Region = 'Region',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UsaFencingId = 'UsaFencingId',
  /** column name */
  Website = 'Website'
}

/** aggregate var_pop on columns */
export type Clubs_Var_Pop_Fields = {
  __typename?: 'Clubs_var_pop_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Clubs_Var_Samp_Fields = {
  __typename?: 'Clubs_var_samp_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Clubs_Variance_Fields = {
  __typename?: 'Clubs_variance_fields';
  Region?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Students" */
export type Students = {
  __typename?: 'Students';
  /** An object relationship */
  Account?: Maybe<Accounts>;
  /** An object relationship */
  AssociationMember?: Maybe<AssociationMembers>;
  AssociationMemberId?: Maybe<Scalars['String']>;
  AvatarUrl?: Maybe<Scalars['String']>;
  Birthdate?: Maybe<Scalars['date']>;
  CreatedAt: Scalars['datetime2'];
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  FirstName: Scalars['String'];
  Gender?: Maybe<Scalars['String']>;
  LastName: Scalars['String'];
  Nickname?: Maybe<Scalars['String']>;
  Oid?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  StudentId: Scalars['uniqueidentifier'];
  UpdatedAt: Scalars['datetime2'];
  /** An object relationship */
  account?: Maybe<Accounts>;
};

/** aggregated selection of "Students" */
export type Students_Aggregate = {
  __typename?: 'Students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

/** aggregate fields of "Students" */
export type Students_Aggregate_Fields = {
  __typename?: 'Students_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
};


/** aggregate fields of "Students" */
export type Students_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Students_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Students" */
export type Students_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Students_Max_Order_By>;
  min?: InputMaybe<Students_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  Account?: InputMaybe<Accounts_Bool_Exp>;
  AssociationMember?: InputMaybe<AssociationMembers_Bool_Exp>;
  AssociationMemberId?: InputMaybe<String_Mssql_Comparison_Exp>;
  AvatarUrl?: InputMaybe<String_Mssql_Comparison_Exp>;
  Birthdate?: InputMaybe<Date_Mssql_Comparison_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  Email?: InputMaybe<String_Mssql_Comparison_Exp>;
  FirstName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Gender?: InputMaybe<String_Mssql_Comparison_Exp>;
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  Phone?: InputMaybe<String_Mssql_Comparison_Exp>;
  StudentId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
};

/** upsert condition type for table "Students" */
export type Students_If_Matched = {
  match_columns?: Array<Students_Insert_Match_Column>;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** input type for inserting data into table "Students" */
export type Students_Insert_Input = {
  AssociationMemberId?: InputMaybe<Scalars['String']>;
  AvatarUrl?: InputMaybe<Scalars['String']>;
  Birthdate?: InputMaybe<Scalars['date']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Oid?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  StudentId?: InputMaybe<Scalars['uniqueidentifier']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "Students" */
export enum Students_Insert_Match_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  AvatarUrl = 'AvatarUrl',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Oid = 'Oid',
  /** column name */
  Phone = 'Phone',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'Students_max_fields';
  AssociationMemberId?: Maybe<Scalars['String']>;
  AvatarUrl?: Maybe<Scalars['String']>;
  Birthdate?: Maybe<Scalars['date']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Oid?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "Students" */
export type Students_Max_Order_By = {
  AssociationMemberId?: InputMaybe<Order_By>;
  AvatarUrl?: InputMaybe<Order_By>;
  Birthdate?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Gender?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'Students_min_fields';
  AssociationMemberId?: Maybe<Scalars['String']>;
  AvatarUrl?: Maybe<Scalars['String']>;
  Birthdate?: Maybe<Scalars['date']>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Oid?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "Students" */
export type Students_Min_Order_By = {
  AssociationMemberId?: InputMaybe<Order_By>;
  AvatarUrl?: InputMaybe<Order_By>;
  Birthdate?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Gender?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Students" */
export type Students_Mutation_Response = {
  __typename?: 'Students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** Ordering options when selecting data from "Students". */
export type Students_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  AssociationMember?: InputMaybe<AssociationMembers_Order_By>;
  AssociationMemberId?: InputMaybe<Order_By>;
  AvatarUrl?: InputMaybe<Order_By>;
  Birthdate?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Gender?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  StudentId?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  account?: InputMaybe<Accounts_Order_By>;
};

/** primary key columns input for table: Students */
export type Students_Pk_Columns_Input = {
  StudentId: Scalars['uniqueidentifier'];
};

/** select columns of table "Students" */
export enum Students_Select_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  AvatarUrl = 'AvatarUrl',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Oid = 'Oid',
  /** column name */
  Phone = 'Phone',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "Students" */
export type Students_Set_Input = {
  AssociationMemberId?: InputMaybe<Scalars['String']>;
  AvatarUrl?: InputMaybe<Scalars['String']>;
  Birthdate?: InputMaybe<Scalars['date']>;
  CreatedAt?: InputMaybe<Scalars['datetime2']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Oid?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  StudentId?: InputMaybe<Scalars['uniqueidentifier']>;
  UpdatedAt?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "Students" */
export enum Students_Update_Column {
  /** column name */
  AssociationMemberId = 'AssociationMemberId',
  /** column name */
  AvatarUrl = 'AvatarUrl',
  /** column name */
  Birthdate = 'Birthdate',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Gender = 'Gender',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Nickname = 'Nickname',
  /** column name */
  Oid = 'Oid',
  /** column name */
  Phone = 'Phone',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** columns and relationships of "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts = {
  __typename?: 'assessments_assessment_cohorts';
  /** An object relationship */
  assessment: Assessments_Assessments;
  assessment_id: Scalars['uniqueidentifier'];
  /** An array relationship */
  cohort_fencers: Array<Assessments_Cohort_Fencers>;
  /** An aggregate relationship */
  cohort_fencers_aggregate: Assessments_Cohort_Fencers_Aggregate;
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['uniqueidentifier'];
  title: Scalars['String'];
  updated_at: Scalars['datetime2'];
};


/** columns and relationships of "assessments.assessment_cohorts" */
export type Assessments_Assessment_CohortsCohort_FencersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};


/** columns and relationships of "assessments.assessment_cohorts" */
export type Assessments_Assessment_CohortsCohort_Fencers_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};

/** aggregated selection of "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Aggregate = {
  __typename?: 'assessments_assessment_cohorts_aggregate';
  aggregate?: Maybe<Assessments_Assessment_Cohorts_Aggregate_Fields>;
  nodes: Array<Assessments_Assessment_Cohorts>;
};

/** aggregate fields of "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Aggregate_Fields = {
  __typename?: 'assessments_assessment_cohorts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Assessment_Cohorts_Max_Fields>;
  min?: Maybe<Assessments_Assessment_Cohorts_Min_Fields>;
};


/** aggregate fields of "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Assessment_Cohorts_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Assessment_Cohorts_Max_Order_By>;
  min?: InputMaybe<Assessments_Assessment_Cohorts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.assessment_cohorts". All fields are combined with a logical 'AND'. */
export type Assessments_Assessment_Cohorts_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Assessment_Cohorts_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Assessment_Cohorts_Bool_Exp>>;
  assessment?: InputMaybe<Assessments_Assessments_Bool_Exp>;
  assessment_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  cohort_fencers?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  description?: InputMaybe<String_Mssql_Comparison_Exp>;
  id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  title?: InputMaybe<String_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_If_Matched = {
  match_columns?: Array<Assessments_Assessment_Cohorts_Insert_Match_Column>;
  update_columns?: Array<Assessments_Assessment_Cohorts_Update_Column>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};

/** input type for inserting data into table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Insert_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "assessments.assessment_cohorts" */
export enum Assessments_Assessment_Cohorts_Insert_Match_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Assessments_Assessment_Cohorts_Max_Fields = {
  __typename?: 'assessments_assessment_cohorts_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Assessment_Cohorts_Min_Fields = {
  __typename?: 'assessments_assessment_cohorts_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Mutation_Response = {
  __typename?: 'assessments_assessment_cohorts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Assessment_Cohorts>;
};

/** Ordering options when selecting data from "assessments.assessment_cohorts". */
export type Assessments_Assessment_Cohorts_Order_By = {
  assessment?: InputMaybe<Assessments_Assessments_Order_By>;
  assessment_id?: InputMaybe<Order_By>;
  cohort_fencers_aggregate?: InputMaybe<Assessments_Cohort_Fencers_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_assessment_cohorts */
export type Assessments_Assessment_Cohorts_Pk_Columns_Input = {
  id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.assessment_cohorts" */
export enum Assessments_Assessment_Cohorts_Select_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assessments.assessment_cohorts" */
export type Assessments_Assessment_Cohorts_Set_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "assessments.assessment_cohorts" */
export enum Assessments_Assessment_Cohorts_Update_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics = {
  __typename?: 'assessments_assessment_metrics';
  /** An object relationship */
  assessment: Assessments_Assessments;
  assessment_id: Scalars['uniqueidentifier'];
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  metric_id: Scalars['uniqueidentifier'];
  /** An object relationship */
  metric_question: Assessments_Metric_Questions;
  order_number: Scalars['Int'];
  updated_at: Scalars['datetime2'];
};

/** aggregated selection of "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Aggregate = {
  __typename?: 'assessments_assessment_metrics_aggregate';
  aggregate?: Maybe<Assessments_Assessment_Metrics_Aggregate_Fields>;
  nodes: Array<Assessments_Assessment_Metrics>;
};

/** aggregate fields of "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Aggregate_Fields = {
  __typename?: 'assessments_assessment_metrics_aggregate_fields';
  avg?: Maybe<Assessments_Assessment_Metrics_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Assessments_Assessment_Metrics_Max_Fields>;
  min?: Maybe<Assessments_Assessment_Metrics_Min_Fields>;
  stddev?: Maybe<Assessments_Assessment_Metrics_Stddev_Fields>;
  stddev_pop?: Maybe<Assessments_Assessment_Metrics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assessments_Assessment_Metrics_Stddev_Samp_Fields>;
  sum?: Maybe<Assessments_Assessment_Metrics_Sum_Fields>;
  var_pop?: Maybe<Assessments_Assessment_Metrics_Var_Pop_Fields>;
  var_samp?: Maybe<Assessments_Assessment_Metrics_Var_Samp_Fields>;
  variance?: Maybe<Assessments_Assessment_Metrics_Variance_Fields>;
};


/** aggregate fields of "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Assessment_Metrics_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Aggregate_Order_By = {
  avg?: InputMaybe<Assessments_Assessment_Metrics_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Assessment_Metrics_Max_Order_By>;
  min?: InputMaybe<Assessments_Assessment_Metrics_Min_Order_By>;
  stddev?: InputMaybe<Assessments_Assessment_Metrics_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Assessments_Assessment_Metrics_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assessments_Assessment_Metrics_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assessments_Assessment_Metrics_Sum_Order_By>;
  var_pop?: InputMaybe<Assessments_Assessment_Metrics_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assessments_Assessment_Metrics_Var_Samp_Order_By>;
  variance?: InputMaybe<Assessments_Assessment_Metrics_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Assessments_Assessment_Metrics_Avg_Fields = {
  __typename?: 'assessments_assessment_metrics_avg_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Avg_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.assessment_metrics". All fields are combined with a logical 'AND'. */
export type Assessments_Assessment_Metrics_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Assessment_Metrics_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Assessment_Metrics_Bool_Exp>>;
  assessment?: InputMaybe<Assessments_Assessments_Bool_Exp>;
  assessment_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  metric_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  metric_question?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
  order_number?: InputMaybe<Int_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_If_Matched = {
  match_columns?: Array<Assessments_Assessment_Metrics_Insert_Match_Column>;
  update_columns?: Array<Assessments_Assessment_Metrics_Update_Column>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Inc_Input = {
  order_number?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Insert_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  metric_id?: InputMaybe<Scalars['uniqueidentifier']>;
  order_number?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "assessments.assessment_metrics" */
export enum Assessments_Assessment_Metrics_Insert_Match_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  MetricId = 'metric_id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Assessments_Assessment_Metrics_Max_Fields = {
  __typename?: 'assessments_assessment_metrics_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  order_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Assessment_Metrics_Min_Fields = {
  __typename?: 'assessments_assessment_metrics_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  order_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Mutation_Response = {
  __typename?: 'assessments_assessment_metrics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Assessment_Metrics>;
};

/** Ordering options when selecting data from "assessments.assessment_metrics". */
export type Assessments_Assessment_Metrics_Order_By = {
  assessment?: InputMaybe<Assessments_Assessments_Order_By>;
  assessment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  metric_id?: InputMaybe<Order_By>;
  metric_question?: InputMaybe<Assessments_Metric_Questions_Order_By>;
  order_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_assessment_metrics */
export type Assessments_Assessment_Metrics_Pk_Columns_Input = {
  assessment_id: Scalars['uniqueidentifier'];
  metric_id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.assessment_metrics" */
export enum Assessments_Assessment_Metrics_Select_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  MetricId = 'metric_id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Set_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  metric_id?: InputMaybe<Scalars['uniqueidentifier']>;
  order_number?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** aggregate stddev on columns */
export type Assessments_Assessment_Metrics_Stddev_Fields = {
  __typename?: 'assessments_assessment_metrics_stddev_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Stddev_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assessments_Assessment_Metrics_Stddev_Pop_Fields = {
  __typename?: 'assessments_assessment_metrics_stddev_pop_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Stddev_Pop_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assessments_Assessment_Metrics_Stddev_Samp_Fields = {
  __typename?: 'assessments_assessment_metrics_stddev_samp_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Stddev_Samp_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Assessments_Assessment_Metrics_Sum_Fields = {
  __typename?: 'assessments_assessment_metrics_sum_fields';
  order_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Sum_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** update columns of table "assessments.assessment_metrics" */
export enum Assessments_Assessment_Metrics_Update_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  MetricId = 'metric_id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Assessments_Assessment_Metrics_Var_Pop_Fields = {
  __typename?: 'assessments_assessment_metrics_var_pop_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Var_Pop_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assessments_Assessment_Metrics_Var_Samp_Fields = {
  __typename?: 'assessments_assessment_metrics_var_samp_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Var_Samp_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Assessments_Assessment_Metrics_Variance_Fields = {
  __typename?: 'assessments_assessment_metrics_variance_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "assessments.assessment_metrics" */
export type Assessments_Assessment_Metrics_Variance_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** columns and relationships of "assessments.assessment_result" */
export type Assessments_Assessment_Result = {
  __typename?: 'assessments_assessment_result';
  /** An object relationship */
  assessment: Assessments_Assessments;
  assessment_id: Scalars['uniqueidentifier'];
  /** An object relationship */
  assessment_result_status: Assessments_Assessment_Result_Statuses;
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  /** An object relationship */
  fencer?: Maybe<Students>;
  fencer_id: Scalars['uniqueidentifier'];
  id: Scalars['uniqueidentifier'];
  /** An object relationship */
  metric_question: Assessments_Metric_Questions;
  metric_question_id: Scalars['uniqueidentifier'];
  /** An array relationship */
  metric_results: Array<Assessments_Metric_Result>;
  /** An aggregate relationship */
  metric_results_aggregate: Assessments_Metric_Result_Aggregate;
  status_id: Scalars['String'];
  updated_at: Scalars['datetime2'];
};


/** columns and relationships of "assessments.assessment_result" */
export type Assessments_Assessment_ResultMetric_ResultsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};


/** columns and relationships of "assessments.assessment_result" */
export type Assessments_Assessment_ResultMetric_Results_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};

/** aggregated selection of "assessments.assessment_result" */
export type Assessments_Assessment_Result_Aggregate = {
  __typename?: 'assessments_assessment_result_aggregate';
  aggregate?: Maybe<Assessments_Assessment_Result_Aggregate_Fields>;
  nodes: Array<Assessments_Assessment_Result>;
};

/** aggregate fields of "assessments.assessment_result" */
export type Assessments_Assessment_Result_Aggregate_Fields = {
  __typename?: 'assessments_assessment_result_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Assessment_Result_Max_Fields>;
  min?: Maybe<Assessments_Assessment_Result_Min_Fields>;
};


/** aggregate fields of "assessments.assessment_result" */
export type Assessments_Assessment_Result_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Assessment_Result_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Assessment_Result_Max_Order_By>;
  min?: InputMaybe<Assessments_Assessment_Result_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.assessment_result". All fields are combined with a logical 'AND'. */
export type Assessments_Assessment_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Assessment_Result_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Assessment_Result_Bool_Exp>>;
  assessment?: InputMaybe<Assessments_Assessments_Bool_Exp>;
  assessment_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  assessment_result_status?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  fencer?: InputMaybe<Students_Bool_Exp>;
  fencer_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  metric_question?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
  metric_question_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  metric_results?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
  status_id?: InputMaybe<String_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.assessment_result" */
export type Assessments_Assessment_Result_If_Matched = {
  match_columns?: Array<Assessments_Assessment_Result_Insert_Match_Column>;
  update_columns?: Array<Assessments_Assessment_Result_Update_Column>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};

/** input type for inserting data into table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Insert_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  fencer_id?: InputMaybe<Scalars['uniqueidentifier']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  metric_question_id?: InputMaybe<Scalars['uniqueidentifier']>;
  status_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "assessments.assessment_result" */
export enum Assessments_Assessment_Result_Insert_Match_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetricQuestionId = 'metric_question_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Assessments_Assessment_Result_Max_Fields = {
  __typename?: 'assessments_assessment_result_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Assessment_Result_Min_Fields = {
  __typename?: 'assessments_assessment_result_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Mutation_Response = {
  __typename?: 'assessments_assessment_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Assessment_Result>;
};

/** Ordering options when selecting data from "assessments.assessment_result". */
export type Assessments_Assessment_Result_Order_By = {
  assessment?: InputMaybe<Assessments_Assessments_Order_By>;
  assessment_id?: InputMaybe<Order_By>;
  assessment_result_status?: InputMaybe<Assessments_Assessment_Result_Statuses_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  fencer?: InputMaybe<Students_Order_By>;
  fencer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric_question?: InputMaybe<Assessments_Metric_Questions_Order_By>;
  metric_question_id?: InputMaybe<Order_By>;
  metric_results_aggregate?: InputMaybe<Assessments_Metric_Result_Aggregate_Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_assessment_result */
export type Assessments_Assessment_Result_Pk_Columns_Input = {
  id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.assessment_result" */
export enum Assessments_Assessment_Result_Select_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetricQuestionId = 'metric_question_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assessments.assessment_result" */
export type Assessments_Assessment_Result_Set_Input = {
  assessment_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  fencer_id?: InputMaybe<Scalars['uniqueidentifier']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  metric_question_id?: InputMaybe<Scalars['uniqueidentifier']>;
  status_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** columns and relationships of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses = {
  __typename?: 'assessments_assessment_result_statuses';
  /** An array relationship */
  assessment_results: Array<Assessments_Assessment_Result>;
  /** An aggregate relationship */
  assessment_results_aggregate: Assessments_Assessment_Result_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
};


/** columns and relationships of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_StatusesAssessment_ResultsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


/** columns and relationships of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_StatusesAssessment_Results_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};

/** aggregated selection of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Aggregate = {
  __typename?: 'assessments_assessment_result_statuses_aggregate';
  aggregate?: Maybe<Assessments_Assessment_Result_Statuses_Aggregate_Fields>;
  nodes: Array<Assessments_Assessment_Result_Statuses>;
};

/** aggregate fields of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Aggregate_Fields = {
  __typename?: 'assessments_assessment_result_statuses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Assessment_Result_Statuses_Max_Fields>;
  min?: Maybe<Assessments_Assessment_Result_Statuses_Min_Fields>;
};


/** aggregate fields of "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Assessment_Result_Statuses_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "assessments.assessment_result_statuses". All fields are combined with a logical 'AND'. */
export type Assessments_Assessment_Result_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Bool_Exp>>;
  assessment_results?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
  id?: InputMaybe<String_Mssql_Comparison_Exp>;
  name?: InputMaybe<String_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_If_Matched = {
  match_columns?: Array<Assessments_Assessment_Result_Statuses_Insert_Match_Column>;
  update_columns?: Array<Assessments_Assessment_Result_Statuses_Update_Column>;
  where?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
};

/** input type for inserting data into table "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "assessments.assessment_result_statuses" */
export enum Assessments_Assessment_Result_Statuses_Insert_Match_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate max on columns */
export type Assessments_Assessment_Result_Statuses_Max_Fields = {
  __typename?: 'assessments_assessment_result_statuses_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Assessments_Assessment_Result_Statuses_Min_Fields = {
  __typename?: 'assessments_assessment_result_statuses_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Mutation_Response = {
  __typename?: 'assessments_assessment_result_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Assessment_Result_Statuses>;
};

/** Ordering options when selecting data from "assessments.assessment_result_statuses". */
export type Assessments_Assessment_Result_Statuses_Order_By = {
  assessment_results_aggregate?: InputMaybe<Assessments_Assessment_Result_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_assessment_result_statuses */
export type Assessments_Assessment_Result_Statuses_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "assessments.assessment_result_statuses" */
export enum Assessments_Assessment_Result_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "assessments.assessment_result_statuses" */
export type Assessments_Assessment_Result_Statuses_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "assessments.assessment_result_statuses" */
export enum Assessments_Assessment_Result_Statuses_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** update columns of table "assessments.assessment_result" */
export enum Assessments_Assessment_Result_Update_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetricQuestionId = 'metric_question_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "assessments.assessments" */
export type Assessments_Assessments = {
  __typename?: 'assessments_assessments';
  /** An object relationship */
  account?: Maybe<Accounts>;
  /** An array relationship */
  assessment_cohorts: Array<Assessments_Assessment_Cohorts>;
  /** An aggregate relationship */
  assessment_cohorts_aggregate: Assessments_Assessment_Cohorts_Aggregate;
  /** An array relationship */
  assessment_metrics: Array<Assessments_Assessment_Metrics>;
  /** An aggregate relationship */
  assessment_metrics_aggregate: Assessments_Assessment_Metrics_Aggregate;
  /** An array relationship */
  assessment_results: Array<Assessments_Assessment_Result>;
  /** An aggregate relationship */
  assessment_results_aggregate: Assessments_Assessment_Result_Aggregate;
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uniqueidentifier'];
  title: Scalars['String'];
  updated_at: Scalars['datetime2'];
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_CohortsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_Cohorts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_MetricsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_Metrics_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_ResultsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


/** columns and relationships of "assessments.assessments" */
export type Assessments_AssessmentsAssessment_Results_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};

/** aggregated selection of "assessments.assessments" */
export type Assessments_Assessments_Aggregate = {
  __typename?: 'assessments_assessments_aggregate';
  aggregate?: Maybe<Assessments_Assessments_Aggregate_Fields>;
  nodes: Array<Assessments_Assessments>;
};

/** aggregate fields of "assessments.assessments" */
export type Assessments_Assessments_Aggregate_Fields = {
  __typename?: 'assessments_assessments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Assessments_Max_Fields>;
  min?: Maybe<Assessments_Assessments_Min_Fields>;
};


/** aggregate fields of "assessments.assessments" */
export type Assessments_Assessments_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Assessments_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.assessments" */
export type Assessments_Assessments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Assessments_Max_Order_By>;
  min?: InputMaybe<Assessments_Assessments_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.assessments". All fields are combined with a logical 'AND'. */
export type Assessments_Assessments_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Assessments_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Assessments_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Assessments_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  assessment_cohorts?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
  assessment_metrics?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
  assessment_results?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  description?: InputMaybe<String_Mssql_Comparison_Exp>;
  id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  title?: InputMaybe<String_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.assessments" */
export type Assessments_Assessments_If_Matched = {
  match_columns?: Array<Assessments_Assessments_Insert_Match_Column>;
  update_columns?: Array<Assessments_Assessments_Update_Column>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};

/** input type for inserting data into table "assessments.assessments" */
export type Assessments_Assessments_Insert_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "assessments.assessments" */
export enum Assessments_Assessments_Insert_Match_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Assessments_Assessments_Max_Fields = {
  __typename?: 'assessments_assessments_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "assessments.assessments" */
export type Assessments_Assessments_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Assessments_Min_Fields = {
  __typename?: 'assessments_assessments_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "assessments.assessments" */
export type Assessments_Assessments_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.assessments" */
export type Assessments_Assessments_Mutation_Response = {
  __typename?: 'assessments_assessments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Assessments>;
};

/** Ordering options when selecting data from "assessments.assessments". */
export type Assessments_Assessments_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  assessment_cohorts_aggregate?: InputMaybe<Assessments_Assessment_Cohorts_Aggregate_Order_By>;
  assessment_metrics_aggregate?: InputMaybe<Assessments_Assessment_Metrics_Aggregate_Order_By>;
  assessment_results_aggregate?: InputMaybe<Assessments_Assessment_Result_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_assessments */
export type Assessments_Assessments_Pk_Columns_Input = {
  id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.assessments" */
export enum Assessments_Assessments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assessments.assessments" */
export type Assessments_Assessments_Set_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "assessments.assessments" */
export enum Assessments_Assessments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers = {
  __typename?: 'assessments_cohort_fencers';
  /** An object relationship */
  Student?: Maybe<Students>;
  /** An object relationship */
  assessment_cohort: Assessments_Assessment_Cohorts;
  cohort_id: Scalars['uniqueidentifier'];
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  /** An object relationship */
  fencer?: Maybe<Students>;
  fencer_id: Scalars['uniqueidentifier'];
};

/** aggregated selection of "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Aggregate = {
  __typename?: 'assessments_cohort_fencers_aggregate';
  aggregate?: Maybe<Assessments_Cohort_Fencers_Aggregate_Fields>;
  nodes: Array<Assessments_Cohort_Fencers>;
};

/** aggregate fields of "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Aggregate_Fields = {
  __typename?: 'assessments_cohort_fencers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Cohort_Fencers_Max_Fields>;
  min?: Maybe<Assessments_Cohort_Fencers_Min_Fields>;
};


/** aggregate fields of "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Cohort_Fencers_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Cohort_Fencers_Max_Order_By>;
  min?: InputMaybe<Assessments_Cohort_Fencers_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.cohort_fencers". All fields are combined with a logical 'AND'. */
export type Assessments_Cohort_Fencers_Bool_Exp = {
  Student?: InputMaybe<Students_Bool_Exp>;
  _and?: InputMaybe<Array<Assessments_Cohort_Fencers_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Cohort_Fencers_Bool_Exp>>;
  assessment_cohort?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
  cohort_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  fencer?: InputMaybe<Students_Bool_Exp>;
  fencer_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_If_Matched = {
  match_columns?: Array<Assessments_Cohort_Fencers_Insert_Match_Column>;
  update_columns?: Array<Assessments_Cohort_Fencers_Update_Column>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};

/** input type for inserting data into table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Insert_Input = {
  cohort_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  fencer_id?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** select match_columns of table "assessments.cohort_fencers" */
export enum Assessments_Cohort_Fencers_Insert_Match_Column {
  /** column name */
  CohortId = 'cohort_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id'
}

/** aggregate max on columns */
export type Assessments_Cohort_Fencers_Max_Fields = {
  __typename?: 'assessments_cohort_fencers_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Cohort_Fencers_Min_Fields = {
  __typename?: 'assessments_cohort_fencers_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Mutation_Response = {
  __typename?: 'assessments_cohort_fencers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Cohort_Fencers>;
};

/** Ordering options when selecting data from "assessments.cohort_fencers". */
export type Assessments_Cohort_Fencers_Order_By = {
  Student?: InputMaybe<Students_Order_By>;
  assessment_cohort?: InputMaybe<Assessments_Assessment_Cohorts_Order_By>;
  cohort_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  fencer?: InputMaybe<Students_Order_By>;
  fencer_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_cohort_fencers */
export type Assessments_Cohort_Fencers_Pk_Columns_Input = {
  cohort_id: Scalars['uniqueidentifier'];
  fencer_id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.cohort_fencers" */
export enum Assessments_Cohort_Fencers_Select_Column {
  /** column name */
  CohortId = 'cohort_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id'
}

/** input type for updating data in table "assessments.cohort_fencers" */
export type Assessments_Cohort_Fencers_Set_Input = {
  cohort_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  fencer_id?: InputMaybe<Scalars['uniqueidentifier']>;
};

/** update columns of table "assessments.cohort_fencers" */
export enum Assessments_Cohort_Fencers_Update_Column {
  /** column name */
  CohortId = 'cohort_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FencerId = 'fencer_id'
}

/** columns and relationships of "assessments.metric_questions" */
export type Assessments_Metric_Questions = {
  __typename?: 'assessments_metric_questions';
  /** An array relationship */
  assessment_metrics: Array<Assessments_Assessment_Metrics>;
  /** An aggregate relationship */
  assessment_metrics_aggregate: Assessments_Assessment_Metrics_Aggregate;
  /** An array relationship */
  assessment_results: Array<Assessments_Assessment_Result>;
  /** An aggregate relationship */
  assessment_results_aggregate: Assessments_Assessment_Result_Aggregate;
  created_at: Scalars['datetime2'];
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uniqueidentifier'];
  /** An object relationship */
  metric_type: Assessments_Metric_Types;
  metric_type_id: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['datetime2'];
};


/** columns and relationships of "assessments.metric_questions" */
export type Assessments_Metric_QuestionsAssessment_MetricsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


/** columns and relationships of "assessments.metric_questions" */
export type Assessments_Metric_QuestionsAssessment_Metrics_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


/** columns and relationships of "assessments.metric_questions" */
export type Assessments_Metric_QuestionsAssessment_ResultsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


/** columns and relationships of "assessments.metric_questions" */
export type Assessments_Metric_QuestionsAssessment_Results_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};

/** aggregated selection of "assessments.metric_questions" */
export type Assessments_Metric_Questions_Aggregate = {
  __typename?: 'assessments_metric_questions_aggregate';
  aggregate?: Maybe<Assessments_Metric_Questions_Aggregate_Fields>;
  nodes: Array<Assessments_Metric_Questions>;
};

/** aggregate fields of "assessments.metric_questions" */
export type Assessments_Metric_Questions_Aggregate_Fields = {
  __typename?: 'assessments_metric_questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Metric_Questions_Max_Fields>;
  min?: Maybe<Assessments_Metric_Questions_Min_Fields>;
};


/** aggregate fields of "assessments.metric_questions" */
export type Assessments_Metric_Questions_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Metric_Questions_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Metric_Questions_Max_Order_By>;
  min?: InputMaybe<Assessments_Metric_Questions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.metric_questions". All fields are combined with a logical 'AND'. */
export type Assessments_Metric_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Metric_Questions_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Metric_Questions_Bool_Exp>>;
  assessment_metrics?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
  assessment_results?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  description?: InputMaybe<String_Mssql_Comparison_Exp>;
  id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  metric_type?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
  metric_type_id?: InputMaybe<String_Mssql_Comparison_Exp>;
  title?: InputMaybe<String_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.metric_questions" */
export type Assessments_Metric_Questions_If_Matched = {
  match_columns?: Array<Assessments_Metric_Questions_Insert_Match_Column>;
  update_columns?: Array<Assessments_Metric_Questions_Update_Column>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};

/** input type for inserting data into table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Insert_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  metric_type_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "assessments.metric_questions" */
export enum Assessments_Metric_Questions_Insert_Match_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  MetricTypeId = 'metric_type_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Assessments_Metric_Questions_Max_Fields = {
  __typename?: 'assessments_metric_questions_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metric_type_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  metric_type_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Metric_Questions_Min_Fields = {
  __typename?: 'assessments_metric_questions_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metric_type_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  metric_type_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Mutation_Response = {
  __typename?: 'assessments_metric_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Metric_Questions>;
};

/** Ordering options when selecting data from "assessments.metric_questions". */
export type Assessments_Metric_Questions_Order_By = {
  assessment_metrics_aggregate?: InputMaybe<Assessments_Assessment_Metrics_Aggregate_Order_By>;
  assessment_results_aggregate?: InputMaybe<Assessments_Assessment_Result_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric_type?: InputMaybe<Assessments_Metric_Types_Order_By>;
  metric_type_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_metric_questions */
export type Assessments_Metric_Questions_Pk_Columns_Input = {
  id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.metric_questions" */
export enum Assessments_Metric_Questions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetricTypeId = 'metric_type_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assessments.metric_questions" */
export type Assessments_Metric_Questions_Set_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  metric_type_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "assessments.metric_questions" */
export enum Assessments_Metric_Questions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetricTypeId = 'metric_type_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "assessments.metric_result" */
export type Assessments_Metric_Result = {
  __typename?: 'assessments_metric_result';
  /** An object relationship */
  assessment_result: Assessments_Assessment_Result;
  created_at: Scalars['datetime2'];
  id: Scalars['uniqueidentifier'];
  notes?: Maybe<Scalars['String']>;
  result_id: Scalars['uniqueidentifier'];
  updated_at: Scalars['datetime2'];
  value: Scalars['String'];
};

/** aggregated selection of "assessments.metric_result" */
export type Assessments_Metric_Result_Aggregate = {
  __typename?: 'assessments_metric_result_aggregate';
  aggregate?: Maybe<Assessments_Metric_Result_Aggregate_Fields>;
  nodes: Array<Assessments_Metric_Result>;
};

/** aggregate fields of "assessments.metric_result" */
export type Assessments_Metric_Result_Aggregate_Fields = {
  __typename?: 'assessments_metric_result_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Metric_Result_Max_Fields>;
  min?: Maybe<Assessments_Metric_Result_Min_Fields>;
};


/** aggregate fields of "assessments.metric_result" */
export type Assessments_Metric_Result_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Metric_Result_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assessments.metric_result" */
export type Assessments_Metric_Result_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessments_Metric_Result_Max_Order_By>;
  min?: InputMaybe<Assessments_Metric_Result_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "assessments.metric_result". All fields are combined with a logical 'AND'. */
export type Assessments_Metric_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Metric_Result_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Metric_Result_Bool_Exp>>;
  assessment_result?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  notes?: InputMaybe<String_Mssql_Comparison_Exp>;
  result_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  value?: InputMaybe<String_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.metric_result" */
export type Assessments_Metric_Result_If_Matched = {
  match_columns?: Array<Assessments_Metric_Result_Insert_Match_Column>;
  update_columns?: Array<Assessments_Metric_Result_Update_Column>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};

/** input type for inserting data into table "assessments.metric_result" */
export type Assessments_Metric_Result_Insert_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  notes?: InputMaybe<Scalars['String']>;
  result_id?: InputMaybe<Scalars['uniqueidentifier']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
  value?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "assessments.metric_result" */
export enum Assessments_Metric_Result_Insert_Match_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ResultId = 'result_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate max on columns */
export type Assessments_Metric_Result_Max_Fields = {
  __typename?: 'assessments_metric_result_max_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  notes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "assessments.metric_result" */
export type Assessments_Metric_Result_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessments_Metric_Result_Min_Fields = {
  __typename?: 'assessments_metric_result_min_fields';
  created_at?: Maybe<Scalars['datetime2']>;
  notes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "assessments.metric_result" */
export type Assessments_Metric_Result_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessments.metric_result" */
export type Assessments_Metric_Result_Mutation_Response = {
  __typename?: 'assessments_metric_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Metric_Result>;
};

/** Ordering options when selecting data from "assessments.metric_result". */
export type Assessments_Metric_Result_Order_By = {
  assessment_result?: InputMaybe<Assessments_Assessment_Result_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  result_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_metric_result */
export type Assessments_Metric_Result_Pk_Columns_Input = {
  id: Scalars['uniqueidentifier'];
};

/** select columns of table "assessments.metric_result" */
export enum Assessments_Metric_Result_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  ResultId = 'result_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "assessments.metric_result" */
export type Assessments_Metric_Result_Set_Input = {
  created_at?: InputMaybe<Scalars['datetime2']>;
  id?: InputMaybe<Scalars['uniqueidentifier']>;
  notes?: InputMaybe<Scalars['String']>;
  result_id?: InputMaybe<Scalars['uniqueidentifier']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "assessments.metric_result" */
export enum Assessments_Metric_Result_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  ResultId = 'result_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "assessments.metric_types" */
export type Assessments_Metric_Types = {
  __typename?: 'assessments_metric_types';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  metric_questions: Array<Assessments_Metric_Questions>;
  /** An aggregate relationship */
  metric_questions_aggregate: Assessments_Metric_Questions_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "assessments.metric_types" */
export type Assessments_Metric_TypesMetric_QuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};


/** columns and relationships of "assessments.metric_types" */
export type Assessments_Metric_TypesMetric_Questions_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};

/** aggregated selection of "assessments.metric_types" */
export type Assessments_Metric_Types_Aggregate = {
  __typename?: 'assessments_metric_types_aggregate';
  aggregate?: Maybe<Assessments_Metric_Types_Aggregate_Fields>;
  nodes: Array<Assessments_Metric_Types>;
};

/** aggregate fields of "assessments.metric_types" */
export type Assessments_Metric_Types_Aggregate_Fields = {
  __typename?: 'assessments_metric_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assessments_Metric_Types_Max_Fields>;
  min?: Maybe<Assessments_Metric_Types_Min_Fields>;
};


/** aggregate fields of "assessments.metric_types" */
export type Assessments_Metric_Types_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Assessments_Metric_Types_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "assessments.metric_types". All fields are combined with a logical 'AND'. */
export type Assessments_Metric_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Metric_Types_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Metric_Types_Bool_Exp>>;
  description?: InputMaybe<String_Mssql_Comparison_Exp>;
  id?: InputMaybe<String_Mssql_Comparison_Exp>;
  metric_questions?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
  name?: InputMaybe<String_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "assessments.metric_types" */
export type Assessments_Metric_Types_If_Matched = {
  match_columns?: Array<Assessments_Metric_Types_Insert_Match_Column>;
  update_columns?: Array<Assessments_Metric_Types_Update_Column>;
  where?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
};

/** input type for inserting data into table "assessments.metric_types" */
export type Assessments_Metric_Types_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** select match_columns of table "assessments.metric_types" */
export enum Assessments_Metric_Types_Insert_Match_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate max on columns */
export type Assessments_Metric_Types_Max_Fields = {
  __typename?: 'assessments_metric_types_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Assessments_Metric_Types_Min_Fields = {
  __typename?: 'assessments_metric_types_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "assessments.metric_types" */
export type Assessments_Metric_Types_Mutation_Response = {
  __typename?: 'assessments_metric_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments_Metric_Types>;
};

/** Ordering options when selecting data from "assessments.metric_types". */
export type Assessments_Metric_Types_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric_questions_aggregate?: InputMaybe<Assessments_Metric_Questions_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessments_metric_types */
export type Assessments_Metric_Types_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "assessments.metric_types" */
export enum Assessments_Metric_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "assessments.metric_types" */
export type Assessments_Metric_Types_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "assessments.metric_types" */
export enum Assessments_Metric_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "calendars" */
export type Calendars = {
  __typename?: 'calendars';
  /** An object relationship */
  Account: Accounts;
  access_token: Scalars['String'];
  account_id: Scalars['String'];
  created_at: Scalars['datetime2'];
  created_by: Scalars['String'];
  id: Scalars['String'];
  provider: Scalars['String'];
  updated_at: Scalars['datetime2'];
};

/** aggregated selection of "calendars" */
export type Calendars_Aggregate = {
  __typename?: 'calendars_aggregate';
  aggregate?: Maybe<Calendars_Aggregate_Fields>;
  nodes: Array<Calendars>;
};

/** aggregate fields of "calendars" */
export type Calendars_Aggregate_Fields = {
  __typename?: 'calendars_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Calendars_Max_Fields>;
  min?: Maybe<Calendars_Min_Fields>;
};


/** aggregate fields of "calendars" */
export type Calendars_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Calendars_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "calendars". All fields are combined with a logical 'AND'. */
export type Calendars_Bool_Exp = {
  Account?: InputMaybe<Accounts_Bool_Exp>;
  _and?: InputMaybe<Array<Calendars_Bool_Exp>>;
  _not?: InputMaybe<Calendars_Bool_Exp>;
  _or?: InputMaybe<Array<Calendars_Bool_Exp>>;
  access_token?: InputMaybe<String_Mssql_Comparison_Exp>;
  account_id?: InputMaybe<String_Mssql_Comparison_Exp>;
  created_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  id?: InputMaybe<String_Mssql_Comparison_Exp>;
  provider?: InputMaybe<String_Mssql_Comparison_Exp>;
  updated_at?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "calendars" */
export type Calendars_If_Matched = {
  match_columns?: Array<Calendars_Insert_Match_Column>;
  update_columns?: Array<Calendars_Update_Column>;
  where?: InputMaybe<Calendars_Bool_Exp>;
};

/** input type for inserting data into table "calendars" */
export type Calendars_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "calendars" */
export enum Calendars_Insert_Match_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Calendars_Max_Fields = {
  __typename?: 'calendars_max_fields';
  access_token?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** aggregate min on columns */
export type Calendars_Min_Fields = {
  __typename?: 'calendars_min_fields';
  access_token?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['datetime2']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['datetime2']>;
};

/** response of any mutation on the table "calendars" */
export type Calendars_Mutation_Response = {
  __typename?: 'calendars_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Calendars>;
};

/** Ordering options when selecting data from "calendars". */
export type Calendars_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  access_token?: InputMaybe<Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: calendars */
export type Calendars_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "calendars" */
export enum Calendars_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "calendars" */
export type Calendars_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['datetime2']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "calendars" */
export enum Calendars_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "club_accounts" */
export type Club_Accounts = {
  __typename?: 'club_accounts';
  /** An object relationship */
  Account: Accounts;
  /** An object relationship */
  Club: Clubs;
  account_id: Scalars['String'];
  club_id: Scalars['uniqueidentifier'];
  created_by: Scalars['String'];
  created_on: Scalars['datetime2'];
};

/** aggregated selection of "club_accounts" */
export type Club_Accounts_Aggregate = {
  __typename?: 'club_accounts_aggregate';
  aggregate?: Maybe<Club_Accounts_Aggregate_Fields>;
  nodes: Array<Club_Accounts>;
};

/** aggregate fields of "club_accounts" */
export type Club_Accounts_Aggregate_Fields = {
  __typename?: 'club_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Club_Accounts_Max_Fields>;
  min?: Maybe<Club_Accounts_Min_Fields>;
};


/** aggregate fields of "club_accounts" */
export type Club_Accounts_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Club_Accounts_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "club_accounts" */
export type Club_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Club_Accounts_Max_Order_By>;
  min?: InputMaybe<Club_Accounts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "club_accounts". All fields are combined with a logical 'AND'. */
export type Club_Accounts_Bool_Exp = {
  Account?: InputMaybe<Accounts_Bool_Exp>;
  Club?: InputMaybe<Clubs_Bool_Exp>;
  _and?: InputMaybe<Array<Club_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Club_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Accounts_Bool_Exp>>;
  account_id?: InputMaybe<String_Mssql_Comparison_Exp>;
  club_id?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  created_by?: InputMaybe<String_Mssql_Comparison_Exp>;
  created_on?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
};

/** upsert condition type for table "club_accounts" */
export type Club_Accounts_If_Matched = {
  match_columns?: Array<Club_Accounts_Insert_Match_Column>;
  update_columns?: Array<Club_Accounts_Update_Column>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};

/** input type for inserting data into table "club_accounts" */
export type Club_Accounts_Insert_Input = {
  account_id?: InputMaybe<Scalars['String']>;
  club_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_by?: InputMaybe<Scalars['String']>;
  created_on?: InputMaybe<Scalars['datetime2']>;
};

/** select match_columns of table "club_accounts" */
export enum Club_Accounts_Insert_Match_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedOn = 'created_on'
}

/** aggregate max on columns */
export type Club_Accounts_Max_Fields = {
  __typename?: 'club_accounts_max_fields';
  account_id?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['datetime2']>;
};

/** order by max() on columns of table "club_accounts" */
export type Club_Accounts_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Club_Accounts_Min_Fields = {
  __typename?: 'club_accounts_min_fields';
  account_id?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['datetime2']>;
};

/** order by min() on columns of table "club_accounts" */
export type Club_Accounts_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "club_accounts" */
export type Club_Accounts_Mutation_Response = {
  __typename?: 'club_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Accounts>;
};

/** Ordering options when selecting data from "club_accounts". */
export type Club_Accounts_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  Club?: InputMaybe<Clubs_Order_By>;
  account_id?: InputMaybe<Order_By>;
  club_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_accounts */
export type Club_Accounts_Pk_Columns_Input = {
  account_id: Scalars['String'];
  club_id: Scalars['uniqueidentifier'];
};

/** select columns of table "club_accounts" */
export enum Club_Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedOn = 'created_on'
}

/** input type for updating data in table "club_accounts" */
export type Club_Accounts_Set_Input = {
  account_id?: InputMaybe<Scalars['String']>;
  club_id?: InputMaybe<Scalars['uniqueidentifier']>;
  created_by?: InputMaybe<Scalars['String']>;
  created_on?: InputMaybe<Scalars['datetime2']>;
};

/** update columns of table "club_accounts" */
export enum Club_Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedOn = 'created_on'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "datetime2". All fields are combined with logical 'AND'. */
export type Datetime2_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['datetime2']>;
  _gt?: InputMaybe<Scalars['datetime2']>;
  _gte?: InputMaybe<Scalars['datetime2']>;
  _in?: InputMaybe<Array<Scalars['datetime2']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['datetime2']>;
  _lte?: InputMaybe<Scalars['datetime2']>;
  _neq?: InputMaybe<Scalars['datetime2']>;
  _nin?: InputMaybe<Array<Scalars['datetime2']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "AccountAppRoles" */
  delete_AccountAppRoles?: Maybe<AccountAppRoles_Mutation_Response>;
  /** delete single row from the table: "AccountAppRoles" */
  delete_AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** delete data from the table: "AccountClubRoles" */
  delete_AccountClubRoles?: Maybe<AccountClubRoles_Mutation_Response>;
  /** delete single row from the table: "AccountClubRoles" */
  delete_AccountClubRoles_by_pk?: Maybe<AccountClubRoles>;
  /** delete data from the table: "Accounts" */
  delete_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "Accounts" */
  delete_Accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "Addresses" */
  delete_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "Addresses" */
  delete_Addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "AppRoles" */
  delete_AppRoles?: Maybe<AppRoles_Mutation_Response>;
  /** delete single row from the table: "AppRoles" */
  delete_AppRoles_by_pk?: Maybe<AppRoles>;
  /** delete data from the table: "AssociationMembers" */
  delete_AssociationMembers?: Maybe<AssociationMembers_Mutation_Response>;
  /** delete single row from the table: "AssociationMembers" */
  delete_AssociationMembers_by_pk?: Maybe<AssociationMembers>;
  /** delete data from the table: "ClubLocations" */
  delete_ClubLocations?: Maybe<ClubLocations_Mutation_Response>;
  /** delete single row from the table: "ClubLocations" */
  delete_ClubLocations_by_pk?: Maybe<ClubLocations>;
  /** delete data from the table: "ClubRoles" */
  delete_ClubRoles?: Maybe<ClubRoles_Mutation_Response>;
  /** delete single row from the table: "ClubRoles" */
  delete_ClubRoles_by_pk?: Maybe<ClubRoles>;
  /** delete data from the table: "Clubs" */
  delete_Clubs?: Maybe<Clubs_Mutation_Response>;
  /** delete single row from the table: "Clubs" */
  delete_Clubs_by_pk?: Maybe<Clubs>;
  /** delete data from the table: "Students" */
  delete_Students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "Students" */
  delete_Students_by_pk?: Maybe<Students>;
  /** delete data from the table: "assessments.assessment_cohorts" */
  delete_assessments_assessment_cohorts?: Maybe<Assessments_Assessment_Cohorts_Mutation_Response>;
  /** delete single row from the table: "assessments.assessment_cohorts" */
  delete_assessments_assessment_cohorts_by_pk?: Maybe<Assessments_Assessment_Cohorts>;
  /** delete data from the table: "assessments.assessment_metrics" */
  delete_assessments_assessment_metrics?: Maybe<Assessments_Assessment_Metrics_Mutation_Response>;
  /** delete single row from the table: "assessments.assessment_metrics" */
  delete_assessments_assessment_metrics_by_pk?: Maybe<Assessments_Assessment_Metrics>;
  /** delete data from the table: "assessments.assessment_result" */
  delete_assessments_assessment_result?: Maybe<Assessments_Assessment_Result_Mutation_Response>;
  /** delete single row from the table: "assessments.assessment_result" */
  delete_assessments_assessment_result_by_pk?: Maybe<Assessments_Assessment_Result>;
  /** delete data from the table: "assessments.assessment_result_statuses" */
  delete_assessments_assessment_result_statuses?: Maybe<Assessments_Assessment_Result_Statuses_Mutation_Response>;
  /** delete single row from the table: "assessments.assessment_result_statuses" */
  delete_assessments_assessment_result_statuses_by_pk?: Maybe<Assessments_Assessment_Result_Statuses>;
  /** delete data from the table: "assessments.assessments" */
  delete_assessments_assessments?: Maybe<Assessments_Assessments_Mutation_Response>;
  /** delete single row from the table: "assessments.assessments" */
  delete_assessments_assessments_by_pk?: Maybe<Assessments_Assessments>;
  /** delete data from the table: "assessments.cohort_fencers" */
  delete_assessments_cohort_fencers?: Maybe<Assessments_Cohort_Fencers_Mutation_Response>;
  /** delete single row from the table: "assessments.cohort_fencers" */
  delete_assessments_cohort_fencers_by_pk?: Maybe<Assessments_Cohort_Fencers>;
  /** delete data from the table: "assessments.metric_questions" */
  delete_assessments_metric_questions?: Maybe<Assessments_Metric_Questions_Mutation_Response>;
  /** delete single row from the table: "assessments.metric_questions" */
  delete_assessments_metric_questions_by_pk?: Maybe<Assessments_Metric_Questions>;
  /** delete data from the table: "assessments.metric_result" */
  delete_assessments_metric_result?: Maybe<Assessments_Metric_Result_Mutation_Response>;
  /** delete single row from the table: "assessments.metric_result" */
  delete_assessments_metric_result_by_pk?: Maybe<Assessments_Metric_Result>;
  /** delete data from the table: "assessments.metric_types" */
  delete_assessments_metric_types?: Maybe<Assessments_Metric_Types_Mutation_Response>;
  /** delete single row from the table: "assessments.metric_types" */
  delete_assessments_metric_types_by_pk?: Maybe<Assessments_Metric_Types>;
  /** delete data from the table: "calendars" */
  delete_calendars?: Maybe<Calendars_Mutation_Response>;
  /** delete single row from the table: "calendars" */
  delete_calendars_by_pk?: Maybe<Calendars>;
  /** delete data from the table: "club_accounts" */
  delete_club_accounts?: Maybe<Club_Accounts_Mutation_Response>;
  /** delete single row from the table: "club_accounts" */
  delete_club_accounts_by_pk?: Maybe<Club_Accounts>;
  /** insert data into the table: "AccountAppRoles" */
  insert_AccountAppRoles?: Maybe<AccountAppRoles_Mutation_Response>;
  /** insert a single row into the table: "AccountAppRoles" */
  insert_AccountAppRoles_one?: Maybe<AccountAppRoles>;
  /** insert data into the table: "AccountClubRoles" */
  insert_AccountClubRoles?: Maybe<AccountClubRoles_Mutation_Response>;
  /** insert a single row into the table: "AccountClubRoles" */
  insert_AccountClubRoles_one?: Maybe<AccountClubRoles>;
  /** insert data into the table: "Accounts" */
  insert_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "Accounts" */
  insert_Accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "Addresses" */
  insert_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "Addresses" */
  insert_Addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "AppRoles" */
  insert_AppRoles?: Maybe<AppRoles_Mutation_Response>;
  /** insert a single row into the table: "AppRoles" */
  insert_AppRoles_one?: Maybe<AppRoles>;
  /** insert data into the table: "AssociationMembers" */
  insert_AssociationMembers?: Maybe<AssociationMembers_Mutation_Response>;
  /** insert a single row into the table: "AssociationMembers" */
  insert_AssociationMembers_one?: Maybe<AssociationMembers>;
  /** insert data into the table: "ClubLocations" */
  insert_ClubLocations?: Maybe<ClubLocations_Mutation_Response>;
  /** insert a single row into the table: "ClubLocations" */
  insert_ClubLocations_one?: Maybe<ClubLocations>;
  /** insert data into the table: "ClubRoles" */
  insert_ClubRoles?: Maybe<ClubRoles_Mutation_Response>;
  /** insert a single row into the table: "ClubRoles" */
  insert_ClubRoles_one?: Maybe<ClubRoles>;
  /** insert data into the table: "Clubs" */
  insert_Clubs?: Maybe<Clubs_Mutation_Response>;
  /** insert a single row into the table: "Clubs" */
  insert_Clubs_one?: Maybe<Clubs>;
  /** insert data into the table: "Students" */
  insert_Students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "Students" */
  insert_Students_one?: Maybe<Students>;
  /** insert data into the table: "assessments.assessment_cohorts" */
  insert_assessments_assessment_cohorts?: Maybe<Assessments_Assessment_Cohorts_Mutation_Response>;
  /** insert a single row into the table: "assessments.assessment_cohorts" */
  insert_assessments_assessment_cohorts_one?: Maybe<Assessments_Assessment_Cohorts>;
  /** insert data into the table: "assessments.assessment_metrics" */
  insert_assessments_assessment_metrics?: Maybe<Assessments_Assessment_Metrics_Mutation_Response>;
  /** insert a single row into the table: "assessments.assessment_metrics" */
  insert_assessments_assessment_metrics_one?: Maybe<Assessments_Assessment_Metrics>;
  /** insert data into the table: "assessments.assessment_result" */
  insert_assessments_assessment_result?: Maybe<Assessments_Assessment_Result_Mutation_Response>;
  /** insert a single row into the table: "assessments.assessment_result" */
  insert_assessments_assessment_result_one?: Maybe<Assessments_Assessment_Result>;
  /** insert data into the table: "assessments.assessment_result_statuses" */
  insert_assessments_assessment_result_statuses?: Maybe<Assessments_Assessment_Result_Statuses_Mutation_Response>;
  /** insert a single row into the table: "assessments.assessment_result_statuses" */
  insert_assessments_assessment_result_statuses_one?: Maybe<Assessments_Assessment_Result_Statuses>;
  /** insert data into the table: "assessments.assessments" */
  insert_assessments_assessments?: Maybe<Assessments_Assessments_Mutation_Response>;
  /** insert a single row into the table: "assessments.assessments" */
  insert_assessments_assessments_one?: Maybe<Assessments_Assessments>;
  /** insert data into the table: "assessments.cohort_fencers" */
  insert_assessments_cohort_fencers?: Maybe<Assessments_Cohort_Fencers_Mutation_Response>;
  /** insert a single row into the table: "assessments.cohort_fencers" */
  insert_assessments_cohort_fencers_one?: Maybe<Assessments_Cohort_Fencers>;
  /** insert data into the table: "assessments.metric_questions" */
  insert_assessments_metric_questions?: Maybe<Assessments_Metric_Questions_Mutation_Response>;
  /** insert a single row into the table: "assessments.metric_questions" */
  insert_assessments_metric_questions_one?: Maybe<Assessments_Metric_Questions>;
  /** insert data into the table: "assessments.metric_result" */
  insert_assessments_metric_result?: Maybe<Assessments_Metric_Result_Mutation_Response>;
  /** insert a single row into the table: "assessments.metric_result" */
  insert_assessments_metric_result_one?: Maybe<Assessments_Metric_Result>;
  /** insert data into the table: "assessments.metric_types" */
  insert_assessments_metric_types?: Maybe<Assessments_Metric_Types_Mutation_Response>;
  /** insert a single row into the table: "assessments.metric_types" */
  insert_assessments_metric_types_one?: Maybe<Assessments_Metric_Types>;
  /** insert data into the table: "calendars" */
  insert_calendars?: Maybe<Calendars_Mutation_Response>;
  /** insert a single row into the table: "calendars" */
  insert_calendars_one?: Maybe<Calendars>;
  /** insert data into the table: "club_accounts" */
  insert_club_accounts?: Maybe<Club_Accounts_Mutation_Response>;
  /** insert a single row into the table: "club_accounts" */
  insert_club_accounts_one?: Maybe<Club_Accounts>;
  /** update data of the table: "AccountAppRoles" */
  update_AccountAppRoles?: Maybe<AccountAppRoles_Mutation_Response>;
  /** update single row of the table: "AccountAppRoles" */
  update_AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** update data of the table: "AccountClubRoles" */
  update_AccountClubRoles?: Maybe<AccountClubRoles_Mutation_Response>;
  /** update single row of the table: "AccountClubRoles" */
  update_AccountClubRoles_by_pk?: Maybe<AccountClubRoles>;
  /** update data of the table: "Accounts" */
  update_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "Accounts" */
  update_Accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "Addresses" */
  update_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "Addresses" */
  update_Addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "AppRoles" */
  update_AppRoles?: Maybe<AppRoles_Mutation_Response>;
  /** update single row of the table: "AppRoles" */
  update_AppRoles_by_pk?: Maybe<AppRoles>;
  /** update data of the table: "AssociationMembers" */
  update_AssociationMembers?: Maybe<AssociationMembers_Mutation_Response>;
  /** update single row of the table: "AssociationMembers" */
  update_AssociationMembers_by_pk?: Maybe<AssociationMembers>;
  /** update data of the table: "ClubLocations" */
  update_ClubLocations?: Maybe<ClubLocations_Mutation_Response>;
  /** update single row of the table: "ClubLocations" */
  update_ClubLocations_by_pk?: Maybe<ClubLocations>;
  /** update data of the table: "ClubRoles" */
  update_ClubRoles?: Maybe<ClubRoles_Mutation_Response>;
  /** update single row of the table: "ClubRoles" */
  update_ClubRoles_by_pk?: Maybe<ClubRoles>;
  /** update data of the table: "Clubs" */
  update_Clubs?: Maybe<Clubs_Mutation_Response>;
  /** update single row of the table: "Clubs" */
  update_Clubs_by_pk?: Maybe<Clubs>;
  /** update data of the table: "Students" */
  update_Students?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "Students" */
  update_Students_by_pk?: Maybe<Students>;
  /** update data of the table: "assessments.assessment_cohorts" */
  update_assessments_assessment_cohorts?: Maybe<Assessments_Assessment_Cohorts_Mutation_Response>;
  /** update single row of the table: "assessments.assessment_cohorts" */
  update_assessments_assessment_cohorts_by_pk?: Maybe<Assessments_Assessment_Cohorts>;
  /** update data of the table: "assessments.assessment_metrics" */
  update_assessments_assessment_metrics?: Maybe<Assessments_Assessment_Metrics_Mutation_Response>;
  /** update single row of the table: "assessments.assessment_metrics" */
  update_assessments_assessment_metrics_by_pk?: Maybe<Assessments_Assessment_Metrics>;
  /** update data of the table: "assessments.assessment_result" */
  update_assessments_assessment_result?: Maybe<Assessments_Assessment_Result_Mutation_Response>;
  /** update single row of the table: "assessments.assessment_result" */
  update_assessments_assessment_result_by_pk?: Maybe<Assessments_Assessment_Result>;
  /** update data of the table: "assessments.assessment_result_statuses" */
  update_assessments_assessment_result_statuses?: Maybe<Assessments_Assessment_Result_Statuses_Mutation_Response>;
  /** update single row of the table: "assessments.assessment_result_statuses" */
  update_assessments_assessment_result_statuses_by_pk?: Maybe<Assessments_Assessment_Result_Statuses>;
  /** update data of the table: "assessments.assessments" */
  update_assessments_assessments?: Maybe<Assessments_Assessments_Mutation_Response>;
  /** update single row of the table: "assessments.assessments" */
  update_assessments_assessments_by_pk?: Maybe<Assessments_Assessments>;
  /** update data of the table: "assessments.cohort_fencers" */
  update_assessments_cohort_fencers?: Maybe<Assessments_Cohort_Fencers_Mutation_Response>;
  /** update single row of the table: "assessments.cohort_fencers" */
  update_assessments_cohort_fencers_by_pk?: Maybe<Assessments_Cohort_Fencers>;
  /** update data of the table: "assessments.metric_questions" */
  update_assessments_metric_questions?: Maybe<Assessments_Metric_Questions_Mutation_Response>;
  /** update single row of the table: "assessments.metric_questions" */
  update_assessments_metric_questions_by_pk?: Maybe<Assessments_Metric_Questions>;
  /** update data of the table: "assessments.metric_result" */
  update_assessments_metric_result?: Maybe<Assessments_Metric_Result_Mutation_Response>;
  /** update single row of the table: "assessments.metric_result" */
  update_assessments_metric_result_by_pk?: Maybe<Assessments_Metric_Result>;
  /** update data of the table: "assessments.metric_types" */
  update_assessments_metric_types?: Maybe<Assessments_Metric_Types_Mutation_Response>;
  /** update single row of the table: "assessments.metric_types" */
  update_assessments_metric_types_by_pk?: Maybe<Assessments_Metric_Types>;
  /** update data of the table: "calendars" */
  update_calendars?: Maybe<Calendars_Mutation_Response>;
  /** update single row of the table: "calendars" */
  update_calendars_by_pk?: Maybe<Calendars>;
  /** update data of the table: "club_accounts" */
  update_club_accounts?: Maybe<Club_Accounts_Mutation_Response>;
  /** update single row of the table: "club_accounts" */
  update_club_accounts_by_pk?: Maybe<Club_Accounts>;
};


/** mutation root */
export type Mutation_RootDelete_AccountAppRolesArgs = {
  where: AccountAppRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AccountAppRoles_By_PkArgs = {
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AccountClubRolesArgs = {
  where: AccountClubRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AccountClubRoles_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  Oid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  AddressId: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_AppRolesArgs = {
  where: AppRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AppRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_AssociationMembersArgs = {
  where: AssociationMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AssociationMembers_By_PkArgs = {
  AssociationMemberId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ClubLocationsArgs = {
  where: ClubLocations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ClubLocations_By_PkArgs = {
  LocationId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ClubRolesArgs = {
  where: ClubRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ClubRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_ClubsArgs = {
  where: Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clubs_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_StudentsArgs = {
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Students_By_PkArgs = {
  StudentId: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_CohortsArgs = {
  where: Assessments_Assessment_Cohorts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_Cohorts_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_MetricsArgs = {
  where: Assessments_Assessment_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_Metrics_By_PkArgs = {
  assessment_id: Scalars['uniqueidentifier'];
  metric_id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_ResultArgs = {
  where: Assessments_Assessment_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_Result_StatusesArgs = {
  where: Assessments_Assessment_Result_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessment_Result_Statuses_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_AssessmentsArgs = {
  where: Assessments_Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Assessments_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Cohort_FencersArgs = {
  where: Assessments_Cohort_Fencers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Cohort_Fencers_By_PkArgs = {
  cohort_id: Scalars['uniqueidentifier'];
  fencer_id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_QuestionsArgs = {
  where: Assessments_Metric_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_Questions_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_ResultArgs = {
  where: Assessments_Metric_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_TypesArgs = {
  where: Assessments_Metric_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_Metric_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CalendarsArgs = {
  where: Calendars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Calendars_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Club_AccountsArgs = {
  where: Club_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Accounts_By_PkArgs = {
  account_id: Scalars['String'];
  club_id: Scalars['uniqueidentifier'];
};


/** mutation root */
export type Mutation_RootInsert_AccountAppRolesArgs = {
  if_matched?: InputMaybe<AccountAppRoles_If_Matched>;
  objects: Array<AccountAppRoles_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_AccountAppRoles_OneArgs = {
  if_matched?: InputMaybe<AccountAppRoles_If_Matched>;
  object: AccountAppRoles_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AccountClubRolesArgs = {
  if_matched?: InputMaybe<AccountClubRoles_If_Matched>;
  objects: Array<AccountClubRoles_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_AccountClubRoles_OneArgs = {
  if_matched?: InputMaybe<AccountClubRoles_If_Matched>;
  object: AccountClubRoles_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  if_matched?: InputMaybe<Accounts_If_Matched>;
  objects: Array<Accounts_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  if_matched?: InputMaybe<Accounts_If_Matched>;
  object: Accounts_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  if_matched?: InputMaybe<Addresses_If_Matched>;
  objects: Array<Addresses_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  if_matched?: InputMaybe<Addresses_If_Matched>;
  object: Addresses_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AppRolesArgs = {
  if_matched?: InputMaybe<AppRoles_If_Matched>;
  objects: Array<AppRoles_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_AppRoles_OneArgs = {
  if_matched?: InputMaybe<AppRoles_If_Matched>;
  object: AppRoles_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AssociationMembersArgs = {
  if_matched?: InputMaybe<AssociationMembers_If_Matched>;
  objects: Array<AssociationMembers_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_AssociationMembers_OneArgs = {
  if_matched?: InputMaybe<AssociationMembers_If_Matched>;
  object: AssociationMembers_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ClubLocationsArgs = {
  if_matched?: InputMaybe<ClubLocations_If_Matched>;
  objects: Array<ClubLocations_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_ClubLocations_OneArgs = {
  if_matched?: InputMaybe<ClubLocations_If_Matched>;
  object: ClubLocations_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ClubRolesArgs = {
  if_matched?: InputMaybe<ClubRoles_If_Matched>;
  objects: Array<ClubRoles_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_ClubRoles_OneArgs = {
  if_matched?: InputMaybe<ClubRoles_If_Matched>;
  object: ClubRoles_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ClubsArgs = {
  if_matched?: InputMaybe<Clubs_If_Matched>;
  objects: Array<Clubs_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Clubs_OneArgs = {
  if_matched?: InputMaybe<Clubs_If_Matched>;
  object: Clubs_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_StudentsArgs = {
  if_matched?: InputMaybe<Students_If_Matched>;
  objects: Array<Students_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Students_OneArgs = {
  if_matched?: InputMaybe<Students_If_Matched>;
  object: Students_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_CohortsArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Cohorts_If_Matched>;
  objects: Array<Assessments_Assessment_Cohorts_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_Cohorts_OneArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Cohorts_If_Matched>;
  object: Assessments_Assessment_Cohorts_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_MetricsArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Metrics_If_Matched>;
  objects: Array<Assessments_Assessment_Metrics_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_Metrics_OneArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Metrics_If_Matched>;
  object: Assessments_Assessment_Metrics_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_ResultArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Result_If_Matched>;
  objects: Array<Assessments_Assessment_Result_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_Result_OneArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Result_If_Matched>;
  object: Assessments_Assessment_Result_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_Result_StatusesArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Result_Statuses_If_Matched>;
  objects: Array<Assessments_Assessment_Result_Statuses_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessment_Result_Statuses_OneArgs = {
  if_matched?: InputMaybe<Assessments_Assessment_Result_Statuses_If_Matched>;
  object: Assessments_Assessment_Result_Statuses_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_AssessmentsArgs = {
  if_matched?: InputMaybe<Assessments_Assessments_If_Matched>;
  objects: Array<Assessments_Assessments_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Assessments_OneArgs = {
  if_matched?: InputMaybe<Assessments_Assessments_If_Matched>;
  object: Assessments_Assessments_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Cohort_FencersArgs = {
  if_matched?: InputMaybe<Assessments_Cohort_Fencers_If_Matched>;
  objects: Array<Assessments_Cohort_Fencers_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Cohort_Fencers_OneArgs = {
  if_matched?: InputMaybe<Assessments_Cohort_Fencers_If_Matched>;
  object: Assessments_Cohort_Fencers_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_QuestionsArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Questions_If_Matched>;
  objects: Array<Assessments_Metric_Questions_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_Questions_OneArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Questions_If_Matched>;
  object: Assessments_Metric_Questions_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_ResultArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Result_If_Matched>;
  objects: Array<Assessments_Metric_Result_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_Result_OneArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Result_If_Matched>;
  object: Assessments_Metric_Result_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_TypesArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Types_If_Matched>;
  objects: Array<Assessments_Metric_Types_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_Metric_Types_OneArgs = {
  if_matched?: InputMaybe<Assessments_Metric_Types_If_Matched>;
  object: Assessments_Metric_Types_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_CalendarsArgs = {
  if_matched?: InputMaybe<Calendars_If_Matched>;
  objects: Array<Calendars_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Calendars_OneArgs = {
  if_matched?: InputMaybe<Calendars_If_Matched>;
  object: Calendars_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Club_AccountsArgs = {
  if_matched?: InputMaybe<Club_Accounts_If_Matched>;
  objects: Array<Club_Accounts_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Accounts_OneArgs = {
  if_matched?: InputMaybe<Club_Accounts_If_Matched>;
  object: Club_Accounts_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountAppRolesArgs = {
  _set?: InputMaybe<AccountAppRoles_Set_Input>;
  where: AccountAppRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AccountAppRoles_By_PkArgs = {
  _set?: InputMaybe<AccountAppRoles_Set_Input>;
  pk_columns: AccountAppRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountClubRolesArgs = {
  _set?: InputMaybe<AccountClubRoles_Set_Input>;
  where: AccountClubRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AccountClubRoles_By_PkArgs = {
  _set?: InputMaybe<AccountClubRoles_Set_Input>;
  pk_columns: AccountClubRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AppRolesArgs = {
  _set?: InputMaybe<AppRoles_Set_Input>;
  where: AppRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AppRoles_By_PkArgs = {
  _set?: InputMaybe<AppRoles_Set_Input>;
  pk_columns: AppRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AssociationMembersArgs = {
  _inc?: InputMaybe<AssociationMembers_Inc_Input>;
  _set?: InputMaybe<AssociationMembers_Set_Input>;
  where: AssociationMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AssociationMembers_By_PkArgs = {
  _inc?: InputMaybe<AssociationMembers_Inc_Input>;
  _set?: InputMaybe<AssociationMembers_Set_Input>;
  pk_columns: AssociationMembers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ClubLocationsArgs = {
  _set?: InputMaybe<ClubLocations_Set_Input>;
  where: ClubLocations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ClubLocations_By_PkArgs = {
  _set?: InputMaybe<ClubLocations_Set_Input>;
  pk_columns: ClubLocations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ClubRolesArgs = {
  _set?: InputMaybe<ClubRoles_Set_Input>;
  where: ClubRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ClubRoles_By_PkArgs = {
  _set?: InputMaybe<ClubRoles_Set_Input>;
  pk_columns: ClubRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ClubsArgs = {
  _inc?: InputMaybe<Clubs_Inc_Input>;
  _set?: InputMaybe<Clubs_Set_Input>;
  where: Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clubs_By_PkArgs = {
  _inc?: InputMaybe<Clubs_Inc_Input>;
  _set?: InputMaybe<Clubs_Set_Input>;
  pk_columns: Clubs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StudentsArgs = {
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Students_By_PkArgs = {
  _set?: InputMaybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_CohortsArgs = {
  _set?: InputMaybe<Assessments_Assessment_Cohorts_Set_Input>;
  where: Assessments_Assessment_Cohorts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_Cohorts_By_PkArgs = {
  _set?: InputMaybe<Assessments_Assessment_Cohorts_Set_Input>;
  pk_columns: Assessments_Assessment_Cohorts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_MetricsArgs = {
  _inc?: InputMaybe<Assessments_Assessment_Metrics_Inc_Input>;
  _set?: InputMaybe<Assessments_Assessment_Metrics_Set_Input>;
  where: Assessments_Assessment_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_Metrics_By_PkArgs = {
  _inc?: InputMaybe<Assessments_Assessment_Metrics_Inc_Input>;
  _set?: InputMaybe<Assessments_Assessment_Metrics_Set_Input>;
  pk_columns: Assessments_Assessment_Metrics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_ResultArgs = {
  _set?: InputMaybe<Assessments_Assessment_Result_Set_Input>;
  where: Assessments_Assessment_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_Result_By_PkArgs = {
  _set?: InputMaybe<Assessments_Assessment_Result_Set_Input>;
  pk_columns: Assessments_Assessment_Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_Result_StatusesArgs = {
  _set?: InputMaybe<Assessments_Assessment_Result_Statuses_Set_Input>;
  where: Assessments_Assessment_Result_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessment_Result_Statuses_By_PkArgs = {
  _set?: InputMaybe<Assessments_Assessment_Result_Statuses_Set_Input>;
  pk_columns: Assessments_Assessment_Result_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_AssessmentsArgs = {
  _set?: InputMaybe<Assessments_Assessments_Set_Input>;
  where: Assessments_Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Assessments_By_PkArgs = {
  _set?: InputMaybe<Assessments_Assessments_Set_Input>;
  pk_columns: Assessments_Assessments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Cohort_FencersArgs = {
  _set?: InputMaybe<Assessments_Cohort_Fencers_Set_Input>;
  where: Assessments_Cohort_Fencers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Cohort_Fencers_By_PkArgs = {
  _set?: InputMaybe<Assessments_Cohort_Fencers_Set_Input>;
  pk_columns: Assessments_Cohort_Fencers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_QuestionsArgs = {
  _set?: InputMaybe<Assessments_Metric_Questions_Set_Input>;
  where: Assessments_Metric_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_Questions_By_PkArgs = {
  _set?: InputMaybe<Assessments_Metric_Questions_Set_Input>;
  pk_columns: Assessments_Metric_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_ResultArgs = {
  _set?: InputMaybe<Assessments_Metric_Result_Set_Input>;
  where: Assessments_Metric_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_Result_By_PkArgs = {
  _set?: InputMaybe<Assessments_Metric_Result_Set_Input>;
  pk_columns: Assessments_Metric_Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_TypesArgs = {
  _set?: InputMaybe<Assessments_Metric_Types_Set_Input>;
  where: Assessments_Metric_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_Metric_Types_By_PkArgs = {
  _set?: InputMaybe<Assessments_Metric_Types_Set_Input>;
  pk_columns: Assessments_Metric_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CalendarsArgs = {
  _set?: InputMaybe<Calendars_Set_Input>;
  where: Calendars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Calendars_By_PkArgs = {
  _set?: InputMaybe<Calendars_Set_Input>;
  pk_columns: Calendars_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_AccountsArgs = {
  _set?: InputMaybe<Club_Accounts_Set_Input>;
  where: Club_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Accounts_By_PkArgs = {
  _set?: InputMaybe<Club_Accounts_Set_Input>;
  pk_columns: Club_Accounts_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls first */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls last */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  AccountAppRoles: Array<AccountAppRoles>;
  /** An aggregate relationship */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  /** fetch data from the table: "AccountAppRoles" using primary key columns */
  AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** An array relationship */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  AccountClubRoles_aggregate: AccountClubRoles_Aggregate;
  /** fetch data from the table: "AccountClubRoles" using primary key columns */
  AccountClubRoles_by_pk?: Maybe<AccountClubRoles>;
  /** An array relationship */
  Accounts: Array<Accounts>;
  /** An aggregate relationship */
  Accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "Addresses" */
  Addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "Addresses" */
  Addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "Addresses" using primary key columns */
  Addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "AppRoles" */
  AppRoles: Array<AppRoles>;
  /** fetch aggregated fields from the table: "AppRoles" */
  AppRoles_aggregate: AppRoles_Aggregate;
  /** fetch data from the table: "AppRoles" using primary key columns */
  AppRoles_by_pk?: Maybe<AppRoles>;
  /** fetch data from the table: "AssociationMembers" */
  AssociationMembers: Array<AssociationMembers>;
  /** fetch aggregated fields from the table: "AssociationMembers" */
  AssociationMembers_aggregate: AssociationMembers_Aggregate;
  /** fetch data from the table: "AssociationMembers" using primary key columns */
  AssociationMembers_by_pk?: Maybe<AssociationMembers>;
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An aggregate relationship */
  ClubLocations_aggregate: ClubLocations_Aggregate;
  /** fetch data from the table: "ClubLocations" using primary key columns */
  ClubLocations_by_pk?: Maybe<ClubLocations>;
  /** fetch data from the table: "ClubRoles" */
  ClubRoles: Array<ClubRoles>;
  /** fetch aggregated fields from the table: "ClubRoles" */
  ClubRoles_aggregate: ClubRoles_Aggregate;
  /** fetch data from the table: "ClubRoles" using primary key columns */
  ClubRoles_by_pk?: Maybe<ClubRoles>;
  /** fetch data from the table: "Clubs" */
  Clubs: Array<Clubs>;
  /** fetch aggregated fields from the table: "Clubs" */
  Clubs_aggregate: Clubs_Aggregate;
  /** fetch data from the table: "Clubs" using primary key columns */
  Clubs_by_pk?: Maybe<Clubs>;
  /** An array relationship */
  Students: Array<Students>;
  /** An aggregate relationship */
  Students_aggregate: Students_Aggregate;
  /** fetch data from the table: "Students" using primary key columns */
  Students_by_pk?: Maybe<Students>;
  /** fetch data from the table: "assessments.assessment_cohorts" */
  assessments_assessment_cohorts: Array<Assessments_Assessment_Cohorts>;
  /** fetch aggregated fields from the table: "assessments.assessment_cohorts" */
  assessments_assessment_cohorts_aggregate: Assessments_Assessment_Cohorts_Aggregate;
  /** fetch data from the table: "assessments.assessment_cohorts" using primary key columns */
  assessments_assessment_cohorts_by_pk?: Maybe<Assessments_Assessment_Cohorts>;
  /** fetch data from the table: "assessments.assessment_metrics" */
  assessments_assessment_metrics: Array<Assessments_Assessment_Metrics>;
  /** fetch aggregated fields from the table: "assessments.assessment_metrics" */
  assessments_assessment_metrics_aggregate: Assessments_Assessment_Metrics_Aggregate;
  /** fetch data from the table: "assessments.assessment_metrics" using primary key columns */
  assessments_assessment_metrics_by_pk?: Maybe<Assessments_Assessment_Metrics>;
  /** fetch data from the table: "assessments.assessment_result" */
  assessments_assessment_result: Array<Assessments_Assessment_Result>;
  /** fetch aggregated fields from the table: "assessments.assessment_result" */
  assessments_assessment_result_aggregate: Assessments_Assessment_Result_Aggregate;
  /** fetch data from the table: "assessments.assessment_result" using primary key columns */
  assessments_assessment_result_by_pk?: Maybe<Assessments_Assessment_Result>;
  /** fetch data from the table: "assessments.assessment_result_statuses" */
  assessments_assessment_result_statuses: Array<Assessments_Assessment_Result_Statuses>;
  /** fetch aggregated fields from the table: "assessments.assessment_result_statuses" */
  assessments_assessment_result_statuses_aggregate: Assessments_Assessment_Result_Statuses_Aggregate;
  /** fetch data from the table: "assessments.assessment_result_statuses" using primary key columns */
  assessments_assessment_result_statuses_by_pk?: Maybe<Assessments_Assessment_Result_Statuses>;
  /** fetch data from the table: "assessments.assessments" */
  assessments_assessments: Array<Assessments_Assessments>;
  /** fetch aggregated fields from the table: "assessments.assessments" */
  assessments_assessments_aggregate: Assessments_Assessments_Aggregate;
  /** fetch data from the table: "assessments.assessments" using primary key columns */
  assessments_assessments_by_pk?: Maybe<Assessments_Assessments>;
  /** fetch data from the table: "assessments.cohort_fencers" */
  assessments_cohort_fencers: Array<Assessments_Cohort_Fencers>;
  /** fetch aggregated fields from the table: "assessments.cohort_fencers" */
  assessments_cohort_fencers_aggregate: Assessments_Cohort_Fencers_Aggregate;
  /** fetch data from the table: "assessments.cohort_fencers" using primary key columns */
  assessments_cohort_fencers_by_pk?: Maybe<Assessments_Cohort_Fencers>;
  /** fetch data from the table: "assessments.metric_questions" */
  assessments_metric_questions: Array<Assessments_Metric_Questions>;
  /** fetch aggregated fields from the table: "assessments.metric_questions" */
  assessments_metric_questions_aggregate: Assessments_Metric_Questions_Aggregate;
  /** fetch data from the table: "assessments.metric_questions" using primary key columns */
  assessments_metric_questions_by_pk?: Maybe<Assessments_Metric_Questions>;
  /** fetch data from the table: "assessments.metric_result" */
  assessments_metric_result: Array<Assessments_Metric_Result>;
  /** fetch aggregated fields from the table: "assessments.metric_result" */
  assessments_metric_result_aggregate: Assessments_Metric_Result_Aggregate;
  /** fetch data from the table: "assessments.metric_result" using primary key columns */
  assessments_metric_result_by_pk?: Maybe<Assessments_Metric_Result>;
  /** fetch data from the table: "assessments.metric_types" */
  assessments_metric_types: Array<Assessments_Metric_Types>;
  /** fetch aggregated fields from the table: "assessments.metric_types" */
  assessments_metric_types_aggregate: Assessments_Metric_Types_Aggregate;
  /** fetch data from the table: "assessments.metric_types" using primary key columns */
  assessments_metric_types_by_pk?: Maybe<Assessments_Metric_Types>;
  /** fetch data from the table: "calendars" */
  calendars: Array<Calendars>;
  /** fetch aggregated fields from the table: "calendars" */
  calendars_aggregate: Calendars_Aggregate;
  /** fetch data from the table: "calendars" using primary key columns */
  calendars_by_pk?: Maybe<Calendars>;
  /** An array relationship */
  club_accounts: Array<Club_Accounts>;
  /** An aggregate relationship */
  club_accounts_aggregate: Club_Accounts_Aggregate;
  /** fetch data from the table: "club_accounts" using primary key columns */
  club_accounts_by_pk?: Maybe<Club_Accounts>;
};


export type Query_RootAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Query_RootAccountAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Query_RootAccountAppRoles_By_PkArgs = {
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


export type Query_RootAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Query_RootAccountClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Query_RootAccountClubRoles_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


export type Query_RootAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  Oid: Scalars['String'];
};


export type Query_RootAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  AddressId: Scalars['uniqueidentifier'];
};


export type Query_RootAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
};


export type Query_RootAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
};


export type Query_RootAppRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


export type Query_RootAssociationMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembers_Order_By>>;
  where?: InputMaybe<AssociationMembers_Bool_Exp>;
};


export type Query_RootAssociationMembers_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembers_Order_By>>;
  where?: InputMaybe<AssociationMembers_Bool_Exp>;
};


export type Query_RootAssociationMembers_By_PkArgs = {
  AssociationMemberId: Scalars['String'];
};


export type Query_RootClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Query_RootClubLocations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Query_RootClubLocations_By_PkArgs = {
  LocationId: Scalars['String'];
};


export type Query_RootClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Query_RootClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Query_RootClubRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


export type Query_RootClubsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootClubs_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootClubs_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
};


export type Query_RootStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_By_PkArgs = {
  StudentId: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Assessment_CohortsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Cohorts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Cohorts_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Assessment_MetricsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Metrics_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Metrics_By_PkArgs = {
  assessment_id: Scalars['uniqueidentifier'];
  metric_id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Assessment_ResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Result_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Assessment_Result_StatusesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Result_Statuses_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
};


export type Query_RootAssessments_Assessment_Result_Statuses_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAssessments_AssessmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


export type Query_RootAssessments_Assessments_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


export type Query_RootAssessments_Assessments_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Cohort_FencersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};


export type Query_RootAssessments_Cohort_Fencers_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};


export type Query_RootAssessments_Cohort_Fencers_By_PkArgs = {
  cohort_id: Scalars['uniqueidentifier'];
  fencer_id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Metric_QuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Questions_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Questions_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Metric_ResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Result_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Query_RootAssessments_Metric_TypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Types_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Types_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Types_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
};


export type Query_RootAssessments_Metric_Types_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCalendarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendars_Order_By>>;
  where?: InputMaybe<Calendars_Bool_Exp>;
};


export type Query_RootCalendars_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendars_Order_By>>;
  where?: InputMaybe<Calendars_Bool_Exp>;
};


export type Query_RootCalendars_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootClub_AccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


export type Query_RootClub_Accounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


export type Query_RootClub_Accounts_By_PkArgs = {
  account_id: Scalars['String'];
  club_id: Scalars['uniqueidentifier'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  AccountAppRoles: Array<AccountAppRoles>;
  /** An aggregate relationship */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  /** fetch data from the table: "AccountAppRoles" using primary key columns */
  AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** An array relationship */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  AccountClubRoles_aggregate: AccountClubRoles_Aggregate;
  /** fetch data from the table: "AccountClubRoles" using primary key columns */
  AccountClubRoles_by_pk?: Maybe<AccountClubRoles>;
  /** An array relationship */
  Accounts: Array<Accounts>;
  /** An aggregate relationship */
  Accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "Addresses" */
  Addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "Addresses" */
  Addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "Addresses" using primary key columns */
  Addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "AppRoles" */
  AppRoles: Array<AppRoles>;
  /** fetch aggregated fields from the table: "AppRoles" */
  AppRoles_aggregate: AppRoles_Aggregate;
  /** fetch data from the table: "AppRoles" using primary key columns */
  AppRoles_by_pk?: Maybe<AppRoles>;
  /** fetch data from the table: "AssociationMembers" */
  AssociationMembers: Array<AssociationMembers>;
  /** fetch aggregated fields from the table: "AssociationMembers" */
  AssociationMembers_aggregate: AssociationMembers_Aggregate;
  /** fetch data from the table: "AssociationMembers" using primary key columns */
  AssociationMembers_by_pk?: Maybe<AssociationMembers>;
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An aggregate relationship */
  ClubLocations_aggregate: ClubLocations_Aggregate;
  /** fetch data from the table: "ClubLocations" using primary key columns */
  ClubLocations_by_pk?: Maybe<ClubLocations>;
  /** fetch data from the table: "ClubRoles" */
  ClubRoles: Array<ClubRoles>;
  /** fetch aggregated fields from the table: "ClubRoles" */
  ClubRoles_aggregate: ClubRoles_Aggregate;
  /** fetch data from the table: "ClubRoles" using primary key columns */
  ClubRoles_by_pk?: Maybe<ClubRoles>;
  /** fetch data from the table: "Clubs" */
  Clubs: Array<Clubs>;
  /** fetch aggregated fields from the table: "Clubs" */
  Clubs_aggregate: Clubs_Aggregate;
  /** fetch data from the table: "Clubs" using primary key columns */
  Clubs_by_pk?: Maybe<Clubs>;
  /** An array relationship */
  Students: Array<Students>;
  /** An aggregate relationship */
  Students_aggregate: Students_Aggregate;
  /** fetch data from the table: "Students" using primary key columns */
  Students_by_pk?: Maybe<Students>;
  /** fetch data from the table: "assessments.assessment_cohorts" */
  assessments_assessment_cohorts: Array<Assessments_Assessment_Cohorts>;
  /** fetch aggregated fields from the table: "assessments.assessment_cohorts" */
  assessments_assessment_cohorts_aggregate: Assessments_Assessment_Cohorts_Aggregate;
  /** fetch data from the table: "assessments.assessment_cohorts" using primary key columns */
  assessments_assessment_cohorts_by_pk?: Maybe<Assessments_Assessment_Cohorts>;
  /** fetch data from the table: "assessments.assessment_metrics" */
  assessments_assessment_metrics: Array<Assessments_Assessment_Metrics>;
  /** fetch aggregated fields from the table: "assessments.assessment_metrics" */
  assessments_assessment_metrics_aggregate: Assessments_Assessment_Metrics_Aggregate;
  /** fetch data from the table: "assessments.assessment_metrics" using primary key columns */
  assessments_assessment_metrics_by_pk?: Maybe<Assessments_Assessment_Metrics>;
  /** fetch data from the table: "assessments.assessment_result" */
  assessments_assessment_result: Array<Assessments_Assessment_Result>;
  /** fetch aggregated fields from the table: "assessments.assessment_result" */
  assessments_assessment_result_aggregate: Assessments_Assessment_Result_Aggregate;
  /** fetch data from the table: "assessments.assessment_result" using primary key columns */
  assessments_assessment_result_by_pk?: Maybe<Assessments_Assessment_Result>;
  /** fetch data from the table: "assessments.assessment_result_statuses" */
  assessments_assessment_result_statuses: Array<Assessments_Assessment_Result_Statuses>;
  /** fetch aggregated fields from the table: "assessments.assessment_result_statuses" */
  assessments_assessment_result_statuses_aggregate: Assessments_Assessment_Result_Statuses_Aggregate;
  /** fetch data from the table: "assessments.assessment_result_statuses" using primary key columns */
  assessments_assessment_result_statuses_by_pk?: Maybe<Assessments_Assessment_Result_Statuses>;
  /** fetch data from the table: "assessments.assessments" */
  assessments_assessments: Array<Assessments_Assessments>;
  /** fetch aggregated fields from the table: "assessments.assessments" */
  assessments_assessments_aggregate: Assessments_Assessments_Aggregate;
  /** fetch data from the table: "assessments.assessments" using primary key columns */
  assessments_assessments_by_pk?: Maybe<Assessments_Assessments>;
  /** fetch data from the table: "assessments.cohort_fencers" */
  assessments_cohort_fencers: Array<Assessments_Cohort_Fencers>;
  /** fetch aggregated fields from the table: "assessments.cohort_fencers" */
  assessments_cohort_fencers_aggregate: Assessments_Cohort_Fencers_Aggregate;
  /** fetch data from the table: "assessments.cohort_fencers" using primary key columns */
  assessments_cohort_fencers_by_pk?: Maybe<Assessments_Cohort_Fencers>;
  /** fetch data from the table: "assessments.metric_questions" */
  assessments_metric_questions: Array<Assessments_Metric_Questions>;
  /** fetch aggregated fields from the table: "assessments.metric_questions" */
  assessments_metric_questions_aggregate: Assessments_Metric_Questions_Aggregate;
  /** fetch data from the table: "assessments.metric_questions" using primary key columns */
  assessments_metric_questions_by_pk?: Maybe<Assessments_Metric_Questions>;
  /** fetch data from the table: "assessments.metric_result" */
  assessments_metric_result: Array<Assessments_Metric_Result>;
  /** fetch aggregated fields from the table: "assessments.metric_result" */
  assessments_metric_result_aggregate: Assessments_Metric_Result_Aggregate;
  /** fetch data from the table: "assessments.metric_result" using primary key columns */
  assessments_metric_result_by_pk?: Maybe<Assessments_Metric_Result>;
  /** fetch data from the table: "assessments.metric_types" */
  assessments_metric_types: Array<Assessments_Metric_Types>;
  /** fetch aggregated fields from the table: "assessments.metric_types" */
  assessments_metric_types_aggregate: Assessments_Metric_Types_Aggregate;
  /** fetch data from the table: "assessments.metric_types" using primary key columns */
  assessments_metric_types_by_pk?: Maybe<Assessments_Metric_Types>;
  /** fetch data from the table: "calendars" */
  calendars: Array<Calendars>;
  /** fetch aggregated fields from the table: "calendars" */
  calendars_aggregate: Calendars_Aggregate;
  /** fetch data from the table: "calendars" using primary key columns */
  calendars_by_pk?: Maybe<Calendars>;
  /** An array relationship */
  club_accounts: Array<Club_Accounts>;
  /** An aggregate relationship */
  club_accounts_aggregate: Club_Accounts_Aggregate;
  /** fetch data from the table: "club_accounts" using primary key columns */
  club_accounts_by_pk?: Maybe<Club_Accounts>;
};


export type Subscription_RootAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Subscription_RootAccountAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Subscription_RootAccountAppRoles_By_PkArgs = {
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


export type Subscription_RootAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Subscription_RootAccountClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Subscription_RootAccountClubRoles_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
};


export type Subscription_RootAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  Oid: Scalars['String'];
};


export type Subscription_RootAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  AddressId: Scalars['uniqueidentifier'];
};


export type Subscription_RootAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
};


export type Subscription_RootAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
};


export type Subscription_RootAppRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssociationMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembers_Order_By>>;
  where?: InputMaybe<AssociationMembers_Bool_Exp>;
};


export type Subscription_RootAssociationMembers_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembers_Order_By>>;
  where?: InputMaybe<AssociationMembers_Bool_Exp>;
};


export type Subscription_RootAssociationMembers_By_PkArgs = {
  AssociationMemberId: Scalars['String'];
};


export type Subscription_RootClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Subscription_RootClubLocations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Subscription_RootClubLocations_By_PkArgs = {
  LocationId: Scalars['String'];
};


export type Subscription_RootClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Subscription_RootClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Subscription_RootClubRoles_By_PkArgs = {
  RoleId: Scalars['uniqueidentifier'];
};


export type Subscription_RootClubsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_By_PkArgs = {
  ClubId: Scalars['uniqueidentifier'];
};


export type Subscription_RootStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_By_PkArgs = {
  StudentId: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Assessment_CohortsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Cohorts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Cohorts_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Cohorts_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Cohorts_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Assessment_MetricsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Metrics_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Metrics_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Metrics_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Metrics_By_PkArgs = {
  assessment_id: Scalars['uniqueidentifier'];
  metric_id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Assessment_ResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Result_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Assessment_Result_StatusesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Result_Statuses_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessment_Result_Statuses_Order_By>>;
  where?: InputMaybe<Assessments_Assessment_Result_Statuses_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessment_Result_Statuses_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAssessments_AssessmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessments_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Assessments_Bool_Exp>;
};


export type Subscription_RootAssessments_Assessments_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Cohort_FencersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};


export type Subscription_RootAssessments_Cohort_Fencers_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Cohort_Fencers_Order_By>>;
  where?: InputMaybe<Assessments_Cohort_Fencers_Bool_Exp>;
};


export type Subscription_RootAssessments_Cohort_Fencers_By_PkArgs = {
  cohort_id: Scalars['uniqueidentifier'];
  fencer_id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Metric_QuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Questions_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Questions_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Questions_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Questions_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Metric_ResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Result_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Result_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Result_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Result_By_PkArgs = {
  id: Scalars['uniqueidentifier'];
};


export type Subscription_RootAssessments_Metric_TypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Types_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Types_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assessments_Metric_Types_Order_By>>;
  where?: InputMaybe<Assessments_Metric_Types_Bool_Exp>;
};


export type Subscription_RootAssessments_Metric_Types_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCalendarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendars_Order_By>>;
  where?: InputMaybe<Calendars_Bool_Exp>;
};


export type Subscription_RootCalendars_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendars_Order_By>>;
  where?: InputMaybe<Calendars_Bool_Exp>;
};


export type Subscription_RootCalendars_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootClub_AccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


export type Subscription_RootClub_Accounts_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Accounts_Order_By>>;
  where?: InputMaybe<Club_Accounts_Bool_Exp>;
};


export type Subscription_RootClub_Accounts_By_PkArgs = {
  account_id: Scalars['String'];
  club_id: Scalars['uniqueidentifier'];
};

/** Boolean expression to compare columns of type "uniqueidentifier". All fields are combined with logical 'AND'. */
export type Uniqueidentifier_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uniqueidentifier']>;
  _gt?: InputMaybe<Scalars['uniqueidentifier']>;
  _gte?: InputMaybe<Scalars['uniqueidentifier']>;
  _in?: InputMaybe<Array<Scalars['uniqueidentifier']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uniqueidentifier']>;
  _lte?: InputMaybe<Scalars['uniqueidentifier']>;
  _neq?: InputMaybe<Scalars['uniqueidentifier']>;
  _nin?: InputMaybe<Array<Scalars['uniqueidentifier']>>;
};

export type AccountProfileQueryVariables = Exact<{
  oid: Scalars['String'];
}>;


export type AccountProfileQuery = { __typename?: 'query_root', Accounts: Array<{ __typename?: 'Accounts', Oid: string, PrimaryStudentId?: any | null, Student?: { __typename?: 'Students', StudentId: any, FirstName: string, LastName: string, Email?: string | null, Phone?: string | null, Birthdate?: any | null, AssociationMemberId?: string | null, AssociationMember?: { __typename?: 'AssociationMembers', FullName: string, FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string } | null } | null, Address?: { __typename?: 'Addresses', AddressId: any, Address: string, Address2?: string | null, City: string, Postal: string, State: string } | null, calendar?: { __typename?: 'calendars', id: string, account_id: string, access_token: string, provider: string, created_at: any } | null }> };

export type AddFencerToAccountMutationVariables = Exact<{
  fencer: Students_Insert_Input;
}>;


export type AddFencerToAccountMutation = { __typename?: 'mutation_root', insert_Students_one?: { __typename?: 'Students', Oid?: string | null, StudentId: any, FirstName: string, LastName: string, Birthdate?: any | null, Phone?: string | null, Email?: string | null } | null };

export type DeleteFencerByIdMutationVariables = Exact<{
  fencerId: Scalars['uniqueidentifier'];
}>;


export type DeleteFencerByIdMutation = { __typename?: 'mutation_root', delete_Students_by_pk?: { __typename?: 'Students', StudentId: any } | null };

export type GetAccountFencersQueryVariables = Exact<{
  oid: Scalars['String'];
}>;


export type GetAccountFencersQuery = { __typename?: 'query_root', Students: Array<{ __typename?: 'Students', Oid?: string | null, StudentId: any, FirstName: string, LastName: string, Birthdate?: any | null, AssociationMemberId?: string | null, Email?: string | null, Phone?: string | null, AvatarUrl?: string | null }> };

export type GetAssessmentByIdQueryVariables = Exact<{
  id: Scalars['uniqueidentifier'];
}>;


export type GetAssessmentByIdQuery = { __typename?: 'query_root', assessments_assessments_by_pk?: { __typename?: 'assessments_assessments', id: any, title: string, description?: string | null, assessment_metrics: Array<{ __typename?: 'assessments_assessment_metrics', order_number: number, assessment_id: any, metric_id: any, metric_question: { __typename?: 'assessments_metric_questions', id: any, title: string, description?: string | null, metric_type_id: string } }> } | null };

export type GetAssessmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssessmentsQuery = { __typename?: 'query_root', assessments_assessments: Array<{ __typename?: 'assessments_assessments', id: any, title: string, description?: string | null, created_at: any, account?: { __typename?: 'Accounts', Oid: string, Student?: { __typename?: 'Students', StudentId: any, FirstName: string, LastName: string } | null } | null, assessment_cohorts: Array<{ __typename?: 'assessments_assessment_cohorts', id: any, title: string, description: string }>, assessment_metrics: Array<{ __typename?: 'assessments_assessment_metrics', metric_question: { __typename?: 'assessments_metric_questions', id: any, title: string, description?: string | null, metric_type: { __typename?: 'assessments_metric_types', id: string, description?: string | null, name: string } } }> }> };

export type GetMemberDetailsByNameQueryVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type GetMemberDetailsByNameQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, FullName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };

export type GetMembersByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMembersByIdQuery = { __typename?: 'query_root', AssociationMembers_by_pk?: { __typename?: 'AssociationMembers', FullName: string, FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string, Students: Array<{ __typename?: 'Students', Oid?: string | null, StudentId: any }> } | null };

export type SearchMembersQueryVariables = Exact<{
  filter: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type SearchMembersQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FullName: string, FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string, Students: Array<{ __typename?: 'Students', StudentId: any, Oid?: string | null }> }> };

export type UpdateStudentByIdMutationVariables = Exact<{
  id: Scalars['String'];
  changes: Accounts_Set_Input;
}>;


export type UpdateStudentByIdMutation = { __typename?: 'mutation_root', update_Accounts_by_pk?: { __typename?: 'Accounts', Oid: string, PrimaryStudentId?: any | null, Student?: { __typename?: 'Students', StudentId: any, FirstName: string, LastName: string, Email?: string | null, Phone?: string | null, Birthdate?: any | null, AssociationMemberId?: string | null } | null, Address?: { __typename?: 'Addresses', AddressId: any, Address: string, Address2?: string | null, City: string, Postal: string, State: string } | null } | null };

export type UpdateFencerByIdMutationVariables = Exact<{
  fencerId: Scalars['uniqueidentifier'];
  changes: Students_Set_Input;
}>;


export type UpdateFencerByIdMutation = { __typename?: 'mutation_root', update_Students_by_pk?: { __typename?: 'Students', FirstName: string, LastName: string, Birthdate?: any | null, Phone?: string | null, Email?: string | null, AvatarUrl?: string | null, AssociationMemberId?: string | null, StudentId: any, Oid?: string | null } | null };


export const AccountProfileDocument = gql`
    query AccountProfile($oid: String!) {
  Accounts(where: {Oid: {_eq: $oid}}) {
    Oid
    PrimaryStudentId
    Student {
      StudentId
      FirstName
      LastName
      Email
      Phone
      Birthdate
      AssociationMemberId
      AssociationMember {
        FullName
        FirstName
        LastName
        FullName
        Birthdate
        Club1Name
        Club2Name
        Division
        AssociationMemberId
        MemberType
        Expiration
        Foil
        Epee
        Saber
      }
    }
    Address {
      AddressId
      Address
      Address2
      City
      Postal
      State
    }
    calendar {
      id
      account_id
      access_token
      provider
      created_at
    }
  }
}
    `;

/**
 * __useAccountProfileQuery__
 *
 * To run a query within a React component, call `useAccountProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountProfileQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useAccountProfileQuery(baseOptions: ApolloReactHooks.QueryHookOptions<AccountProfileQuery, AccountProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AccountProfileQuery, AccountProfileQueryVariables>(AccountProfileDocument, options);
      }
export function useAccountProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AccountProfileQuery, AccountProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AccountProfileQuery, AccountProfileQueryVariables>(AccountProfileDocument, options);
        }
export type AccountProfileQueryHookResult = ReturnType<typeof useAccountProfileQuery>;
export type AccountProfileLazyQueryHookResult = ReturnType<typeof useAccountProfileLazyQuery>;
export type AccountProfileQueryResult = Apollo.QueryResult<AccountProfileQuery, AccountProfileQueryVariables>;
export const AddFencerToAccountDocument = gql`
    mutation AddFencerToAccount($fencer: Students_insert_input!) {
  insert_Students_one(object: $fencer) {
    Oid
    StudentId
    FirstName
    LastName
    Birthdate
    Phone
    Email
  }
}
    `;
export type AddFencerToAccountMutationFn = Apollo.MutationFunction<AddFencerToAccountMutation, AddFencerToAccountMutationVariables>;

/**
 * __useAddFencerToAccountMutation__
 *
 * To run a mutation, you first call `useAddFencerToAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFencerToAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFencerToAccountMutation, { data, loading, error }] = useAddFencerToAccountMutation({
 *   variables: {
 *      fencer: // value for 'fencer'
 *   },
 * });
 */
export function useAddFencerToAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFencerToAccountMutation, AddFencerToAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AddFencerToAccountMutation, AddFencerToAccountMutationVariables>(AddFencerToAccountDocument, options);
      }
export type AddFencerToAccountMutationHookResult = ReturnType<typeof useAddFencerToAccountMutation>;
export type AddFencerToAccountMutationResult = Apollo.MutationResult<AddFencerToAccountMutation>;
export type AddFencerToAccountMutationOptions = Apollo.BaseMutationOptions<AddFencerToAccountMutation, AddFencerToAccountMutationVariables>;
export const DeleteFencerByIdDocument = gql`
    mutation DeleteFencerById($fencerId: uniqueidentifier!) {
  delete_Students_by_pk(StudentId: $fencerId) {
    StudentId
  }
}
    `;
export type DeleteFencerByIdMutationFn = Apollo.MutationFunction<DeleteFencerByIdMutation, DeleteFencerByIdMutationVariables>;

/**
 * __useDeleteFencerByIdMutation__
 *
 * To run a mutation, you first call `useDeleteFencerByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFencerByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFencerByIdMutation, { data, loading, error }] = useDeleteFencerByIdMutation({
 *   variables: {
 *      fencerId: // value for 'fencerId'
 *   },
 * });
 */
export function useDeleteFencerByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFencerByIdMutation, DeleteFencerByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteFencerByIdMutation, DeleteFencerByIdMutationVariables>(DeleteFencerByIdDocument, options);
      }
export type DeleteFencerByIdMutationHookResult = ReturnType<typeof useDeleteFencerByIdMutation>;
export type DeleteFencerByIdMutationResult = Apollo.MutationResult<DeleteFencerByIdMutation>;
export type DeleteFencerByIdMutationOptions = Apollo.BaseMutationOptions<DeleteFencerByIdMutation, DeleteFencerByIdMutationVariables>;
export const GetAccountFencersDocument = gql`
    query GetAccountFencers($oid: String!) {
  Students(where: {Oid: {_eq: $oid}}, order_by: {FirstName: asc}) {
    Oid
    StudentId
    FirstName
    LastName
    Birthdate
    AssociationMemberId
    Email
    Phone
    AvatarUrl
  }
}
    `;

/**
 * __useGetAccountFencersQuery__
 *
 * To run a query within a React component, call `useGetAccountFencersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountFencersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountFencersQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useGetAccountFencersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetAccountFencersQuery, GetAccountFencersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAccountFencersQuery, GetAccountFencersQueryVariables>(GetAccountFencersDocument, options);
      }
export function useGetAccountFencersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccountFencersQuery, GetAccountFencersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAccountFencersQuery, GetAccountFencersQueryVariables>(GetAccountFencersDocument, options);
        }
export type GetAccountFencersQueryHookResult = ReturnType<typeof useGetAccountFencersQuery>;
export type GetAccountFencersLazyQueryHookResult = ReturnType<typeof useGetAccountFencersLazyQuery>;
export type GetAccountFencersQueryResult = Apollo.QueryResult<GetAccountFencersQuery, GetAccountFencersQueryVariables>;
export const GetAssessmentByIdDocument = gql`
    query GetAssessmentById($id: uniqueidentifier!) {
  assessments_assessments_by_pk(id: $id) {
    id
    title
    description
    assessment_metrics(order_by: {order_number: asc}) {
      order_number
      assessment_id
      metric_id
      metric_question {
        id
        title
        description
        metric_type_id
      }
    }
  }
}
    `;

/**
 * __useGetAssessmentByIdQuery__
 *
 * To run a query within a React component, call `useGetAssessmentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssessmentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssessmentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAssessmentByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetAssessmentByIdQuery, GetAssessmentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAssessmentByIdQuery, GetAssessmentByIdQueryVariables>(GetAssessmentByIdDocument, options);
      }
export function useGetAssessmentByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAssessmentByIdQuery, GetAssessmentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAssessmentByIdQuery, GetAssessmentByIdQueryVariables>(GetAssessmentByIdDocument, options);
        }
export type GetAssessmentByIdQueryHookResult = ReturnType<typeof useGetAssessmentByIdQuery>;
export type GetAssessmentByIdLazyQueryHookResult = ReturnType<typeof useGetAssessmentByIdLazyQuery>;
export type GetAssessmentByIdQueryResult = Apollo.QueryResult<GetAssessmentByIdQuery, GetAssessmentByIdQueryVariables>;
export const GetAssessmentsDocument = gql`
    query GetAssessments {
  assessments_assessments {
    id
    title
    description
    created_at
    account {
      Oid
      Student {
        StudentId
        FirstName
        LastName
      }
    }
    assessment_cohorts {
      id
      title
      description
    }
    assessment_metrics {
      metric_question {
        id
        title
        description
        metric_type {
          id
          description
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetAssessmentsQuery__
 *
 * To run a query within a React component, call `useGetAssessmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssessmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssessmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssessmentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAssessmentsQuery, GetAssessmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAssessmentsQuery, GetAssessmentsQueryVariables>(GetAssessmentsDocument, options);
      }
export function useGetAssessmentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAssessmentsQuery, GetAssessmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAssessmentsQuery, GetAssessmentsQueryVariables>(GetAssessmentsDocument, options);
        }
export type GetAssessmentsQueryHookResult = ReturnType<typeof useGetAssessmentsQuery>;
export type GetAssessmentsLazyQueryHookResult = ReturnType<typeof useGetAssessmentsLazyQuery>;
export type GetAssessmentsQueryResult = Apollo.QueryResult<GetAssessmentsQuery, GetAssessmentsQueryVariables>;
export const GetMemberDetailsByNameDocument = gql`
    query GetMemberDetailsByName($firstName: String!, $lastName: String!) @cached(ttl: 300) {
  AssociationMembers(
    limit: 10
    where: {FirstName: {_like: $firstName}, LastName: {_like: $lastName}}
  ) {
    FirstName
    LastName
    FullName
    Birthdate
    Club1Name
    Club2Name
    Division
    AssociationMemberId
    MemberType
    Expiration
    Foil
    Epee
    Saber
  }
}
    `;

/**
 * __useGetMemberDetailsByNameQuery__
 *
 * To run a query within a React component, call `useGetMemberDetailsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberDetailsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberDetailsByNameQuery({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useGetMemberDetailsByNameQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetMemberDetailsByNameQuery, GetMemberDetailsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMemberDetailsByNameQuery, GetMemberDetailsByNameQueryVariables>(GetMemberDetailsByNameDocument, options);
      }
export function useGetMemberDetailsByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMemberDetailsByNameQuery, GetMemberDetailsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMemberDetailsByNameQuery, GetMemberDetailsByNameQueryVariables>(GetMemberDetailsByNameDocument, options);
        }
export type GetMemberDetailsByNameQueryHookResult = ReturnType<typeof useGetMemberDetailsByNameQuery>;
export type GetMemberDetailsByNameLazyQueryHookResult = ReturnType<typeof useGetMemberDetailsByNameLazyQuery>;
export type GetMemberDetailsByNameQueryResult = Apollo.QueryResult<GetMemberDetailsByNameQuery, GetMemberDetailsByNameQueryVariables>;
export const GetMembersByIdDocument = gql`
    query GetMembersById($id: String!) @cached(ttl: 300) {
  AssociationMembers_by_pk(AssociationMemberId: $id) {
    FullName
    FirstName
    LastName
    FullName
    Birthdate
    Club1Name
    Club2Name
    Division
    AssociationMemberId
    MemberType
    Expiration
    Foil
    Epee
    Saber
    Students {
      Oid
      StudentId
    }
  }
}
    `;

/**
 * __useGetMembersByIdQuery__
 *
 * To run a query within a React component, call `useGetMembersByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMembersByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetMembersByIdQuery, GetMembersByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMembersByIdQuery, GetMembersByIdQueryVariables>(GetMembersByIdDocument, options);
      }
export function useGetMembersByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMembersByIdQuery, GetMembersByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMembersByIdQuery, GetMembersByIdQueryVariables>(GetMembersByIdDocument, options);
        }
export type GetMembersByIdQueryHookResult = ReturnType<typeof useGetMembersByIdQuery>;
export type GetMembersByIdLazyQueryHookResult = ReturnType<typeof useGetMembersByIdLazyQuery>;
export type GetMembersByIdQueryResult = Apollo.QueryResult<GetMembersByIdQuery, GetMembersByIdQueryVariables>;
export const SearchMembersDocument = gql`
    query SearchMembers($filter: String!, $offset: Int = 0, $count: Int = 12) @cached(ttl: 300) {
  AssociationMembers(
    offset: $offset
    limit: $count
    where: {_or: [{FullName: {_like: $filter}}, {Club1Name: {_like: $filter}}]}
    order_by: {FullName: asc}
  ) {
    FullName
    FirstName
    LastName
    FullName
    Birthdate
    Club1Name
    Club2Name
    Division
    AssociationMemberId
    MemberType
    Expiration
    Foil
    Epee
    Saber
    Students {
      StudentId
      Oid
    }
  }
}
    `;

/**
 * __useSearchMembersQuery__
 *
 * To run a query within a React component, call `useSearchMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMembersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      offset: // value for 'offset'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useSearchMembersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SearchMembersQuery, SearchMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SearchMembersQuery, SearchMembersQueryVariables>(SearchMembersDocument, options);
      }
export function useSearchMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchMembersQuery, SearchMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SearchMembersQuery, SearchMembersQueryVariables>(SearchMembersDocument, options);
        }
export type SearchMembersQueryHookResult = ReturnType<typeof useSearchMembersQuery>;
export type SearchMembersLazyQueryHookResult = ReturnType<typeof useSearchMembersLazyQuery>;
export type SearchMembersQueryResult = Apollo.QueryResult<SearchMembersQuery, SearchMembersQueryVariables>;
export const UpdateStudentByIdDocument = gql`
    mutation UpdateStudentById($id: String!, $changes: Accounts_set_input!) {
  update_Accounts_by_pk(pk_columns: {Oid: $id}, _set: $changes) {
    Oid
    PrimaryStudentId
    Student {
      StudentId
      FirstName
      LastName
      Email
      Phone
      Birthdate
      AssociationMemberId
    }
    Address {
      AddressId
      Address
      Address2
      City
      Postal
      State
    }
  }
}
    `;
export type UpdateStudentByIdMutationFn = Apollo.MutationFunction<UpdateStudentByIdMutation, UpdateStudentByIdMutationVariables>;

/**
 * __useUpdateStudentByIdMutation__
 *
 * To run a mutation, you first call `useUpdateStudentByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentByIdMutation, { data, loading, error }] = useUpdateStudentByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateStudentByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateStudentByIdMutation, UpdateStudentByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateStudentByIdMutation, UpdateStudentByIdMutationVariables>(UpdateStudentByIdDocument, options);
      }
export type UpdateStudentByIdMutationHookResult = ReturnType<typeof useUpdateStudentByIdMutation>;
export type UpdateStudentByIdMutationResult = Apollo.MutationResult<UpdateStudentByIdMutation>;
export type UpdateStudentByIdMutationOptions = Apollo.BaseMutationOptions<UpdateStudentByIdMutation, UpdateStudentByIdMutationVariables>;
export const UpdateFencerByIdDocument = gql`
    mutation UpdateFencerById($fencerId: uniqueidentifier!, $changes: Students_set_input!) {
  update_Students_by_pk(pk_columns: {StudentId: $fencerId}, _set: $changes) {
    FirstName
    LastName
    Birthdate
    Phone
    Email
    AvatarUrl
    AssociationMemberId
    StudentId
    Oid
  }
}
    `;
export type UpdateFencerByIdMutationFn = Apollo.MutationFunction<UpdateFencerByIdMutation, UpdateFencerByIdMutationVariables>;

/**
 * __useUpdateFencerByIdMutation__
 *
 * To run a mutation, you first call `useUpdateFencerByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFencerByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFencerByIdMutation, { data, loading, error }] = useUpdateFencerByIdMutation({
 *   variables: {
 *      fencerId: // value for 'fencerId'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateFencerByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFencerByIdMutation, UpdateFencerByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateFencerByIdMutation, UpdateFencerByIdMutationVariables>(UpdateFencerByIdDocument, options);
      }
export type UpdateFencerByIdMutationHookResult = ReturnType<typeof useUpdateFencerByIdMutation>;
export type UpdateFencerByIdMutationResult = Apollo.MutationResult<UpdateFencerByIdMutation>;
export type UpdateFencerByIdMutationOptions = Apollo.BaseMutationOptions<UpdateFencerByIdMutation, UpdateFencerByIdMutationVariables>;