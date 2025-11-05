let lastScroll = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("header-hide");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("header-hide")) {
    // cuộn xuống → ẩn header
    header.classList.add("header-hide");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("header-hide")
  ) {
    // cuộn lên → hiện header
    header.classList.remove("header-hide");
  }

  lastScroll = currentScroll;
});
