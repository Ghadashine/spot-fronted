

import { useState } from "react";

const sections = [
  // TOP
  { id: "301", points: "285,150 335,150 335,220 285,220", labelX: 310, labelY: 185 },
  { id: "302", points: "335,150 385,150 385,220 335,220", labelX: 360, labelY: 185 },
  { id: "303", points: "385,150 435,150 435,220 385,220", labelX: 410, labelY: 185 },
  { id: "304", points: "435,150 485,150 485,220 435,220", labelX: 460, labelY: 185 },
  { id: "305", points: "485,150 535,150 535,220 485,220", labelX: 510, labelY: 185 },
  { id: "306", points: "535,150 585,150 585,220 535,220", labelX: 560, labelY: 185 },
  { id: "307", points: "585,150 635,150 635,220 585,220", labelX: 610, labelY: 185 },
  { id: "308", points: "635,150 685,150 685,220 635,220", labelX: 660, labelY: 185 },

  // BOTTOM
  { id: "401", points: "285,580 335,580 335,650 285,650", labelX: 310, labelY: 615 },
  { id: "402", points: "335,580 385,580 385,650 335,650", labelX: 360, labelY: 615 },
  { id: "403", points: "385,580 435,580 435,650 385,650", labelX: 410, labelY: 615 },
  { id: "404", points: "435,580 485,580 485,650 435,650", labelX: 460, labelY: 615 },
  { id: "405", points: "485,580 535,580 535,650 485,650", labelX: 510, labelY: 615 },
  { id: "406", points: "535,580 585,580 585,650 535,650", labelX: 560, labelY: 615 },
  { id: "407", points: "585,580 635,580 635,650 585,650", labelX: 610, labelY: 615 },
  { id: "408", points: "635,580 685,580 685,650 635,650", labelX: 660, labelY: 615 },

  // LEFT
  { id: "311", points: "150,250 230,250 230,300 150,300", labelX: 190, labelY: 275 },
  { id: "312", points: "150,300 230,300 230,350 150,350", labelX: 190, labelY: 325 },
  { id: "313", points: "150,350 230,350 230,400 150,400", labelX: 190, labelY: 375 },
  { id: "314", points: "150,400 230,400 230,450 150,450", labelX: 190, labelY: 425 },
  { id: "315", points: "150,450 230,450 230,500 150,500", labelX: 190, labelY: 475 },
  { id: "316", points: "150,500 230,500 230,550 150,550", labelX: 190, labelY: 525 },

  // RIGHT
  { id: "343", points: "770,250 850,250 850,300 770,300", labelX: 810, labelY: 275 },
  { id: "342", points: "770,300 850,300 850,350 770,350", labelX: 810, labelY: 325 },
  { id: "341", points: "770,350 850,350 850,400 770,400", labelX: 810, labelY: 375 },
  { id: "340", points: "770,400 850,400 850,450 770,450", labelX: 810, labelY: 425 },
  { id: "339", points: "770,450 850,450 850,500 770,500", labelX: 810, labelY: 475 },
  { id: "338", points: "770,500 850,500 850,550 770,550", labelX: 810, labelY: 525 },

  // CORNERS
  {
    id: "309",
    points: "205,250 245,205 285,150 315,220 260,275",
    labelX: 255,
    labelY: 225,
  },
  {
    id: "310",
    points: "685,150 725,205 765,250 710,275 655,220",
    labelX: 715,
    labelY: 225,
  },
  {
    id: "337",
    points: "205,550 260,525 315,580 285,650 245,595",
    labelX: 255,
    labelY: 575,
  },
  {
    id: "336",
    points: "685,580 740,525 795,550 755,595 715,650",
    labelX: 715,
    labelY: 575,
  },
];

// --------------------------------------------------
// SECTION SEAT PICKER
// --------------------------------------------------

