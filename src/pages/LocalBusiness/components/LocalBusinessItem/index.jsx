import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { RangeSlider, Vote } from "components";

export default function LocalBusinessItem({
  campaignId,
  description,
  relevancy: _relevancy,
  likes,
}) {
  const [relevancy, setRelevancy] = useState(_relevancy);
  const onVoteUp = useCallback(() => {
    console.log("User vote up");
  }, []);

  const onVotedown = useCallback(() => {
    console.log("User vote up");
  }, []);

  return (
    <section className="flex flex-col border border-black">
      <NavLink to={`${campaignId}`}>{campaignId}</NavLink>
      <div className="flex flex-row gap-4">
        <span>{description}</span>
        <RangeSlider
          value={relevancy}
          onChange={(e) => setRelevancy(e.target.value)}
        />
      </div>
      <Vote value={likes} onVoteUp={onVoteUp} onVoteDown={onVotedown} />
    </section>
  );
}
