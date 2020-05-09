import Navigation from "../components/Navigation";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>Default title</title>
      <meta name="viewport" content="width=device-width, initial0-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Navigation />
    {props.children}

    <p>Footer: copyright 2020</p>
  </div>
);

export default Layout;
