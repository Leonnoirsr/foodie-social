'use client'

import { useFormStatus } from "react-dom"

interface Props{}

function MealsFormSubmit({}: Props) {
  
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            { pending ? ' Submitting...' : 'Share Meal' }
        </button>
    )
}

export default MealsFormSubmit