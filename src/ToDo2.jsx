import React, { useEffect, useState } from "react";

function ToDo() {
  const getItems = () => {
    const list = localStorage.getItem("lists");
    return list ? JSON.parse(list) : [];
  };

  const [inputText, setInputText] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [mainTask, setMainTask] = useState(getItems());
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      const newTask = {
        text: inputText,
        id: Date.now(),
        reminder: reminderTime,
      };
      if (editingTask) {
        setMainTask((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editingTask.id ? { ...task, ...newTask } : task
          )
        );
        setEditingTask(null);
      } else {
        setMainTask((prevTasks) => [...prevTasks, newTask]);
      }
      setInputText("");
      setReminderTime("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleEditTask = (task) => {
    setInputText(task.text);
    setReminderTime(task.reminder);
    setEditingTask(task);
  };

  const handleDeleteTask = (id) => {
    setMainTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(mainTask));
  }, [mainTask]);

  return (
    <div>
      <div className=" w-full min-h-screen p-2 sm:p-6 lg:p-10">
        <div className="items-center space-x-4 w-full max-w-xl bg-white/25 backdrop-blur-lg mt-26 ml-auto mr-auto mb-5 p-8 lg:p-14 m-2 rounded-md">
          <h1 className="text-center text-5xl font-bold mb-5">To-Do List</h1>
          <form
            onSubmit={handleAddTask}
            className="bg-slate-300 rounded-3xl mb-4 p-4"
          >
            <div className="flex justify-between mb-2">
              <input
                placeholder="Set reminder time"
                type="datetime-local"
                className="border flex-1 border-none outline-none bg-transparent p-2"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <input
                placeholder="Enter to-do"
                type="text"
                className="border flex-1 border-none outline-none bg-transparent p-2"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-600 rounded-3xl px-4 py-1 md:px-8 md:py-2 border-none outline-none text-sm md:text-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {editingTask ? "Update Task" : "Add Task"}
              </button>
            </div>
          </form>
          <ul className="p-2 md:p-4 bg-slate-300 rounded-md">
            {mainTask.length > 0 ? (
              mainTask.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between p-2 bg-yellow-50 mb-2 rounded-xl"
                >
                  <input type="checkbox" />
                  <div className="task-text">
                    {task.text} <br></br>{" "}
                    {task.reminder && <span> {task.reminder}</span>}
                  </div>
                  <div className="flex item-center justify-center gap-2">
                    <button
                      onClick={() => handleEditTask(task)}
                      className="bg-blue-600 px-4 py-2 rounded-lg mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-rose-600 px-4 py-2 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <h2>No Task Available</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
