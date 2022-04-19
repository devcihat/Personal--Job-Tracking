import Navbar from "../src/components/navbar"
import Main from "../src/components/main"
import JobList from "../src/components/job-list"

export default function Home() {
  return (
   <div>
     <Navbar />
     <br />
     <Main />
     <br />
     <JobList />
   </div>
  )
}
