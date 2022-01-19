import React from "react";

export default function Ancord({
  icon,
  text,
  customClassName,
  onlyIcon = false,
}) {
  return (
    <div className="flex items-center bg-purple-100">
      {icon}
      {!onlyIcon && <p className={` ${customClassName}`}>{text}</p>}
    </div>
  );
}
