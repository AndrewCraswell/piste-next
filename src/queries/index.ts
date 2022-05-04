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
  datetime: any;
  datetime2: any;
  uniqueidentifier: any;
};

/** columns and relationships of "AccountAppRoles" */
export type AccountAppRoles = {
  __typename?: 'AccountAppRoles';
  /** An object relationship */
  Account: Accounts;
  AppRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
  /** An object relationship */
  Role: AppRoles;
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
  AppRoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  Role?: InputMaybe<AppRoles_Bool_Exp>;
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
  AppRoleId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Role?: InputMaybe<AppRoles_Order_By>;
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
  ClubRoleId: Scalars['uniqueidentifier'];
  Oid: Scalars['String'];
  /** An object relationship */
  Role: ClubRoles;
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
  ClubRoleId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  Role?: InputMaybe<ClubRoles_Bool_Exp>;
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
  ClubRoleId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Role?: InputMaybe<ClubRoles_Order_By>;
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
  /** An object relationship */
  AccountStudent: Students;
  /** An object relationship */
  Address?: Maybe<Addresses>;
  AddressId: Scalars['uniqueidentifier'];
  /** An array relationship */
  AppRoles: Array<AccountAppRoles>;
  /** An aggregate relationship */
  AppRoles_aggregate: AccountAppRoles_Aggregate;
  /** An array relationship */
  ClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  ClubRoles_aggregate: AccountClubRoles_Aggregate;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  /** An array relationship */
  Dependents: Array<Students>;
  /** An aggregate relationship */
  Dependents_aggregate: Students_Aggregate;
  LanguageId: Scalars['String'];
  Oid: Scalars['String'];
  PrimaryStudentId: Scalars['uniqueidentifier'];
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};


/** columns and relationships of "Accounts" */
export type AccountsAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsAppRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsDependentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsDependents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
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
  AccountStudent?: InputMaybe<Students_Bool_Exp>;
  Address?: InputMaybe<Addresses_Bool_Exp>;
  AddressId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  AppRoles?: InputMaybe<AccountAppRoles_Bool_Exp>;
  ClubRoles?: InputMaybe<AccountClubRoles_Bool_Exp>;
  CreatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Mssql_Comparison_Exp>;
  Dependents?: InputMaybe<Students_Bool_Exp>;
  LanguageId?: InputMaybe<String_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  PrimaryStudentId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
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
  AccountStudent?: InputMaybe<Students_Order_By>;
  Address?: InputMaybe<Addresses_Order_By>;
  AddressId?: InputMaybe<Order_By>;
  AppRoles_aggregate?: InputMaybe<AccountAppRoles_Aggregate_Order_By>;
  ClubRoles_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Dependents_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  PrimaryStudentId?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
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
  Name: Scalars['String'];
  /** An array relationship */
  Role: Array<AccountAppRoles>;
  RoleId: Scalars['uniqueidentifier'];
  /** An aggregate relationship */
  Role_aggregate: AccountAppRoles_Aggregate;
};


/** columns and relationships of "AppRoles" */
export type AppRolesRoleArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


