import { StudentGroupCard, StudentUserCard } from "../hooks"
import { GlobalContainer } from "../shared/styles/bgStyles"

const StudentDatail = () => {
  return (
    <GlobalContainer>
        <StudentUserCard />
        <StudentGroupCard />
    </GlobalContainer>
  )
}

export default StudentDatail