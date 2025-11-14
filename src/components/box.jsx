import React from "react";
import Icons from "./Icons";
import clsx from "clsx";

export default React.memo(function Box({
  label,
  description,
  onClick,
  taskData = {},
  isSelected,
  className = ""
}) {
  const handleClick = () => {
    if (onClick) onClick(taskData);
  };
    const IconComponent = taskData.icon ? (
    <Icons icon={taskData.icon} />
  ) : taskData.iconImage ? (
    <img src={taskData.iconImage} alt="icon" className="w-6 h-6"/>
  ) : null;

  return (
    <div
      className={`flex items-center justify-between border-2 rounded-2xl py-4 px-4 my-5 min-h-[60px] shadow-md 
      ${isSelected ? "  border-blue-600 " : ""}`}
      style={{ backgroundColor: taskData.bg }}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <span className={clsx ("rounded-xl w-12 h-12 border-2 bg-white flex items-center justify-center mr-4", taskData.className) }>
           {IconComponent}
        </span>
        <div>
          <div className="font-bold text-xl text-gray-900">{label}</div>
          {description && (
            <div className=" text-sm text-gray-900 mt-1">
              {description.split("  ").map((part, index) => (
                <span key={index}>
                  {part.trim()}
                  {index !== description.split("  ").length - 1 && <br />}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {taskData.actionIcon && (
        <span
          className={clsx(" rounded-xl w-10 h-10 flex items-center justify-center", taskData.actionBg)}
        >
          <img src={taskData.actionIcon} alt="action" className="w-6 h-6" />
        </span>
      )}
    </div>
  );
});
