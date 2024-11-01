import { useState } from "react";
import AllTask from "../utility/AllTask";
const AdminDashboard = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section style={{ fontFamily: "Roboto" }} className="admin-task bg-[#1c1c1c] min-h-[190vh] w-[100vw] flex flex-col overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-y-auto"
      >
        <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="taskTitle" className="block text-sm font-medium text-zinc-500">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                value={taskTitle}
                placeholder="Task Title"
                onChange={(e) => setTaskTitle(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-2 border-[#834045] focus:border--[#834045]  focus:ring-0 text-zinc-500 outline-none p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-500">Description</label>
              <textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-2 border-[#834045] focus:border--[#834045]  focus:ring-0 text-zinc-500 outline-none p-3"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-zinc-500">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-2 border-[#834045] focus:border--[#834045]  focus:ring-0 text-zinc-500 outline-none p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="assignTo" className="block text-sm font-medium text-zinc-500">Assign To</label>
              <input
                type="text"
                id="assignTo"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-2 border-[#834045] focus:border--[#834045]  focus:ring-0 text-zinc-500 outline-none p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-zinc-500">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-2 border-[#834045] focus:border--[#834045]  focus:ring-0 text-zinc-500 outline-none p-3"
                required
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-[#834045] text-white py-2 text-lg px-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Create Task
          </button>
        </div>
      </form>
      <AllTask/>
    </section>
  );
};

export default AdminDashboard;
