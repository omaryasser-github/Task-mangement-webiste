export default function Button({
  type ,
  children,
  variant = "primary",
  icon,
  ...props
}) {
  const base =
    "flex items-center justify-center px-6 py-2  rounded-full font-medium focus:outline-none transition cursor-pointer";
  const styles = {
    primary: "bg-[#3662E3] text-white hover:bg-blue-500",
    danger: "bg-[#97A3B6] text-[#E3E8EF] hover:bg-gray-500",
  };
  return (
    <button type={type} className={`${base} ${styles[variant]}`} {...props}>
      {children}
      {icon && (
        <span className="ml-2">
          {<img src={icon} alt="icon" className="w-5 h-5" />}
        </span>
      )}
    </button>
  );
}
