import React from "react";

function TourDetails() {
  return (
    <div className="space-y-5 border-b border-slate-400 py-16" >
      <h2 className="text-[#08083c] text-3xl font-medium" >Tour Overview</h2>
      <p className="text-slate-600" >
        The Phi Phi archipelago is a must-visit while in Phuket, and this
        speedboat trip whisks you around the islands in one day. Swim over the
        coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at
        Bamboo Island, and visit Monkey Beach and Maya Bay, immortalized in "The
        Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and
        Phuket hotel pickup and drop-off all included.
      </p>
        <h3 className="text-[#08083c] text-2xl  " >Tour Highlights</h3>
        <ul className="text-slate-600 list-disc pl-5" >
            <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
            <li>Be amazed by the variety of marine life in the archepelago</li>
            <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
            <li>Feel the comfort of a tour limited to 35 passengers</li>
            <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
        </ul>
    </div>
  );
}

export default TourDetails;
