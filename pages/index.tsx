import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Open-Web</title>
                <meta name="description" content="Open-Web"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Open-Web!
                </h1>

                <h2 className={styles.card}>
                    This is Open-Web Project.
                </h2>

            </main>

            <footer className={styles.footer}>
                Powered by Neuru
            </footer>
        </div>
    )
}

export default Home
