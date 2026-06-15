// Progressive-enhancement effects: scroll reveal + custom cursor.
// Everything here is additive — if it never runs, the site still works.

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal elements with [data-reveal] or legacy .wow as they enter the viewport.
// A MutationObserver keeps it working across client-side route changes.
export function initReveal() {
  if (prefersReducedMotion()) return () => {};

  document.documentElement.classList.add("reveal-ready");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  const observeAll = (root) => {
    if (!(root instanceof Element) && root !== document) return;
    const scope = root === document ? document : root;
    scope
      .querySelectorAll("[data-reveal], .wow")
      .forEach((el) => io.observe(el));
  };

  observeAll(document);

  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.matches?.("[data-reveal], .wow")) io.observe(node);
        observeAll(node);
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });

  return () => {
    io.disconnect();
    mo.disconnect();
  };
}

// Trailing dot + ring cursor that reacts to interactive elements.
export function initCursor() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine || prefersReducedMotion()) return () => {};

  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.classList.add("has-custom-cursor");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let raf;

  const onMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  };

  const loop = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(loop);
  };

  const hoverSel = 'a, button, [role="button"], input, textarea, .project-card';
  const onOver = (e) => {
    if (e.target.closest(hoverSel)) document.body.classList.add("cursor-hover");
  };
  const onOut = (e) => {
    if (e.target.closest(hoverSel))
      document.body.classList.remove("cursor-hover");
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseover", onOver);
  document.addEventListener("mouseout", onOut);
  loop();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseover", onOver);
    document.removeEventListener("mouseout", onOut);
    dot.remove();
    ring.remove();
    document.body.classList.remove("has-custom-cursor", "cursor-hover");
  };
}
