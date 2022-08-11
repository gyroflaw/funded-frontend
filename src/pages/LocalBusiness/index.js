import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";

import Home from "./Home";

export default function LocalBusiness() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:campaignId" element={<Detail />} />
    </Routes>
  );
}
