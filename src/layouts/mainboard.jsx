import React from "react";
import logo from "../assets/Logo.svg";
import Edit_doutone from "../assets/Edit_duotone.svg";
import Box from "../components/Box";
import SideBoard from "./sideboard";
import { tasks } from "../constants/tasks";

export default function MainBoard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);
   const [isSelected, setisSelected] = React.useState(false);

  const handleTaskClick = (taskData) => {
    setSelectedTask(taskData);
    setSidebarOpen(true);
    setisSelected(!isSelected);
  };

  return (
    <div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
          onClick={() => {
            setSidebarOpen(false);
            setSelectedTask(null);
            setIsActive(false);
          }}
        />
      )}

      <SideBoard
        isOpen={sidebarOpen}
        onClose={() => {
          setSidebarOpen(false);
          setSelectedTask(null);
          setisSelected(false);
        }}
        taskData={selectedTask}
      />

      <main className="mt-9">
        <header className="flex items-center mb-8 gap-2">
          <img src={logo} alt="logo" className="w-10 mb-8" />

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-Outfit font-normal m-0 flex items-center gap-2">
              My Task Board
              <img src={Edit_doutone} alt="Edit" className="w-5 h-5 mt-1" />
            </h1>
            <h3 className="text-gray-700 text-lg mt-1">
              Tasks to keep organised
            </h3>
          </div>
        </header>

        {/* ✅ بدل التكرار، نعمل Map */}
        {tasks.map((task) => (
          <Box
            key={task.id}
            state={task.state}
            label={task.label}
            description={task.description}
            onClick={handleTaskClick}
            taskData={task}
            isSelected={task.id === selectedTask?.id}
          />
        ))}
      </main>
    </div>
  );
}
