import { useRouteError } from 'react-router-dom'

type TError = {
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as TError
  console.error(error)

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.message}</i>
      </p>
    </div>
  )
}
