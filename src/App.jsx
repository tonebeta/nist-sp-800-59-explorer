import { useState, useMemo, useRef, useEffect } from "react";
import { FAMILIES, CONTROLS, BASELINE_META } from "./data";

const BASELINE_LABELS = { L: "Low", M: "Moderate", H: "High", P: "Privacy" };
const BASELINE_COLORS = {
  L: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  M: { bg: "#fef3c7", text: "#92400e", border: "#fbbf24" },
  H: { bg: "#fce7f3", text: "#9d174d", border: "#f472b6" },
  P: { bg: "#e0e7ff", text: "#3730a3", border: "#a5b4fc" },
};

// ─── Main App ───
export default function App() {
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [selectedBaselines, setSelectedBaselines] = useState([]);
  const [expandedControl, setExpandedControl] = useState(null);
  const [view, setView] = useState("families"); // families | controls
  const detailRef = useRef(null);

  const filteredControls = useMemo(() => {
    let result = CONTROLS;
    if (selectedFamily) result = result.filter((c) => c.family === selectedFamily);
    if (selectedBaselines.length > 0) {
      result = result.filter((c) => selectedBaselines.some((b) => c.baselines[b]));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.id.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.nameTW.includes(q) ||
          c.desc.includes(q)
      );
    }
    return result;
  }, [search, selectedFamily, selectedBaselines]);

  const familyStats = useMemo(() => {
    const stats = {};
    FAMILIES.forEach((f) => {
      const controls = CONTROLS.filter((c) => c.family === f.id);
      stats[f.id] = { total: controls.length, filtered: filteredControls.filter((c) => c.family === f.id).length };
    });
    return stats;
  }, [filteredControls]);

  const toggleBaseline = (b) => {
    setSelectedBaselines((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));
  };

  useEffect(() => {
    if (expandedControl && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [expandedControl]);

  const totalFiltered = filteredControls.length;
  const totalAll = CONTROLS.length;

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', 'Noto Sans TC', sans-serif", maxWidth: 1200, margin: "0 auto", padding: "0 16px", background: "var(--bg, #f8fafc)", minHeight: "100vh", color: "var(--text, #1e293b)" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <style>{`
        :root { --bg: #f8fafc; --text: #1e293b; --card: #ffffff; --border: #e2e8f0; --muted: #64748b; --accent: #0f172a; --hover: #f1f5f9; --ring: #3b82f6; }
        @media (prefers-color-scheme: dark) {
          :root { --bg: #0f172a; --text: #e2e8f0; --card: #1e293b; --border: #334155; --muted: #94a3b8; --accent: #f1f5f9; --hover: #334155; --ring: #60a5fa; }
        }
        * { box-sizing: border-box; }
        ::selection { background: var(--ring); color: white; }
        input:focus, button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
        .fade-in { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .control-row { transition: background 0.15s; cursor: pointer; }
        .control-row:hover { background: var(--hover); }
        .badge { display: inline-flex; align-items: center; justify-content: center; padding: 1px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.5px; border: 1px solid; }
        .family-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s; }
        .family-card:hover { border-color: var(--ring); box-shadow: 0 0 0 1px var(--ring); transform: translateY(-1px); }
        .family-card.active { border-color: var(--ring); box-shadow: 0 0 0 2px var(--ring); }
        .chip { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; border: 1px solid var(--border); background: var(--card); cursor: pointer; transition: all 0.15s; user-select: none; }
        .chip:hover { border-color: var(--muted); }
        .chip.active { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .search-input { width: 100%; padding: 10px 16px 10px 40px; border: 1px solid var(--border); border-radius: 8px; font-size: 15px; background: var(--card); color: var(--text); font-family: inherit; }
        .search-input::placeholder { color: var(--muted); }
        .tab { padding: 8px 20px; border: none; background: none; font-size: 14px; font-weight: 500; color: var(--muted); cursor: pointer; border-bottom: 2px solid transparent; font-family: inherit; transition: all 0.15s; }
        .tab:hover { color: var(--text); }
        .tab.active { color: var(--text); border-bottom-color: var(--ring); }
        .new-badge { background: #10b981; color: white; font-size: 10px; padding: 1px 6px; border-radius: 3px; font-weight: 700; margin-left: 6px; letter-spacing: 0.5px; }
        @media (max-width: 768px) {
          .family-grid { grid-template-columns: 1fr !important; }
          .control-table th:nth-child(4), .control-table td:nth-child(4) { display: none; }
        }
      `}</style>

      {/* Header */}
      <header style={{ padding: "32px 0 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.5px" }}>NIST SP 800-53</h1>
          <span style={{ fontSize: 14, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>Rev 5</span>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 14, margin: "6px 0 0", lineHeight: 1.5 }}>
          Security and Privacy Controls for Information Systems and Organizations — 安全與隱私控制項完整互動式清單
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 13, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
          <span>{FAMILIES.length} families</span>
          <span>·</span>
          <span>{CONTROLS.length} base controls</span>
          <span>·</span>
          <span>~1,196 w/ enhancements</span>
        </div>
      </header>

      {/* Toolbar */}
      <div style={{ padding: "16px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Search */}
        <div style={{ position: "relative" }}>
          <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            className="search-input"
            placeholder="搜尋控制項 ID、名稱或說明…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 18 }}>×</button>
          )}
        </div>

        {/* Filters row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>基線：</span>
          {Object.entries(BASELINE_LABELS).map(([k, label]) => (
            <button key={k} className={`chip ${selectedBaselines.includes(k) ? "active" : ""}`} onClick={() => toggleBaseline(k)}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: selectedBaselines.includes(k) ? "var(--bg)" : BASELINE_COLORS[k].text }} />
              {label}
            </button>
          ))}
          {(selectedFamily || selectedBaselines.length > 0 || search) && (
            <button onClick={() => { setSelectedFamily(null); setSelectedBaselines([]); setSearch(""); }} style={{ fontSize: 12, color: "var(--ring)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
              清除全部篩選
            </button>
          )}
          <span style={{ marginLeft: "auto", fontSize: 13, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
            {totalFiltered === totalAll ? `${totalAll} controls` : `${totalFiltered} / ${totalAll}`}
          </span>
        </div>

        {/* View tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
          <button className={`tab ${view === "families" ? "active" : ""}`} onClick={() => setView("families")}>家族總覽</button>
          <button className={`tab ${view === "controls" ? "active" : ""}`} onClick={() => setView("controls")}>控制項清單</button>
        </div>
      </div>

      {/* Content */}
      <main style={{ paddingBottom: 64 }}>
        {view === "families" ? (
          <div className="family-grid fade-in" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {FAMILIES.map((f) => {
              const stats = familyStats[f.id];
              const isActive = selectedFamily === f.id;
              return (
                <div key={f.id} className={`family-card ${isActive ? "active" : ""}`} onClick={() => { setSelectedFamily(isActive ? null : f.id); setView("controls"); }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 15, fontWeight: 700, color: "var(--ring)" }}>{f.id}</span>
                    {f.isNew && <span className="new-badge">NEW</span>}
                    <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {stats.filtered === stats.total ? stats.total : `${stats.filtered}/${stats.total}`}
                    </span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>{f.nameTW}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{f.desc}</div>
                  {/* Baseline coverage dots */}
                  <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                    {Object.entries(BASELINE_LABELS).map(([k, label]) => {
                      const count = CONTROLS.filter((c) => c.family === f.id && c.baselines[k]).length;
                      return count > 0 ? (
                        <span key={k} className="badge" style={{ background: BASELINE_COLORS[k].bg, color: BASELINE_COLORS[k].text, borderColor: BASELINE_COLORS[k].border }}>{k}:{count}</span>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="fade-in">
            {/* Active family header */}
            {selectedFamily && (
              <div style={{ marginBottom: 16, padding: "12px 16px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 18, fontWeight: 700, color: "var(--ring)" }}>{selectedFamily}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{FAMILIES.find((f) => f.id === selectedFamily)?.name}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{FAMILIES.find((f) => f.id === selectedFamily)?.nameTW}</div>
                </div>
                <button onClick={() => setSelectedFamily(null)} style={{ marginLeft: "auto", background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: 12, color: "var(--muted)", fontFamily: "inherit" }}>顯示全部</button>
              </div>
            )}

            {/* Controls table */}
            <div style={{ overflowX: "auto" }}>
              <table className="control-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.5px", width: 80 }}>ID</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>控制項名稱</th>
                    <th style={{ textAlign: "center", padding: "10px 12px", fontWeight: 600, color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.5px", width: 160 }}>基線</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>說明</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredControls.length === 0 ? (
                    <tr><td colSpan={4} style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}>沒有符合篩選條件的控制項</td></tr>
                  ) : (
                    filteredControls.map((c) => {
                      const isExpanded = expandedControl === c.id;
                      const family = FAMILIES.find((f) => f.id === c.family);
                      return (
                        <tr key={c.id} className="control-row" onClick={() => setExpandedControl(isExpanded ? null : c.id)} style={{ borderBottom: "1px solid var(--border)", background: isExpanded ? "var(--hover)" : "transparent", verticalAlign: "top" }}>
                          <td style={{ padding: "10px 12px", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, fontSize: 13, color: "var(--ring)", whiteSpace: "nowrap" }}>{c.id}</td>
                          <td style={{ padding: "10px 12px" }}>
                            <div style={{ fontWeight: 500 }}>{c.name}</div>
                            <div style={{ fontSize: 12, color: "var(--muted)" }}>{c.nameTW}</div>
                            {isExpanded && (
                              <div ref={detailRef} className="fade-in" style={{ marginTop: 10, padding: "10px 12px", background: "var(--bg)", borderRadius: 6, border: "1px solid var(--border)", fontSize: 13, lineHeight: 1.7 }}>
                                <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                                  <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>{c.family} · {family?.nameTW}</span>
                                  {family?.isNew && <span className="new-badge">NEW</span>}
                                </div>
                                <p style={{ margin: 0, color: "var(--text)" }}>{c.desc}</p>
                                <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
                                  {Object.entries(BASELINE_LABELS).map(([k, label]) =>
                                    c.baselines[k] ? (
                                      <span key={k} className="badge" style={{ background: BASELINE_COLORS[k].bg, color: BASELINE_COLORS[k].text, borderColor: BASELINE_COLORS[k].border }}>{label}</span>
                                    ) : null
                                  )}
                                  {!c.baselines.L && !c.baselines.M && !c.baselines.H && !c.baselines.P && (
                                    <span className="badge" style={{ background: "var(--hover)", color: "var(--muted)", borderColor: "var(--border)" }}>Not baselined</span>
                                  )}
                                </div>
                              </div>
                            )}
                          </td>
                          <td style={{ padding: "10px 12px", textAlign: "center" }}>
                            <div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
                              {Object.entries(BASELINE_LABELS).map(([k]) =>
                                c.baselines[k] ? (
                                  <span key={k} className="badge" style={{ background: BASELINE_COLORS[k].bg, color: BASELINE_COLORS[k].text, borderColor: BASELINE_COLORS[k].border }}>{k}</span>
                                ) : null
                              )}
                              {!c.baselines.L && !c.baselines.M && !c.baselines.H && !c.baselines.P && (
                                <span style={{ fontSize: 11, color: "var(--muted)" }}>—</span>
                              )}
                            </div>
                          </td>
                          <td style={{ padding: "10px 12px", color: "var(--muted)", fontSize: 13, lineHeight: 1.5, maxWidth: 400 }}>
                            <div style={{ display: "-webkit-box", WebkitLineClamp: isExpanded ? "unset" : 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{c.desc}</div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ padding: "24px 0", borderTop: "1px solid var(--border)", textAlign: "center", color: "var(--muted)", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
        NIST SP 800-53 Rev 5, Update 1 · Data source: csrc.nist.gov
      </footer>
    </div>
  );
}
