import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

/** order by max() on columns of table "AccountAppRoles" */
export type AccountAppRoles_Max_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "AccountAppRoles" */
export type AccountAppRoles_Min_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "AccountAppRoles". */
export type AccountAppRoles_Order_By = {
  Account?: InputMaybe<Accounts_Order_By>;
  AppRoleId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  Role?: InputMaybe<AppRoles_Order_By>;
};

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

/** order by max() on columns of table "AccountClubRoles" */
export type AccountClubRoles_Max_Order_By = {
  Oid?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "AccountClubRoles" */
export type AccountClubRoles_Min_Order_By = {
  Oid?: InputMaybe<Order_By>;
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
  /** An array relationship */
  ClubRoles: Array<AccountClubRoles>;
  CreatedAt?: Maybe<Scalars['datetime2']>;
  CreatedBy?: Maybe<Scalars['String']>;
  /** An array relationship */
  Dependents: Array<Students>;
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
export type AccountsClubRolesArgs = {
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

/** order by max() on columns of table "Accounts" */
export type Accounts_Max_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Accounts" */
export type Accounts_Min_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  LanguageId?: InputMaybe<Order_By>;
  Oid?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
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

/** columns and relationships of "Addresses" */
export type Addresses = {
  __typename?: 'Addresses';
  /** An array relationship */
  Accounts: Array<Accounts>;
  Address: Scalars['String'];
  Address2?: Maybe<Scalars['String']>;
  AddressId: Scalars['uniqueidentifier'];
  City: Scalars['String'];
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
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
export type AddressesClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
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

/** columns and relationships of "AppRoles" */
export type AppRoles = {
  __typename?: 'AppRoles';
  Name: Scalars['String'];
  /** An array relationship */
  Role: Array<AccountAppRoles>;
  RoleId: Scalars['uniqueidentifier'];
};


/** columns and relationships of "AppRoles" */
export type AppRolesRoleArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
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

/** Ordering options when selecting data from "AppRoles". */
export type AppRoles_Order_By = {
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Role_aggregate?: InputMaybe<AccountAppRoles_Aggregate_Order_By>;
};

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
  UpdatedAt: Scalars['datetime'];
};


/** columns and relationships of "AssociationMembers" */
export type AssociationMembersStudentsArgs = {
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
  UpdatedAt: Scalars['datetime'];
};


/** columns and relationships of "AssociationMembersLookup" */
export type AssociationMembersLookupStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
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

/** columns and relationships of "ClubRoles" */
export type ClubRoles = {
  __typename?: 'ClubRoles';
  Name: Scalars['String'];
  /** An array relationship */
  Role: Array<AccountClubRoles>;
  RoleId: Scalars['uniqueidentifier'];
};


/** columns and relationships of "ClubRoles" */
export type ClubRolesRoleArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
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

/** Ordering options when selecting data from "ClubRoles". */
export type ClubRoles_Order_By = {
  Name?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Role_aggregate?: InputMaybe<AccountClubRoles_Aggregate_Order_By>;
};

/** columns and relationships of "Clubs" */
export type Clubs = {
  __typename?: 'Clubs';
  ClubId: Scalars['uniqueidentifier'];
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** An array relationship */
  ClubRoles: Array<AccountClubRoles>;
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
export type ClubsClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
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
  /** fetch data from the table: "AccountClubRoles" */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An array relationship */
  Accounts: Array<Accounts>;
  /** fetch data from the table: "Addresses" */
  Addresses: Array<Addresses>;
  /** fetch data from the table: "AppRoles" */
  AppRoles: Array<AppRoles>;
  /** fetch data from the table: "AssociationMembers" */
  AssociationMembers: Array<AssociationMembers>;
  /** fetch data from the table: "AssociationMembersLookup" */
  AssociationMembersLookup: Array<AssociationMembersLookup>;
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** fetch data from the table: "ClubRoles" */
  ClubRoles: Array<ClubRoles>;
  /** fetch data from the table: "Clubs" */
  Clubs: Array<Clubs>;
  /** An array relationship */
  Students: Array<Students>;
};


export type Query_RootAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Query_RootAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Query_RootAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
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


export type Query_RootClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Query_RootClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Query_RootClubsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "AccountAppRoles" */
  AccountAppRoles: Array<AccountAppRoles>;
  /** fetch data from the table: "AccountClubRoles" */
  AccountClubRoles: Array<AccountClubRoles>;
  /** An array relationship */
  Accounts: Array<Accounts>;
  /** fetch data from the table: "Addresses" */
  Addresses: Array<Addresses>;
  /** fetch data from the table: "AppRoles" */
  AppRoles: Array<AppRoles>;
  /** fetch data from the table: "AssociationMembers" */
  AssociationMembers: Array<AssociationMembers>;
  /** fetch data from the table: "AssociationMembersLookup" */
  AssociationMembersLookup: Array<AssociationMembersLookup>;
  /** An array relationship */
  ClubLocations: Array<ClubLocations>;
  /** fetch data from the table: "ClubRoles" */
  ClubRoles: Array<ClubRoles>;
  /** fetch data from the table: "Clubs" */
  Clubs: Array<Clubs>;
  /** An array relationship */
  Students: Array<Students>;
};


export type Subscription_RootAccountAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountAppRoles_Order_By>>;
  where?: InputMaybe<AccountAppRoles_Bool_Exp>;
};


export type Subscription_RootAccountClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AccountClubRoles_Order_By>>;
  where?: InputMaybe<AccountClubRoles_Bool_Exp>;
};


