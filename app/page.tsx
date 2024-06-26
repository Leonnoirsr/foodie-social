import Link           from "next/link";
import styles         from './page.module.css'
import ImageSlideshow from "@/components/images/ImageSlideshow";


export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}></div>
      <ImageSlideshow />
      <div>
        <div className={styles.hero}>
          <h1>Foodie Social</h1>
          <h2>A Social Platform For Foodies</h2>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
      <section className={styles.section}>
        <h2>How it works</h2>
        <p>
          Foodie Social is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p>
          Foodie Social is a place to discover new dishes, and to connect
          with other food lovers.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Why Foodie Social?</h2>
        <p>
          Foodie Social is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p>
          Foodie Social is a place to discover new dishes, and to connect
          with other food lovers.
        </p>
      </section>
    </main>
  </>

  );
}
