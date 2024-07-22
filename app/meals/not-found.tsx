type Props = {
    message: string
  }
  
  export default function NotFound({message}: Props) {
  
    return (
  
      <main className="not-found">
          <h1>Meal Not Found</h1>
          <p>Unfortunately, we could not find this meal.</p>
      </main>
  
    )
  
  }