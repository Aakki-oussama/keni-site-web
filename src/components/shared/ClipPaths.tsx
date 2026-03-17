/**
 * Global SVG Clip-path registry — injected once in App.tsx, accessible anywhere via url(#id).
 * Uses objectBoundingBox so shapes auto-resize to any card dimensions. See PROJECT_STANDARDS §6.
 */
export const ClipPaths = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <clipPath id="clip-gallery" clipPathUnits="objectBoundingBox">
        <path
          d="M 0 0.08 
                 C 0 0.0358 0.0358 0 0.08 0 
                 H 0.92 
                 C 0.964 0 1 0.0358 1 0.08 
                 V 0.695 
                 C 1 0.7806 0.9306 0.85 0.845 0.85 
                 H 0.735 
                 C 0.6935 0.85 0.66 0.8835 0.66 0.925 
                 C 0.66 0.9664 0.6264 1 0.585 1 
                 H 0.11 
                 C 0.0492 1 0 0.9507 0 0.89 
                 V 0.08 Z"
        />
      </clipPath>
    </defs>
  </svg>
);
