import { FC }   from "react";
import styles   from './styles/meals-grid.module.css'
import MealItem from "./MealItem";


interface MealsGridProps {

    meals: any[]

}

const MealsGrid: FC<MealsGridProps> = (props) => {

    return (

        <ul className={styles.meals}>
            {props.meals.map(meal => <li key={meal.id}>
            
            <MealItem {...meal} />

            </li>)}
        </ul>
        
    )
}


export default MealsGrid;