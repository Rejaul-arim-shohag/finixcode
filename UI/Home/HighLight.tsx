// "use client"
// import React from 'react'

export default function HighLight() {
  return (
      <div className="bg-red-400 text-white p-4 rounded-xl space-y-2">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="text-sm space-y-1">
              <li>📅 Mon, 2 Dec</li>
              <li>⏰ 7.30 AM - 8.30 AM</li>
              <li>🚶‍♂️ Arrive 15 min before start</li>
              <li>🏟️ Venue booked</li>
          </ul>
      </div>
  );
}
