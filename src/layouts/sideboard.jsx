import React, { useState } from "react";
import { statusOptions } from "../constants/statusOptions";
import { iconOptions } from "../constants/iconOptions";
import trash from "../assets/Trash.svg";
import Done_round from "../assets/Done_round.svg";
import close_ring_duotone from "../assets/close_ring_duotone-1.svg";
import Button from "../components/button";
import StatusSelector from "../components/status";
import Inputfield from "../components/Inputfield";
import Icon from "../components/Icons";


export default function SideBoard({ isOpen, onClose, taskData }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(iconOptions[1]);
  const [status, setStatus] = useState("inProgress");

  // Update form fields when taskData changes
  React.useEffect(() => {
    if (taskData) {
      setTaskName(taskData.label || "");
      setDescription(taskData.description || "");
      setIcon(taskData.icon || iconOptions[0]);
      setStatus(taskData.state || "inProgress");
    } else {
      // Reset form for new task
      setTaskName("");
      setDescription("");
      setIcon(iconOptions[0]);
      setStatus("inProgress");
      // setisSelected(true);
      
    }
  }, [taskData]);

  return (
    <div
      className={`fixed rounded-2xl top-2 right-2 bottom-2  w-full sm:w-[30rem] md:w-[60rem] lg:w-[100rem] max-w-full sm:max-w-[80vw] md:max-w-[40rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
    >
      {/* sidebar task  */}
      <form className="p-4 sm:p-6 flex flex-col gap-4 h-[calc(100%-80px)] overflow-y-auto">

        {/* Header */}
        <header className="flex justify-between items-center p-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
           Task details
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-10 border border-gray-300 hover:bg-gray-200 focus:outline-none rounded-md"
            aria-label="Close sidebar"
            type="button"
          >
            <img src={close_ring_duotone} alt="Close" className="w-5 h-5" />
          </button>
        </header>

        {/* Task Name */}
        <Inputfield
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
          className="h-[40px]" 
        />

        {/* Description */}
        <Inputfield
          type="textarea"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          className="min-h-[100px]" 
        />

        {/* Icons selection */}
        <div>
          < p className="block text-gray-500 font-medium mb-1 text-sm sm:text-base">
            Icon
          </p>
          <div className="flex gap-2 sm:gap-3 mb-2 flex-wrap">
            {iconOptions.map((icn, idx) => (
              <Icon
                key={icn}
                icon={icn}
                selected={icon === icn}
                onClick={() => setIcon(icn)}
                bgColor="#E3E8EF" 
                selectedBgColor="#F5D565" 
                aria-label={`Select icon ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Status selection */}
        <div>
          <span className="block text-gray-500 font-medium mb-1 text-sm sm:text-base">
            Status
          </span>
          <StatusSelector
            options={statusOptions}
            value={status}
            onChange={setStatus}
          />
        </div>

        {/* Buttons */}
        {/* Fixed action buttons at the bottom */}
        <div className="fixed left-0 right-0 bottom-0 sm:left-auto sm:bottom-0 sm:w-[30rem] md:w-[30rem] lg:w-[35rem] mx-auto px-4 pb-4 bg-transparent ">
          <div className="flex gap-4 justify-end">
            {/* Delete button */}
            <Button type="button" variant="danger" icon={trash}>
              Delete
            </Button>

            {/* Save button */}
            <Button type="submit" variant="primary" icon={Done_round}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
