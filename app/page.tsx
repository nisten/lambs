import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get rekt&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span>+</span>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Stuff <span>-&gt;</span>
          </h2>
          <p>Docs go here and stuff.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Autodeplyment etc.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero herehre.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>
            Fully-typed real-time API with NoSQL database.
          </p>
        </a>
      </div>
    </main>
  )
}
