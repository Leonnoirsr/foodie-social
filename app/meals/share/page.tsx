'use client'


import { useRouter }      from 'next/navigation';
import { shareMeal }      from '@/lib/actions';
import { toast }          from 'react-hot-toast';
import ImagePicker        from '@/components/meals/ImagePicker';
import styles             from './styles/page.module.css';
import React              from 'react';
import MealsFormSubmit    from '@/components/meals/MealsFormSubmit';


const ShareMealPage: React.FC = () => {

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await shareMeal(formData);

    if (response.success) {
      toast.success(response.message);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } else {
      toast.error(response.message);
    }
  };

 

  return (
    <>

      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label='Your Image' name='image' />
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>

    </>
  );
};

export default ShareMealPage;