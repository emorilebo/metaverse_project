import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the metaverse</h1>
      <Login />
    </div>
  );
}
