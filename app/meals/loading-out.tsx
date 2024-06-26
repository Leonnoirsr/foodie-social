import styles from './styles/loading.module.css'


type Props = {}

const MealsLoadingPage = (props: Props) => {
  return (
    <p className={styles.loading}>Fetching Meals...</p>
  )
}

export default MealsLoadingPage