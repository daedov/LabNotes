import React from "react";

// eslint-disable-next-line react/prop-types
export function AlertNote({message}) {
  return (
    <div className="bg-purple-200 border border-purple-400 text-purple-900 px-4 py-3 rounded relative mb-2 text-center" role="alert">
      <span className="sm:inline block">{message}</span>
    </div>
  );
}