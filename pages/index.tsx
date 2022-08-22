import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open-Web</title>
        <meta name="description" content="Open-Web" />
      </Head>
      <main>
        <Link href={'/login'}>
          <button>로그인 페이지</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
