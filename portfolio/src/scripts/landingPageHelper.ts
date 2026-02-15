type MousePosition = {
  x: number;
  y: number;
};

export const mouseTracker = (elementId: string) => {
  const el = document.getElementById(elementId);
  if (!el) return null;

  const mouse = { x: 0, y: 0 };
  let isActive = false;
  let rect = el.getBoundingClientRect();

  const onMove = (e: MouseEvent) => {
    if (!isActive) return;

    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    console.log(`X: ${mouse.x} | Y: ${mouse.y}`);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      isActive = entry.isIntersecting;
      if (isActive) {
        rect = el.getBoundingClientRect(); // refresh when active
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(el);
  el.addEventListener("mousemove", onMove);

  return {
    mouse,
    isActive: () => isActive,
    destroy() {
      observer.disconnect();
      el.removeEventListener("mousemove", onMove);
    },
  };
};


export const startLoop = (
  cb: (time: number) => void,
  isActive?: () => boolean
) => {
  let frameId: number;

  const loop = (time: number) => {
    if (!isActive || isActive()) {
      cb(time);
    }
    frameId = requestAnimationFrame(loop);
  };

  frameId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(frameId);
  };
};

const eyeOffsetNormalizer = (position: number) => {
  const maxOffset = 10; // max pupil movement in pixels
  return Math.max(-maxOffset, Math.min(maxOffset, position));
}

// export const updateEye = (eyeElementId: string, mouse: MousePosition, start: MousePosition) => {
//   const eye = document.getElementById(eyeElementId);
//   if (!eye) return;

//   console.log("Updating eye position:", mouse);

//   // const centerX = eye.offsetWidth / 2;
//   // const centerY = eye.offsetHeight / 2;
  
//   eye.style.setProperty("--pupil-x", `${mouse.x}px`);
//   eye.style.setProperty("--pupil-y", `${mouse.y}px`);
//   const maxDistance = 10; // max pupil movement in pixels

// }

export function updateEye(eyeId: string, mouse: { x: number; y: number }) {
  const eye = document.getElementById(eyeId);
  if (!eye) return;

  const rect = eye.getBoundingClientRect();

  // Eye center in viewport coordinates
  const eyeCenterX = rect.left + rect.width / 2;
  const eyeCenterY = rect.top + rect.height / 2;

  // Vector from eye center → mouse
  const dx = mouse.x - eyeCenterX;
  const dy = mouse.y - eyeCenterY;

  // Distance (vector magnitude)
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Read max offset from CSS (design-controlled)
  const maxOffset = parseFloat(
    getComputedStyle(eye).getPropertyValue("--pupil-max-offset")
  );

  // Avoid division by zero
  if (distance === 0) {
    eye.style.setProperty("--pupil-x", "0px");
    eye.style.setProperty("--pupil-y", "0px");
    return;
  }

  // Normalize direction
  const nx = dx / distance;
  const ny = dy / distance;

  // Clamp distance
  const clampedDistance = Math.min(distance, maxOffset);

  // Reconstruct clamped vector
  const pupilX = nx * clampedDistance;
  const pupilY = ny * clampedDistance;

  // Write to CSS variables
  eye.style.setProperty("--pupil-x", `${pupilX}px`);
  eye.style.setProperty("--pupil-y", `${pupilY}px`);
}
