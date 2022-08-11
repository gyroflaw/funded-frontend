import React from "react";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
export default function Vote({ value, onVoteUp, onVoteDown }) {
  return (
    <div className="flex flex-row gap-3">
      {value}
      <div className="flex flex-col gap-2">
        <button onClick={onVoteUp}>
          <BsHandThumbsUp />
        </button>
        <button onClick={onVoteDown}>
          <BsHandThumbsDown />
        </button>
      </div>
    </div>
  );
}
