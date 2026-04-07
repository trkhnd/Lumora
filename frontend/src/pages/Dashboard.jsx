import { useEffect, useState } from "react";

const wallpapers = [
  { id: "aurora", label: "Aurora", className: "wallpaper-aurora" },
  { id: "midnight", label: "Midnight", className: "wallpaper-midnight" },
  { id: "violet", label: "Violet", className: "wallpaper-violet" },
  { id: "ocean", label: "Ocean", className: "wallpaper-ocean" },
  { id: "sunset", label: "Sunset", className: "wallpaper-sunset" }
];

export default function Dashboard() {
  const [selectedWallpaper, setSelectedWallpaper] = useState("aurora");

  // load saved wallpaper
  useEffect(() => {
    const saved = localStorage.getItem("lumora_wallpaper");
    if (saved) {
      setSelectedWallpaper(saved);
    }
  }, []);

  // save wallpaper
  useEffect(() => {
    localStorage.setItem("lumora_wallpaper", selectedWallpaper);
  }, [selectedWallpaper]);

  const currentWallpaper =
    wallpapers.find((w) => w.id === selectedWallpaper)?.className ||
    "wallpaper-aurora";

  return (
    <main className={`page dashboard-page ${currentWallpaper}`}>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Your Dashboard 👋</h1>

        <div className="dashboard-grid">
          {/* LEFT PANEL */}
          <div className="dashboard-panel">
            <h2>Wallpaper Settings</h2>
            <p>Select your style:</p>

            <div className="wallpaper-list">
              {wallpapers.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setSelectedWallpaper(w.id)}
                  className={`wallpaper-btn ${
                    selectedWallpaper === w.id ? "active" : ""
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="dashboard-panel">
            <h2>Overview</h2>

            <div className="stat">
              <span>Tasks</span>
              <strong>3 today</strong>
            </div>

            <div className="stat">
              <span>Mood</span>
              <strong>Focused</strong>
            </div>

            <div className="stat">
              <span>AI Tip</span>
              <strong>Start with hardest task</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}