function SectionSeatPicker({
  section,
  selectedSeats,
  setSelectedSeats,
  setSelectedSeat,
  onBack,
})  {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const seatsPerRow = 12;

  const bookedSeats = [
    `${section}-B-4`,
    `${section}-B-5`,
    `${section}-C-8`,
    `${section}-D-2`,
    `${section}-E-9`,
    `${section}-F-10`,
  ];

  function toggleSeat(seatId) {
    if (bookedSeats.includes(seatId)) {
      return;
    }

    setSelectedSeats((current) => {
      if (current.includes(seatId)) {
        return current.filter((seat) => seat !== seatId);
      }

      return [...current, seatId];
    });
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#080909] border border-gray-800">

        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-[#080909] border-b border-gray-800 px-6 md:px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Section
              </p>

              <h2 className="font-serif text-4xl mt-1">
                {section}
              </h2>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="text-gray-500 hover:text-white text-3xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* SEAT MAP */}
        <div className="p-6 md:p-10">

          {/* FRONT */}
          <div className="flex justify-center mb-10">
            <div
              className="
                w-full
                max-w-xl
                border
                border-gray-700
                bg-[#101313]
                py-3
                text-center
                text-xs
                uppercase
                tracking-[0.4em]
                text-gray-500
              "
            >
              Pitch
            </div>
          </div>

          {/* ROWS */}
          <div className="max-w-4xl mx-auto space-y-5">
            {rows.map((row) => (
              <div
                key={row}
                className="flex items-center gap-4"
              >

                {/* ROW */}
                <div
                  className="
                    w-6
                    text-center
                    text-sm
                    font-bold
                    text-gray-500
                  "
                >
                  {row}
                </div>

                {/* SEATS */}
                <div
                  className="
                    flex-1
                    grid
                    grid-cols-6
                    sm:grid-cols-12
                    gap-2
                  "
                >
                  {Array.from({
                    length: seatsPerRow,
                  }).map((_, index) => {
                    const number = index + 1;
                    const seatId = `${section}-${row}-${number}`;

                    const booked = bookedSeats.includes(seatId);
                    const selected = selectedSeats.includes(seatId);

                    return (
                      <button
                        key={seatId}
                        type="button"
                        disabled={booked}
                        onClick={() => toggleSeat(seatId)}
                        className={`
                          h-10
                          border
                          text-xs
                          font-semibold
                          transition-all
                          duration-150
                          ${
                            booked
                              ? "bg-[#151515] border-[#292929] text-gray-700 cursor-not-allowed"
                              : selected
                              ? "bg-[#0ABAB5] border-[#0ABAB5] text-black"
                              : "bg-[#292d2d] border-[#555] text-gray-300 hover:bg-[#3b4141] hover:border-[#0ABAB5]"
                          }
                        `}
                      >
                        {number}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* LEGEND */}
          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-10
              pt-6
              border-t
              border-gray-800
            "
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-8 h-7 bg-[#292d2d] border border-[#555]" />
              Available
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-8 h-7 bg-[#0ABAB5]" />
              Selected
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-8 h-7 bg-[#151515] border border-[#292929]" />
              Booked
            </div>
          </div>

          {/* SELECTED */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Selected Seats
            </p>

            {selectedSeats.length === 0 ? (
              <p className="text-gray-600 mt-3">
                No seats selected
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedSeats.map((seat) => (
                  <button
                    key={seat}
                    type="button"
                    onClick={() => toggleSeat(seat)}
                    className="
                      px-3
                      py-2
                      bg-[#0ABAB5]
                      text-black
                      text-xs
                      font-bold
                    "
                  >
                    {seat} ×
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CONFIRM */}
          <button
            type="button"
            onClick={onBack}
            className="
              w-full
              mt-8
              py-4
              bg-[#0ABAB5]
              text-black
              font-bold
              uppercase
              tracking-[0.15em]
              hover:bg-white
              transition
            "
          >
            Confirm Seats
          </button>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------
// MAIN STADIUM
// --------------------------------------------------

export default function Stadium( {selectedSeat, setSelectedSeat}) {
  const [selectedSection, setSelectedSection] = useState(null);
  
const [hoveredSection, setHoveredSection] = useState(null);

const selectedSeats = selectedSeat;
const setSelectedSeats = setSelectedSeat;

  return (
    <div className="w-full text-white">

      {/* TITLE */}
      <div className="mb-10">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-gray-500
          "
        >
          Stadium Seating
        </p>

        <h2
          className="
            font-serif
            text-5xl
            md:text-7xl
            mt-3
          "
        >
          Select Your Seats
        </h2>

        <p className="text-gray-500 mt-4">
          Select a section, then choose your seats.
        </p>
      </div>

      {/* STADIUM */}
      <div
        className="
          w-full
          overflow-x-auto
          border
          border-gray-800
          bg-[#050505]
        "
      >
        <svg
          viewBox="100 100 800 600"
          className="
            block
            w-full
            min-w-[760px]
            max-w-[1100px]
            mx-auto
          "
        >

          {/* OUTER STADIUM */}
          <rect
            x="130"
            y="125"
            width="740"
            height="550"
            rx="160"
            fill="#090a0a"
            stroke="#252a2a"
            strokeWidth="5"
          />

          {/* OUTER RING */}
          <rect
            x="170"
            y="165"
            width="660"
            height="470"
            rx="135"
            fill="#111414"
            stroke="#343a3a"
            strokeWidth="3"
          />

          {/* SECTIONS */}
          {sections.map((section) => {
            const selected = selectedSection === section.id;

            return (
            <g
  key={section.id}
  onClick={() => setSelectedSection(section.id)}
  onMouseEnter={() => setHoveredSection(section.id)}
  onMouseLeave={() => setHoveredSection(null)}
  className="cursor-pointer"
>


<polygon
  points={section.points}
  fill={
    selected
      ? "#0ABAB5"
      : hoveredSection === section.id
      ? "#3b4141"
      : "#242929"
  }
  stroke={selected ? "#0ABAB5" : "#555d5d"}
  strokeWidth="2"
  style={{
    filter:
      hoveredSection === section.id
        ? "brightness(1.35)"
        : "brightness(1)",
    transform:
      hoveredSection === section.id
        ? "scale(1.04)"
        : "scale(1)",
    transformOrigin: `${section.labelX}px ${section.labelY}px`,
    transition: "filter 0.2s ease, transform 0.2s ease",
  }}
/>



                <text
                  x={section.labelX}
                  y={section.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={selected ? "#000" : "#d4d8d8"}
                  fontSize="13"
                  fontWeight="700"
                  pointerEvents="none"
                >
                  {section.id}
                </text>
              </g>
            );
          })}

          {/* INNER TIER */}
          <rect
            x="230"
            y="230"
            width="540"
            height="340"
            rx="105"
            fill="#080909"
            stroke="#414747"
            strokeWidth="3"
          />

          {/* PITCH AREA */}
          <rect
            x="285"
            y="275"
            width="430"
            height="250"
            rx="12"
            fill="#111414"
            stroke="#777"
            strokeOpacity="0.4"
            strokeWidth="2"
          />

          {/* CENTER LINE */}
          <line
            x1="500"
            y1="275"
            x2="500"
            y2="525"
            stroke="#aaa"
            strokeOpacity="0.3"
            strokeWidth="2"
          />

          {/* CENTER CIRCLE */}
          <circle
            cx="500"
            cy="400"
            r="42"
            fill="none"
            stroke="#aaa"
            strokeOpacity="0.3"
            strokeWidth="2"
          />

          <circle
            cx="500"
            cy="400"
            r="3"
            fill="#aaa"
            fillOpacity="0.5"
          />

          {/* GOAL AREAS */}
          <rect
            x="285"
            y="345"
            width="50"
            height="110"
            fill="none"
            stroke="#aaa"
            strokeOpacity="0.3"
            strokeWidth="2"
          />

          <rect
            x="665"
            y="345"
            width="50"
            height="110"
            fill="none"
            stroke="#aaa"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* LEGEND */}
      <div
        className="
          flex
          flex-wrap
          gap-7
          mt-6
          text-sm
          text-gray-400
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              w-8
              h-5
              bg-[#242929]
              border
              border-[#555d5d]
            "
          />
          Available
        </div>

        <div className="flex items-center gap-2">
          <span className="w-8 h-5 bg-[#0ABAB5]" />
          Selected
        </div>
      </div>

      {/* SELECTED SEATS */}
      <div
        className="
          mt-8
          border
          border-gray-800
          bg-[#080909]
          p-6
          md:p-8
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-gray-500
          "
        >
          Selected Seats
        </p>

        {selectedSeats.length === 0 ? (
          <p className="text-gray-600 mt-3">
            Select a section and choose your seats.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedSeats.map((seat) => (
              <span
                key={seat}
                className="
                  px-3
                  py-2
                  bg-[#0ABAB5]
                  text-black
                  text-xs
                  font-bold
                "
              >
                {seat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* SEAT PICKER */}
      {selectedSection && (
        <SectionSeatPicker
          section={selectedSection}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
            setSelectedSeat={setSelectedSeat}
          onBack={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}
