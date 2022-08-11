import React from "react";
import Chance from "chance";
import { Filters, LocalBusinessItem } from "./components";

const chance = new Chance();

const businesses = [
  {
    campaignId: chance.guid(),
    description: chance.sentence(),
    relevancy: chance.integer({ min: 1, max: 10 }),
    likes: chance.integer({ min: 10, max: 100 }),
  },
  {
    campaignId: chance.guid(),
    description: chance.sentence(),
    relevancy: chance.integer({ min: 1, max: 10 }),
    likes: chance.integer({ min: 10, max: 100 }),
  },
  {
    campaignId: chance.guid(),
    description: chance.sentence(),
    relevancy: chance.integer({ min: 1, max: 10 }),
    likes: chance.integer({ min: 10, max: 100 }),
  },
];

export default function LocalBusiness() {
  console.log(businesses);
  return (
    <Filters>
      <div className="lg:col-span-3 border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
        {businesses.map((b) => (
          <LocalBusinessItem key={b.campaignId} {...b} />
        ))}
      </div>
    </Filters>
  );
}
