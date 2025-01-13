import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <div>Page not found</div>
      <Link to='/'>! Back to homepage !</Link>
    </>
  )
}

export default NotFound