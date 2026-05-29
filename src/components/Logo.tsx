export function Logo() {
  return (
    <div className="logo" aria-label="OrbitBox home">
      <span className="logo-mark" aria-hidden="true">
        <svg className="orbitbox-mark" viewBox="0 0 40 40" role="img">
          <path className="mark-wing mark-wing-a" d="M6 24.7h13.4v5.8H6z" />
          <path className="mark-wing mark-wing-b" d="M21.1 8.2h13v5.8h-13z" />
          <path className="mark-ray mark-ray-a" d="M14.6 5.6 22.2 13 11.3 22.8 3.7 15.4z" />
          <path className="mark-ray mark-ray-b" d="M18.3 17.1 33.4 31.2 28.5 35.7 13.4 21.6z" />
          <path className="mark-stem" d="M12.3 9.4h5.8v16.2h-5.8z" />
          <path className="mark-core" d="M15.4 14.8 21 20l-5.6 5.2L9.8 20z" />
          <path className="mark-spark" d="M27.3 17.6h6.2v4.8h-6.2z" />
        </svg>
      </span>
      <span className="logo-word">OrbitBox</span>
    </div>
  );
}

export function XIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}
