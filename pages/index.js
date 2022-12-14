import Head from "next/head";
import Layout from "components/Layout";
import Form from "components/Form";
import Quotes from "components/Quotes";
import { getQuotes } from "services/getQuotes";
import { useState } from "react";
import Loader from "components/Loader";

const Index = ({ data }) => {
  const [actualQuotes, setActualQuotes] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const searchCharacterQuotes = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const character = e.target.character.value.trim();
    const quantity = e.target.quantity.value.trim();
    const data = await getQuotes({ character, quantity });
    setActualQuotes(data);
    setIsLoading(false);
  };
  return (
    <Layout>
      <Head>
        <title>Simpson&#39;s quotes</title>
        <meta name="description" content="KickOff Globant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen space-y-10 p-4">
        <Form onSubmit={searchCharacterQuotes} />
        <div className="h-3/4 overflow-y-scroll">
          {!isLoading ? <Quotes data={actualQuotes} /> : <Loader />}
        </div>
      </main>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const data = await getQuotes({}, true);
  return {
    props: {
      data,
    },
  };
};
