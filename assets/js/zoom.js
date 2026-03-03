// Initialize medium zoom.
$(document).ready(function () {
  const navbarHeight = document.querySelector("#navbar")?.offsetHeight ?? 0;
  const zoomMargin = 24 + navbarHeight;
  document.documentElement.style.setProperty("--medium-zoom-safe-space", `${zoomMargin * 2}px`);

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: zoomMargin,
  });
});