export type Subscription_RootAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAppRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppRoles_Order_By>>;
  where?: InputMaybe<AppRoles_Bool_Exp>;
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


export type Subscription_RootClubLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubLocations_Order_By>>;
  where?: InputMaybe<ClubLocations_Bool_Exp>;
};


export type Subscription_RootClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ClubRoles_Order_By>>;
  where?: InputMaybe<ClubRoles_Bool_Exp>;
};


export type Subscription_RootClubsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootStudentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
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


export type AccountProfileQuery = { __typename?: 'query_root', Accounts: Array<{ __typename?: 'Accounts', Oid: string, PrimaryStudentId: any, AccountStudent: { __typename?: 'Students', FirstName: string, LastName: string, Email?: string | null | undefined, Phone?: string | null | undefined, Birthdate: any, AssociationMemberId?: string | null | undefined }, Address?: { __typename?: 'Addresses', Address: string, Address2?: string | null | undefined, City: string, Postal: string, State: string } | null | undefined, Dependents: Array<{ __typename?: 'Students', AssociationMemberId?: string | null | undefined, AvatarUrl?: string | null | undefined, Birthdate: any, Email?: string | null | undefined, FirstName: string, LastName: string, Phone?: string | null | undefined, StudentId: any }> }> };

export type MemberDetailsByNameQueryVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type MemberDetailsByNameQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null | undefined, Club2Name?: string | null | undefined, Division?: string | null | undefined, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };

export type MembersByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MembersByIdsQuery = { __typename?: 'query_root', AssociationMembers: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null | undefined, Club2Name?: string | null | undefined, Division?: string | null | undefined, Region?: string | null | undefined, Expiration: any, Gender?: string | null | undefined, MemberType: string, AssociationMemberId: string, Nickname?: string | null | undefined, Epee: string, Foil: string, Saber: string, Competitive: string, Club1Id?: string | null | undefined, Club2Id?: string | null | undefined }> };

export type MemberByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MemberByIdQuery = { __typename?: 'query_root', member: Array<{ __typename?: 'AssociationMembers', FirstName: string, LastName: string, AssociationMemberId: string, Club1Name?: string | null | undefined, Division?: string | null | undefined, Birthdate: number }> };

export type SearchMembersQueryVariables = Exact<{
  filter: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type SearchMembersQuery = { __typename?: 'query_root', AssociationMembersLookup: Array<{ __typename?: 'AssociationMembersLookup', FullName: string, FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null | undefined, Club2Name?: string | null | undefined, Division?: string | null | undefined, AssociationMemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };


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
    where: {FullName: {_like: $filter}}
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