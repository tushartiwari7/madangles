import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import categories from '../data/types.json';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {categories.title}
           <a>{categories.highlighted}</a>
        </h1>

        <div className={styles.grid}>
          {categories.types.map((category) => {
            return (
              <Link href={`/category/${category.link}`} key={category.id}>
                <a className={styles.card}>
                  <h2>{category.title} &rarr; </h2>
                  <p>{category.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>

    </>
  )
}
