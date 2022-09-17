import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, desc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | find the hottest parties",
  desc: "Find the latest DJ and other musical events",
  keywords: "music, edm, dj, events",
};
