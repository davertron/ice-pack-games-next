import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ice Pack Games</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ice Pack Games</h1>
        <iframe
          className={styles.observableEmbed}
          width="100%"
          height="166"
          frameBorder="0"
          src="https://observablehq.com/embed/813b6aed1deb9508?cells=viewof+schedule"
        ></iframe>
      </main>
    </div>
  );
}
