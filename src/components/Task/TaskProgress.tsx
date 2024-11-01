const TaskProgress = () => {
  return (
    <section className="w-screen h-1/2 flex items-start justify-evenly md:flex-nowrap flex-wrap gap-2 pl-3 pt-5 md:px-6">
      <div className="w-[45%] h-1/2 md:h-[35vh] rounded-lg bg-blue-500">
      </div>
      <div className="w-[45%] h-1/2 md:h-[35vh] rounded-lg bg-green-500">
      </div>
      <div className="w-[45%] h-1/2 md:h-[35vh] mt-3 md:mt-0 rounded-lg bg-yellow-500">
      </div>
      <div className="w-[45%] h-1/2 md:h-[35vh] mt-3 md:mt-0 rounded-lg bg-red-500">
      </div>
    </section>
  )
}
export default TaskProgress