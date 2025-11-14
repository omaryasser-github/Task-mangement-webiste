import Icon from "./icons";
import Done_round from "../assets/Done_round.svg";

export default function StatusSelector({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-1 w-full">
      {options.map((opt) => (
        <div
          key={opt.value}
          role="button"
          className={`flex items-center gap-2 px-1 py-1 rounded-2xl border-2  text-sm sm:text-base font-medium
        ${
          value === opt.value
            ? "border-blue-600 bg-white shadow"
            : "border-gray-200 bg-white"
        }        
      `}
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
        >
          <Icon
            icon={opt.icon}
            selected={value === opt.value}
            bgColor={opt.color}
            selectedBgColor={opt.color}
          />

          <span
            className={`flex-1 text-left ${
              value === opt.value ? "text-gray-900" : "text-gray-600"
            }`}
          >
            {opt.label}
          </span>

          {value === opt.value && (
            <span className="mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white  ">
              <img
                src={Done_round}
                alt="Selected"
                className="w-4 h-4 font-light text-xs"
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
} 