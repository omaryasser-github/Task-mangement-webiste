export default function Inputfield({
  label,
  value,
  onChange,
  placeholder = "",
  type = "input",
  className = "",
  ...props
}) {
  const baseClass =
    "w-full border-2 border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:border-blue-400 transition text-base sm:text-lg";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          row={1}
          className={`${baseClass} resize-none overflow-hidden ${className}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          // make the textarea height adjust to the content (elastic height)
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          {...props}
        />
      ) : (
        <input
          className={`${baseClass} ${className}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
}
