import { useApolloClient, useLazyQuery } from "@apollo/client";
import type { NextPage } from "next";

import { initializeApollo } from "../lib/apollo";
import GET_MEMBERS_SEARCH from "../lib/queries/getMembersSearch";
import GET_MEMBER_BY_ID from "../lib/queries/getMemberById";
import {
  PrimaryButton,
  Stack,
  NormalPeoplePicker,
  PersonaSize,
  CompoundButton,
  Dialog,
} from "@fluentui/react";
import React, { useRef } from "react";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  const client = useApolloClient();
  const [] = useLazyQuery(GET_MEMBER_BY_ID, {});

  const picker = useRef();

  return (
    <>
      <Card>
        <Stack tokens={{ childrenGap: 8, padding: 12 }}>
          <Stack horizontal tokens={{ childrenGap: 4 }}>
            <NormalPeoplePicker
              onResolveSuggestions={async (filter) => {
                const { data } = await client.query({
                  query: GET_MEMBERS_SEARCH,
                  variables: { input: `${filter}%` },
                });

                const suggestions =
                  data.members.map((m) => ({
                    text: m.FullName,
                    size: PersonaSize.size24,
                    memberId: m.Member.MemberId,
                    secondaryText:
                      m.Member.Club1Name ||
                      m.Member.Club2Name ||
                      m.Member.Division,
                  })) || [];

                return suggestions;
              }}
              resolveDelay={1}
              onItemSelected={(item) => {
                console.log([...picker.current.items, item]);
                return item;
              }}
              componentRef={picker}
            />

            <PrimaryButton>Link</PrimaryButton>
          </Stack>
        </Stack>
      </Card>

      {/* {result && result.member && result.member.length > 0 && (
        <div style={{ padding: "24px 0" }}>
          {JSON.stringify(result.member[0])}
        </div>
      )} */}

      <Dialog
        hidden={true}
        modalProps={{}}
        dialogContentProps={{
          showCloseButton: true,
          title: "Register for Piste",
          subText: "How would you like to onboard to the platform?",
        }}
      >
        <Stack tokens={{ childrenGap: 4 }}>
          <CompoundButton
            primary
            secondaryText="I'm a student wanting to join a club"
          >
            Student
          </CompoundButton>
          <CompoundButton secondaryText="I'm a parent who will register my children">
            Parent
          </CompoundButton>
          <CompoundButton secondaryText="I'm a coach registering my club">
            Coach
          </CompoundButton>
        </Stack>
      </Dialog>
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_MEMBERS_SEARCH,
    variables: { input: "%" },
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};

export default Home;
