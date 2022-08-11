import React from "react";

export default function RangeSlider({ value, onChange }) {
  return (
    <div>
      <label
        for="steps-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Range steps
      </label>
      <input
        id="steps-range"
        type="range"
        min="0"
        max="5"
        value={value}
        onChange={onChange}
        step="0.5"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}
