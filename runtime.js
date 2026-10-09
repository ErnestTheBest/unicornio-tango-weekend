const backToTopLink = document.querySelector("#back-to-top");
const topMarker = document.querySelector("#top");

function setBackToTopVisibility(isVisible) {
  backToTopLink.classList.toggle("is-visible", isVisible);
  backToTopLink.setAttribute("aria-hidden", String(!isVisible));
  backToTopLink.tabIndex = isVisible ? 0 : -1;
}

function setupScrollUnicorn() {
  const unicorn = document.querySelector(".scroll-unicorn");
  const racer = unicorn?.querySelector(".scroll-unicorn-racer");
  if (!racer) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let previousScrollY = Math.max(0, window.scrollY);
  let scrollFrame = 0;
  let stopTimer = 0;

  function stopRunning() {
    window.clearTimeout(stopTimer);
    stopTimer = 0;
    unicorn.classList.remove("is-running");
  }

  function updateRunner() {
    scrollFrame = 0;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const scrollY = Math.min(maxScroll, Math.max(0, window.scrollY));
    const scrollDelta = scrollY - previousScrollY;
    previousScrollY = scrollY;

    if (scrollDelta === 0 || reducedMotion.matches || document.hidden || maxScroll === 0) {
      stopRunning();
      return;
    }

    const travel = Math.max(0, unicorn.clientWidth - racer.offsetWidth);
    racer.style.transform = `translate3d(${((scrollY / maxScroll) * travel).toFixed(1)}px, 0, 0)`;
    unicorn.classList.toggle("is-reversed", scrollDelta < 0);
    unicorn.classList.add("is-running");
    window.clearTimeout(stopTimer);
    stopTimer = window.setTimeout(stopRunning, 220);
  }

  function resetRunner() {
    window.cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
    previousScrollY = Math.max(0, window.scrollY);
    stopRunning();
  }

  window.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateRunner);
  }, { passive: true });
  window.addEventListener("resize", resetRunner, { passive: true });
  document.addEventListener("visibilitychange", resetRunner);
  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", resetRunner);
  } else {
    reducedMotion.addListener(resetRunner);
  }
}

setupScrollUnicorn();

if ("IntersectionObserver" in window) {
  const topObserver = new IntersectionObserver(([entry]) => {
    setBackToTopVisibility(!entry.isIntersecting);
  });

  topObserver.observe(topMarker);
} else {
  const updateBackToTopVisibility = () => setBackToTopVisibility(window.scrollY > 88);
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();
}
