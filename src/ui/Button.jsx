/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " uppercase font-semibold text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors focus:outline-none focus:ring focus:ring-stone-200 hover:text-stone-800 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 py-2.5 px-4 md:px-6 md:py-3.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
