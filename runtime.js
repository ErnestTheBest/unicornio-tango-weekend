const backToTopLink = document.querySelector("#back-to-top");
const topMarker = document.querySelector("#top");

function setBackToTopVisibility(isVisible) {
  backToTopLink.classList.toggle("is-visible", isVisible);
  backToTopLink.setAttribute("aria-hidden", String(!isVisible));
  backToTopLink.tabIndex = isVisible ? 0 : -1;
}

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

