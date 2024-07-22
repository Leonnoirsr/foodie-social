
type Props = {
  message: string
}

export default function NotFound({message}: Props) {

  return (

    <main className="not-found">
        <h1>This page is not found</h1>
        <p>Please check your route.</p>
    </main>

  )

}