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

export function updateEye(eye: HTMLElement) {
  const pupil = eye.querySelector<HTMLElement>(".pupil");
  if (!pupil) return;

  const onMove = (e: MouseEvent) => {
    const rect = eye.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const len = Math.hypot(dx, dy) || 1;

    // Normalized direction [-1, 1]
    const nx = dx / len;
    const ny = dy / len;

    // Convert to percentage of pupil size
    const px = nx * 50;
    const py = ny * 50;

    pupil.style.setProperty("--pupil-x", `${px}%`);
    pupil.style.setProperty("--pupil-y", `${py}%`);
  };

  eye.addEventListener("mousemove", onMove);

  return () => eye.removeEventListener("mousemove", onMove);
}

export function renderEye(
  eye: HTMLElement,
  mouse: MousePosition
) {
  const pupil = eye.querySelector<HTMLElement>(".pupil");
  if (!pupil) return;

  const rect = eye.getBoundingClientRect();

  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const dx = mouse.x - (rect.left + cx);
  const dy = mouse.y - (rect.top + cy);

  const len = Math.hypot(dx, dy) || 1;

  const nx = dx / len;
  const ny = dy / len;

  const px = nx * 50;
  const py = ny * 50;

  pupil.style.setProperty("--pupil-x", `${px}%`);
  pupil.style.setProperty("--pupil-y", `${py}%`);
}