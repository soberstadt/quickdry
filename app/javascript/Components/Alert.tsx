import React from "react";

export default function Alert({ message, onDismiss }) {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700
            px-6 py-4 mb-4 rounded fixed z-100 top-12 right-8"
    >
      <span className="inline-block align-middle mr-8">{message}</span>
      <button
        className="bg-transparent absolute right-0 top-0 mt-4 mr-6
              outline-none focus:outline-none
              text-2xl font-semibold leading-none"
      >
        <span onClick={onDismiss}>×</span>
      </button>
    </div>
  );
}