/** columns and relationships of "AppRoles" */
export type AppRolesRole_AggregateArgs = {
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
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Role?: InputMaybe<AccountAppRoles_Bool_Exp>;
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
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Role_aggregate?: InputMaybe<AccountAppRoles_Aggregate_Order_By>;
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
  Gender?: Maybe<Scalars['String']>;
  LastModified: Scalars['datetime'];
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
  UpdatedAt: Scalars['datetime'];
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

/** columns and relationships of "AssociationMembersLookup" */
export type AssociationMembersLookup = {
  __typename?: 'AssociationMembersLookup';
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
  LastModified: Scalars['datetime'];
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
  UpdatedAt: Scalars['datetime'];
};


/** columns and relationships of "AssociationMembersLookup" */
export type AssociationMembersLookupStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "AssociationMembersLookup" */
export type AssociationMembersLookupStudents_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "AssociationMembersLookup" */
export type AssociationMembersLookup_Aggregate = {
  __typename?: 'AssociationMembersLookup_aggregate';
  aggregate?: Maybe<AssociationMembersLookup_Aggregate_Fields>;
  nodes: Array<AssociationMembersLookup>;
};

/** aggregate fields of "AssociationMembersLookup" */
export type AssociationMembersLookup_Aggregate_Fields = {
  __typename?: 'AssociationMembersLookup_aggregate_fields';
  avg?: Maybe<AssociationMembersLookup_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AssociationMembersLookup_Max_Fields>;
  min?: Maybe<AssociationMembersLookup_Min_Fields>;
  stddev?: Maybe<AssociationMembersLookup_Stddev_Fields>;
  stddev_pop?: Maybe<AssociationMembersLookup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AssociationMembersLookup_Stddev_Samp_Fields>;
  sum?: Maybe<AssociationMembersLookup_Sum_Fields>;
  var_pop?: Maybe<AssociationMembersLookup_Var_Pop_Fields>;
  var_samp?: Maybe<AssociationMembersLookup_Var_Samp_Fields>;
  variance?: Maybe<AssociationMembersLookup_Variance_Fields>;
};


/** aggregate fields of "AssociationMembersLookup" */
export type AssociationMembersLookup_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<AssociationMembersLookup_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type AssociationMembersLookup_Avg_Fields = {
  __typename?: 'AssociationMembersLookup_avg_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "AssociationMembersLookup". All fields are combined with a logical 'AND'. */
export type AssociationMembersLookup_Bool_Exp = {
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
  LastModified?: InputMaybe<Datetime_Mssql_Comparison_Exp>;
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  MemberType?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  Region?: InputMaybe<String_Mssql_Comparison_Exp>;
  Saber?: InputMaybe<String_Mssql_Comparison_Exp>;
  SafeSportExpires?: InputMaybe<Date_Mssql_Comparison_Exp>;
  Students?: InputMaybe<Students_Bool_Exp>;
  UpdatedAt?: InputMaybe<Datetime_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<AssociationMembersLookup_Bool_Exp>>;
  _not?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
  _or?: InputMaybe<Array<AssociationMembersLookup_Bool_Exp>>;
};

/** upsert condition type for table "AssociationMembersLookup" */
export type AssociationMembersLookup_If_Matched = {
  match_columns?: Array<AssociationMembersLookup_Insert_Match_Column>;
  update_columns?: Array<AssociationMembersLookup_Update_Column>;
  where?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "AssociationMembersLookup" */
export type AssociationMembersLookup_Inc_Input = {
  Birthdate?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "AssociationMembersLookup" */
export type AssociationMembersLookup_Insert_Input = {
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
  LastModified?: InputMaybe<Scalars['datetime']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime']>;
};

/** select match_columns of table "AssociationMembersLookup" */
export enum AssociationMembersLookup_Insert_Match_Column {
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
export type AssociationMembersLookup_Max_Fields = {
  __typename?: 'AssociationMembersLookup_max_fields';
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
  LastModified?: Maybe<Scalars['datetime']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime']>;
};

/** aggregate min on columns */
export type AssociationMembersLookup_Min_Fields = {
  __typename?: 'AssociationMembersLookup_min_fields';
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
  LastModified?: Maybe<Scalars['datetime']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime']>;
};

/** response of any mutation on the table "AssociationMembersLookup" */
export type AssociationMembersLookup_Mutation_Response = {
  __typename?: 'AssociationMembersLookup_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AssociationMembersLookup>;
};

/** Ordering options when selecting data from "AssociationMembersLookup". */
export type AssociationMembersLookup_Order_By = {
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

/** select columns of table "AssociationMembersLookup" */
export enum AssociationMembersLookup_Select_Column {
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

/** input type for updating data in table "AssociationMembersLookup" */
export type AssociationMembersLookup_Set_Input = {
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
  LastModified?: InputMaybe<Scalars['datetime']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime']>;
};

/** aggregate stddev on columns */
export type AssociationMembersLookup_Stddev_Fields = {
  __typename?: 'AssociationMembersLookup_stddev_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AssociationMembersLookup_Stddev_Pop_Fields = {
  __typename?: 'AssociationMembersLookup_stddev_pop_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AssociationMembersLookup_Stddev_Samp_Fields = {
  __typename?: 'AssociationMembersLookup_stddev_samp_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type AssociationMembersLookup_Sum_Fields = {
  __typename?: 'AssociationMembersLookup_sum_fields';
  Birthdate?: Maybe<Scalars['Int']>;
};

/** update columns of table "AssociationMembersLookup" */
export enum AssociationMembersLookup_Update_Column {
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
export type AssociationMembersLookup_Var_Pop_Fields = {
  __typename?: 'AssociationMembersLookup_var_pop_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AssociationMembersLookup_Var_Samp_Fields = {
  __typename?: 'AssociationMembersLookup_var_samp_fields';
  Birthdate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AssociationMembersLookup_Variance_Fields = {
  __typename?: 'AssociationMembersLookup_variance_fields';
  Birthdate?: Maybe<Scalars['Float']>;
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
  Gender?: InputMaybe<String_Mssql_Comparison_Exp>;
  LastModified?: InputMaybe<Datetime_Mssql_Comparison_Exp>;
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  MemberType?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  Region?: InputMaybe<String_Mssql_Comparison_Exp>;
  Saber?: InputMaybe<String_Mssql_Comparison_Exp>;
  SafeSportExpires?: InputMaybe<Date_Mssql_Comparison_Exp>;
  Students?: InputMaybe<Students_Bool_Exp>;
  UpdatedAt?: InputMaybe<Datetime_Mssql_Comparison_Exp>;
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
  Gender?: InputMaybe<Scalars['String']>;
  LastModified?: InputMaybe<Scalars['datetime']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime']>;
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
  Gender?: Maybe<Scalars['String']>;
  LastModified?: Maybe<Scalars['datetime']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime']>;
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
  Gender?: Maybe<Scalars['String']>;
  LastModified?: Maybe<Scalars['datetime']>;
  LastName?: Maybe<Scalars['String']>;
  MemberType?: Maybe<Scalars['String']>;
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['String']>;
  Saber?: Maybe<Scalars['String']>;
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt?: Maybe<Scalars['datetime']>;
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
  Gender?: InputMaybe<Scalars['String']>;
  LastModified?: InputMaybe<Scalars['datetime']>;
  LastName?: InputMaybe<Scalars['String']>;
  MemberType?: InputMaybe<Scalars['String']>;
  Nickname?: InputMaybe<Scalars['String']>;
  Region?: InputMaybe<Scalars['String']>;
  Saber?: InputMaybe<Scalars['String']>;
  SafeSportExpires?: InputMaybe<Scalars['date']>;
  UpdatedAt?: InputMaybe<Scalars['datetime']>;
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
  Name: Scalars['String'];
  /** An array relationship */
  Role: Array<AccountClubRoles>;
  RoleId: Scalars['uniqueidentifier'];
  /** An aggregate relationship */
  Role_aggregate: AccountClubRoles_Aggregate;
};


/** columns and relationships of "ClubRoles" */
export type ClubRolesRoleArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "ClubRoles" */
export type ClubRolesRole_AggregateArgs = {
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
  Name?: InputMaybe<String_Mssql_Comparison_Exp>;
  Role?: InputMaybe<AccountClubRoles_Bool_Exp>;
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
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Role_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
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
  ClubId: Scalars['uniqueidentifier'];
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An aggregate relationship */
  ClubLocations_aggregate: ClubLocations_Aggregate;
  /** An array relationship */
  ClubRoles: Array<AccountClubRoles>;
  /** An aggregate relationship */
  ClubRoles_aggregate: AccountClubRoles_Aggregate;
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
export type ClubsClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


/** columns and relationships of "Clubs" */
export type ClubsClubRoles_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
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
  ClubId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  ClubLocations?: InputMaybe<ClubLocations_Bool_Exp>;
  ClubRoles?: InputMaybe<AccountClubRoles_Bool_Exp>;
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
  ClubId?: InputMaybe<Order_By>;
  ClubLocations_aggregate?: InputMaybe<ClubLocations_Aggregate_Order_By>;
  ClubRoles_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
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
  Account: Accounts;
  /** An object relationship */
  AssociationMember?: Maybe<AssociationMembers>;
  AssociationMemberId?: Maybe<Scalars['String']>;
  AvatarUrl?: Maybe<Scalars['String']>;
  Birthdate: Scalars['date'];
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  FirstName: Scalars['String'];
  LastName: Scalars['String'];
  Oid: Scalars['String'];
  /** An array relationship */
  OwnerAccount: Array<Accounts>;
  /** An aggregate relationship */
  OwnerAccount_aggregate: Accounts_Aggregate;
  Phone?: Maybe<Scalars['String']>;
  StudentId: Scalars['uniqueidentifier'];
  UpdatedAt?: Maybe<Scalars['datetime2']>;
};


/** columns and relationships of "Students" */
export type StudentsOwnerAccountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "Students" */
export type StudentsOwnerAccount_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
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
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  OwnerAccount?: InputMaybe<Accounts_Bool_Exp>;
  Phone?: InputMaybe<String_Mssql_Comparison_Exp>;
  StudentId?: InputMaybe<Uniqueidentifier_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime2_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
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
  LastName?: InputMaybe<Scalars['String']>;
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
  LastName = 'LastName',
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
  LastName?: Maybe<Scalars['String']>;
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
  LastName?: InputMaybe<Order_By>;
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
  LastName?: Maybe<Scalars['String']>;
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
  LastName?: InputMaybe<Order_By>;
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
  LastName?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  OwnerAccount_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  Phone?: InputMaybe<Order_By>;
  StudentId?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
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
  LastName = 'LastName',
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
  LastName?: InputMaybe<Scalars['String']>;
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
  LastName = 'LastName',
  /** column name */
  Oid = 'Oid',
  /** column name */
  Phone = 'Phone',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'UpdatedAt'
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

/** Boolean expression to compare columns of type "datetime". All fields are combined with logical 'AND'. */
export type Datetime_Mssql_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['datetime']>;
  _gt?: InputMaybe<Scalars['datetime']>;
  _gte?: InputMaybe<Scalars['datetime']>;
  _in?: InputMaybe<Array<Scalars['datetime']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['datetime']>;
  _lte?: InputMaybe<Scalars['datetime']>;
  _neq?: InputMaybe<Scalars['datetime']>;
  _nin?: InputMaybe<Array<Scalars['datetime']>>;
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
  /** delete data from the table: "AssociationMembersLookup" */
  delete_AssociationMembersLookup?: Maybe<AssociationMembersLookup_Mutation_Response>;
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
  /** insert data into the table: "AssociationMembersLookup" */
  insert_AssociationMembersLookup?: Maybe<AssociationMembersLookup_Mutation_Response>;
  /** insert a single row into the table: "AssociationMembersLookup" */
  insert_AssociationMembersLookup_one?: Maybe<AssociationMembersLookup>;
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
  /** update data of the table: "AssociationMembersLookup" */
  update_AssociationMembersLookup?: Maybe<AssociationMembersLookup_Mutation_Response>;
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
export type Mutation_RootDelete_AssociationMembersLookupArgs = {
  where: AssociationMembersLookup_Bool_Exp;
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
export type Mutation_RootInsert_AssociationMembersLookupArgs = {
  if_matched?: InputMaybe<AssociationMembersLookup_If_Matched>;
  objects: Array<AssociationMembersLookup_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_AssociationMembersLookup_OneArgs = {
  if_matched?: InputMaybe<AssociationMembersLookup_If_Matched>;
  object: AssociationMembersLookup_Insert_Input;
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
export type Mutation_RootUpdate_AssociationMembersLookupArgs = {
  _inc?: InputMaybe<AssociationMembersLookup_Inc_Input>;
  _set?: InputMaybe<AssociationMembersLookup_Set_Input>;
  where: AssociationMembersLookup_Bool_Exp;
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
  /** fetch data from the table: "AccountAppRoles" */
  AccountAppRoles: Array<AccountAppRoles>;
  /** fetch aggregated fields from the table: "AccountAppRoles" */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  /** fetch data from the table: "AccountAppRoles" using primary key columns */
  AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** fetch data from the table: "AccountClubRoles" */
  AccountClubRoles: Array<AccountClubRoles>;
  /** fetch aggregated fields from the table: "AccountClubRoles" */
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
  /** fetch data from the table: "AssociationMembersLookup" */
  AssociationMembersLookup: Array<AssociationMembersLookup>;
  /** fetch aggregated fields from the table: "AssociationMembersLookup" */
  AssociationMembersLookup_aggregate: AssociationMembersLookup_Aggregate;
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


export type Query_RootAssociationMembersLookupArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembersLookup_Order_By>>;
  where?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
};


export type Query_RootAssociationMembersLookup_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembersLookup_Order_By>>;
  where?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "AccountAppRoles" */
  AccountAppRoles: Array<AccountAppRoles>;
  /** fetch aggregated fields from the table: "AccountAppRoles" */
  AccountAppRoles_aggregate: AccountAppRoles_Aggregate;
  /** fetch data from the table: "AccountAppRoles" using primary key columns */
  AccountAppRoles_by_pk?: Maybe<AccountAppRoles>;
  /** fetch data from the table: "AccountClubRoles" */
  AccountClubRoles: Array<AccountClubRoles>;
  /** fetch aggregated fields from the table: "AccountClubRoles" */
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
  /** fetch data from the table: "AssociationMembersLookup" */
  AssociationMembersLookup: Array<AssociationMembersLookup>;
  /** fetch aggregated fields from the table: "AssociationMembersLookup" */
  AssociationMembersLookup_aggregate: AssociationMembersLookup_Aggregate;
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


export type Subscription_RootAssociationMembersLookupArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembersLookup_Order_By>>;
  where?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
};


export type Subscription_RootAssociationMembersLookup_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AssociationMembersLookup_Order_By>>;
  where?: InputMaybe<AssociationMembersLookup_Bool_Exp>;
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


export type AccountProfileQuery = { __typename?: 'query_root', Accounts: Array<{ __typename?: 'Accounts', Oid: string, PrimaryStudentId: any, AccountStudent: { __typename?: 'Students', FirstName: string, LastName: string, Email?: string | null, Phone?: string | null, Birthdate: any, AssociationMemberId?: string | null }, Address?: { __typename?: 'Addresses', Address: string, Address2?: string | null, City: string, Postal: string, State: string } | null, Dependents: Array<{ __typename?: 'Students', AssociationMemberId?: string | null, AvatarUrl?: string | null, Birthdate: any, Email?: string | null, FirstName: string, LastName: string, Phone?: string | null, StudentId: any }> }> };

export type MemberDetailsByNameQueryVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type MemberDetailsByNameQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };

export type MembersByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MembersByIdsQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, Region?: string | null, Expiration: any, Gender?: string | null, MemberType: string, AssociationMemberId: string, Nickname?: string | null, Epee: string, Foil: string, Saber: string, Competitive: string, Club1Id?: string | null, Club2Id?: string | null }> };

export type AddFencerToAccountMutationVariables = Exact<{
  fencer: Students_Insert_Input;
}>;


export type AddFencerToAccountMutation = { __typename?: 'mutation_root', insert_Students_one?: { __typename?: 'Students', StudentId: any, FirstName: string, LastName: string, Birthdate: any, Phone?: string | null, Email?: string | null } | null };

export type MemberByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MemberByIdQuery = { __typename?: 'query_root', member: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, AssociationMemberId: string, Club1Name?: string | null, Division?: string | null, Birthdate: number }> };

export type SearchMembersQueryVariables = Exact<{
  filter: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type SearchMembersQuery = { __typename?: 'query_root', AssociationMembersLookup: Array<{ __typename?: 'AssociationMembersLookup', FullName: string, FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null, Club2Name?: string | null, Division?: string | null, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };


export const AccountProfileDocument = gql`
    query AccountProfile($oid: String!) {
  Accounts(where: {Oid: {_eq: $oid}}) {
    Oid
    PrimaryStudentId
    AccountStudent {
      FirstName
      LastName
      Email
      Phone
      Birthdate
      AssociationMemberId
    }
    Address {
      Address
      Address2
      City
      Postal
      State
    }
    Dependents {
      AssociationMemberId
      AvatarUrl
      Birthdate
      Email
      FirstName
      LastName
      Phone
      StudentId
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
export const MemberDetailsByNameDocument = gql`
    query MemberDetailsByName($firstName: String!, $lastName: String!) {
  AssociationMembers(
    limit: 10
    where: {FirstName: {_like: $firstName}, LastName: {_like: $lastName}}
  ) {
    FirstName
    LastName
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
 * __useMemberDetailsByNameQuery__
 *
 * To run a query within a React component, call `useMemberDetailsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberDetailsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberDetailsByNameQuery({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useMemberDetailsByNameQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MemberDetailsByNameQuery, MemberDetailsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MemberDetailsByNameQuery, MemberDetailsByNameQueryVariables>(MemberDetailsByNameDocument, options);
      }
export function useMemberDetailsByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MemberDetailsByNameQuery, MemberDetailsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MemberDetailsByNameQuery, MemberDetailsByNameQueryVariables>(MemberDetailsByNameDocument, options);
        }
export type MemberDetailsByNameQueryHookResult = ReturnType<typeof useMemberDetailsByNameQuery>;
export type MemberDetailsByNameLazyQueryHookResult = ReturnType<typeof useMemberDetailsByNameLazyQuery>;
export type MemberDetailsByNameQueryResult = Apollo.QueryResult<MemberDetailsByNameQuery, MemberDetailsByNameQueryVariables>;
export const MembersByIdsDocument = gql`
    query MembersByIds($ids: [String!]) {
  AssociationMembers(where: {AssociationMemberId: {_in: $ids}}) {
    FirstName
    LastName
    Birthdate
    Club1Name
    Club2Name
    Division
    Region
    Expiration
    Gender
    MemberType
    AssociationMemberId
    Nickname
    Epee
    Foil
    Saber
    Competitive
    Club1Id
    Club2Id
  }
}
    `;

/**
 * __useMembersByIdsQuery__
 *
 * To run a query within a React component, call `useMembersByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useMembersByIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MembersByIdsQuery, MembersByIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MembersByIdsQuery, MembersByIdsQueryVariables>(MembersByIdsDocument, options);
      }
export function useMembersByIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MembersByIdsQuery, MembersByIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MembersByIdsQuery, MembersByIdsQueryVariables>(MembersByIdsDocument, options);
        }
export type MembersByIdsQueryHookResult = ReturnType<typeof useMembersByIdsQuery>;
export type MembersByIdsLazyQueryHookResult = ReturnType<typeof useMembersByIdsLazyQuery>;
export type MembersByIdsQueryResult = Apollo.QueryResult<MembersByIdsQuery, MembersByIdsQueryVariables>;
export const AddFencerToAccountDocument = gql`
    mutation AddFencerToAccount($fencer: Students_insert_input!) {
  insert_Students_one(object: $fencer) {
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
export const MemberByIdDocument = gql`
    query MemberById($id: String!) {
  member: AssociationMembers(where: {AssociationMemberId: {_eq: $id}}) {
    FirstName
    LastName
    AssociationMemberId
    Club1Name
    Division
    Birthdate
  }
}
    `;

/**
 * __useMemberByIdQuery__
 *
 * To run a query within a React component, call `useMemberByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMemberByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MemberByIdQuery, MemberByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MemberByIdQuery, MemberByIdQueryVariables>(MemberByIdDocument, options);
      }
export function useMemberByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MemberByIdQuery, MemberByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MemberByIdQuery, MemberByIdQueryVariables>(MemberByIdDocument, options);
        }
export type MemberByIdQueryHookResult = ReturnType<typeof useMemberByIdQuery>;
export type MemberByIdLazyQueryHookResult = ReturnType<typeof useMemberByIdLazyQuery>;
export type MemberByIdQueryResult = Apollo.QueryResult<MemberByIdQuery, MemberByIdQueryVariables>;
export const SearchMembersDocument = gql`
    query SearchMembers($filter: String!, $offset: Int = 0, $count: Int = 12) {
  AssociationMembersLookup(
    offset: $offset
    limit: $count
    where: {_or: [{FullName: {_like: $filter}}, {Club1Name: {_like: $filter}}]}
    order_by: {FullName: asc}
  ) {
    FullName
    FirstName
    LastName
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