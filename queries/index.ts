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

/** columns and relationships of "Members" */
export type Members = {
  __typename?: 'Members';
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
  MemberId: Scalars['String'];
  MemberType: Scalars['String'];
  Nickname?: Maybe<Scalars['String']>;
  Region?: Maybe<Scalars['Int']>;
  Saber: Scalars['String'];
  SafeSportExpires?: Maybe<Scalars['date']>;
  UpdatedAt: Scalars['datetime'];
};

/** columns and relationships of "MembersLookup" */
export type MembersLookup = {
  __typename?: 'MembersLookup';
  FirstName: Scalars['String'];
  FullName: Scalars['String'];
  LastName: Scalars['String'];
  /** An object relationship */
  Member?: Maybe<Members>;
  MemberId: Scalars['String'];
  Nickname?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "MembersLookup". All fields are combined with a logical 'AND'. */
export type MembersLookup_Bool_Exp = {
  FirstName?: InputMaybe<String_Mssql_Comparison_Exp>;
  FullName?: InputMaybe<String_Mssql_Comparison_Exp>;
  LastName?: InputMaybe<String_Mssql_Comparison_Exp>;
  Member?: InputMaybe<Members_Bool_Exp>;
  MemberId?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<MembersLookup_Bool_Exp>>;
  _not?: InputMaybe<MembersLookup_Bool_Exp>;
  _or?: InputMaybe<Array<MembersLookup_Bool_Exp>>;
};

/** Ordering options when selecting data from "MembersLookup". */
export type MembersLookup_Order_By = {
  FirstName?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Member?: InputMaybe<Members_Order_By>;
  MemberId?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Members". All fields are combined with a logical 'AND'. */
export type Members_Bool_Exp = {
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
  MemberId?: InputMaybe<String_Mssql_Comparison_Exp>;
  MemberType?: InputMaybe<String_Mssql_Comparison_Exp>;
  Nickname?: InputMaybe<String_Mssql_Comparison_Exp>;
  Region?: InputMaybe<Int_Mssql_Comparison_Exp>;
  Saber?: InputMaybe<String_Mssql_Comparison_Exp>;
  SafeSportExpires?: InputMaybe<Date_Mssql_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Datetime_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Members_Bool_Exp>>;
  _not?: InputMaybe<Members_Bool_Exp>;
  _or?: InputMaybe<Array<Members_Bool_Exp>>;
};

/** Ordering options when selecting data from "Members". */
export type Members_Order_By = {
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
  MemberId?: InputMaybe<Order_By>;
  MemberType?: InputMaybe<Order_By>;
  Nickname?: InputMaybe<Order_By>;
  Region?: InputMaybe<Order_By>;
  Saber?: InputMaybe<Order_By>;
  SafeSportExpires?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
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

/** columns and relationships of "Users" */
export type Users = {
  __typename?: 'Users';
  Oid: Scalars['String'];
};

/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  Oid?: InputMaybe<String_Mssql_Comparison_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
};

/** Ordering options when selecting data from "Users". */
export type Users_Order_By = {
  Oid?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "Members" */
  Members: Array<Members>;
  /** fetch data from the table: "MembersLookup" */
  MembersLookup: Array<MembersLookup>;
  /** fetch data from the table: "Users" */
  Users: Array<Users>;
};


export type Query_RootMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Query_RootMembersLookupArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MembersLookup_Order_By>>;
  where?: InputMaybe<MembersLookup_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Members" */
  Members: Array<Members>;
  /** fetch data from the table: "MembersLookup" */
  MembersLookup: Array<MembersLookup>;
  /** fetch data from the table: "Users" */
  Users: Array<Users>;
};


export type Subscription_RootMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Subscription_RootMembersLookupArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MembersLookup_Order_By>>;
  where?: InputMaybe<MembersLookup_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type MemberByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MemberByIdQuery = { __typename?: 'query_root', member: Array<{ __typename?: 'Members', FirstName: string, LastName: string, MemberId: string, Club1Name?: string | null | undefined, Division?: string | null | undefined, Birthdate: number }> };

export type MemberDetailsByNameQueryVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type MemberDetailsByNameQuery = { __typename?: 'query_root', Members: Array<{ __typename?: 'Members', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null | undefined, Club2Name?: string | null | undefined, Division?: string | null | undefined, MemberId: string, MemberType: string, Expiration: any, Foil: string, Epee: string, Saber: string }> };

export type MembersByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MembersByIdsQuery = { __typename?: 'query_root', Members: Array<{ __typename?: 'Members', FirstName: string, LastName: string, Birthdate: number, Club1Name?: string | null | undefined, Club2Name?: string | null | undefined, Division?: string | null | undefined, Region?: number | null | undefined, Expiration: any, Gender?: string | null | undefined, MemberType: string, MemberId: string, Nickname?: string | null | undefined, Epee: string, Foil: string, Saber: string, Competitive: string, Club1Id?: string | null | undefined, Club2Id?: string | null | undefined }> };

export type SearchMembersQueryVariables = Exact<{
  filter: Scalars['String'];
}>;


export type SearchMembersQuery = { __typename?: 'query_root', MembersLookup: Array<{ __typename?: 'MembersLookup', FullName: string, MemberId: string, Member?: { __typename?: 'Members', Club1Name?: string | null | undefined, Club2Name?: string | null | undefined } | null | undefined }> };

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'query_root', Users: Array<{ __typename?: 'Users', Oid: string }> };


export const MemberByIdDocument = gql`
    query MemberById($id: String!) {
  member: Members(where: {MemberId: {_eq: $id}}) {
    FirstName
    LastName
    MemberId
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
export const MemberDetailsByNameDocument = gql`
    query MemberDetailsByName($firstName: String!, $lastName: String!) {
  Members(
    limit: 10
    where: {FirstName: {_eq: $firstName}, LastName: {_eq: $lastName}}
  ) {
    FirstName
    LastName
    Birthdate
    Club1Name
    Club2Name
    Division
    MemberId
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
  Members(where: {MemberId: {_in: $ids}}) {
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
    MemberId
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
export const SearchMembersDocument = gql`
    query SearchMembers($filter: String!) {
  MembersLookup(
    limit: 25
    where: {FullName: {_like: $filter}}
    order_by: {FullName: asc}
  ) {
    FullName
    MemberId
    Member {
      Club1Name
      Club2Name
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
export const UserByIdDocument = gql`
    query UserById($id: String!) {
  Users(where: {Oid: {_eq: $id}}) {
    Oid
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
      }
export function useUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;