import React from "react";
import Icons from "./Icons";

export default React.memo(function Box({
  label,
  description,
  onClick,
  taskData = {},
  isSelected,
}) {
  const handleClick = () => {
    if (onClick) onClick(taskData);
  };

  return (
    <div
      className={`flex items-center justify-between border-2 rounded-2xl py-4 px-4 my-5 min-h-[60px] shadow-md 
      ${isSelected ? "  border-blue-600 " : ""}`}
      style={{ backgroundColor: taskData.bg }}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <span className="rounded-xl w-12 h-12 bg-white flex items-center justify-center mr-4">
          <Icons icon={taskData.icon} />
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
          className={`${taskData.actionBg} rounded-xl w-10 h-10 flex items-center justify-center`}
        >
          <img src={taskData.actionIcon} alt="action" className="w-6 h-6" />
        </span>
      )}
    </div>
  );
});
