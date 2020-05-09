import Link from "next/link";

const Navigation = () => (
  <nav>
    <Link href="/">
      <a>Ke Home</a>
    </Link>
    <Link href="/blog">
      <a>Ke Blog</a>
    </Link>

    <style jsx global>{`
      body {
        font-family: sans-serif;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Navigation;
