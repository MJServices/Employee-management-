const TaskList = () => {
  return (
    <section className="task-list h-[100vh] md:h-[50vh] flex flex-col md:flex-row items-center justify-start mt-[10vh] md:-mt-10 gap-5 overflow-y-auto md:overflow-x-auto px-7">
         <div className="task flex-shrink-0 bg-red-600 w-[80%] md:w-[30%] h-[30%] md:h-[95%] rounded-xl">
            hey
        </div>
        <div className="task flex-shrink-0 bg-green-500 w-[80%] md:w-[30%] h-[30%] md:h-[95%] rounded-xl">
            hey
        </div>
    </section>
  )
}
export default TaskList