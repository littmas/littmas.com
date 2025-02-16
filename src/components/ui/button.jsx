import React from "react";
import "./index.css";

export function Button({ children, ...props }) {
  return <button className="button" {...props}>{children}</button>;
}
