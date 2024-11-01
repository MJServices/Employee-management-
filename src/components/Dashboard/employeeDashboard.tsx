import TaskProgress from "../Task/TaskProgress"
import Header from "../utility/Header"
import TaskList from "../Task/TaskList"

const EmployeeDashboard = () => {
  return (
    <section className="employee-dashboard h-[100vh] w-[100vw] bg-[#1c1c1c] overflow-y-auto overflow-x-hidden">
        <Header/>
        <TaskProgress/>
        <TaskList/>
    </section>
  )
}
export default EmployeeDashboard