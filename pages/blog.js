import Layout from "../components/BaseLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

const Index = (props) => (
  <Layout>
    <Head>
      <title>Ini halaman Blog</title>
    </Head>
    <h1>Daftar User</h1>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <Link as={`/single/${user.id}`} href={`/single?id=${user.id}`}>
            <a>{user.username}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("total data" + data.length);

  return { users: data };
};

export default Index;
