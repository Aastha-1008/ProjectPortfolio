const items = [
  "Samarth Elder Care",
  "Conclave Techmedia",
  "Tresso Coffee",
  "Rural Coffee Works",
  "Samarth Elder Care",
  "Conclave Techmedia",
  "Tresso Coffee",
  "Rural Coffee Works",
];

export function FreelanceMarquee() {
  return (
    <div className="marquee-shell">
      <div className="marquee-track">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="marquee-chip">
            <span className="marquee-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
