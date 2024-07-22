import { getMeal }  from '@/lib/meals';
import styles       from '../styles/details.module.css';
import Image        from 'next/image';
import { notFound } from 'next/navigation';

interface Meal {
  title: string;
  image: string;
  creator: string;
  creator_email: string;
  summary: string;
  instructions: string;
}

const MealsDetailPage = ({ params }: { params: { slug: string } }) => {



  const meal = getMeal(params.slug) as Meal;

  if(!meal) {
      notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
};

export default MealsDetailPage;
