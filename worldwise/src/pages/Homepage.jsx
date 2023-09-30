import { NavLink } from "react-router-dom"
import PageNav from "../components/PageNav"

function Homepage() {
  return (
    <div>
      <PageNav />
      <NavLink to="applayout">Go to App!</NavLink>
      </div>
  )
}

export default Homepage