'use server';

import { redirect }     from 'next/navigation'
import { saveMeal }     from "./meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  try {
    await saveMeal(meal);
    return { success: true, message: 'Meal added successfully!' };
  } catch (error) {
    return { success: false, message: 'Failed to add meal.' };
  }
}