import teams from "../data/Teams";

function TeamsL({ match }) {
  const [teamA, teamB] = match.split(/\s+vs\.?\s+/i);

  const home = teams[teamA.trim().toLowerCase()];
  const away = teams[teamB.trim().toLowerCase()];

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Home team */}
      <div className="flex items-center gap-2">
        {home?.logo && (
          <img
            src={home.logo}
            alt=""
            className="h-12 w-12 object-contain"
          />
        )}
        <span>{teamA.trim()}</span>
      </div>

      <span className="text-center font-semibold">VS</span>

      {/* Away team */}
      <div className="flex items-center gap-2">
        {away?.logo && (
          <img
            src={away.logo}
            alt=""
            className="h-12 w-12 object-contain"
          />
        )}
        <span>{teamB.trim()}</span>
      </div>
    </div>
  );
}

export default TeamsL;