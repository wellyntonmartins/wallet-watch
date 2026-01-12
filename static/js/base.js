document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hideshow-lateral");
  const sidebar = document.querySelector(".lateral-bar");
  const content = document.querySelector(".content-section");

  const MOBILE_WIDTH = 768;

  function isMobile() {
    return window.innerWidth < MOBILE_WIDTH;
  }

  function openSidebar() {
    sidebar.classList.add("active");
    content.classList.add("blurred");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    content.classList.remove("blurred");
  }

  function toggleSidebar() {
    sidebar.classList.contains("active") ? closeSidebar() : openSidebar();
  }

  function updateButtonVisibility() {
    if (isMobile()) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
      closeSidebar();
    }
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSidebar();
  });

  document.addEventListener("click", (e) => {
    if (
      isMobile() &&
      sidebar.classList.contains("active") &&
      !e.target.closest(".lateral-bar") &&
      !e.target.closest(".hideshow-lateral")
    ) {
      closeSidebar();
    }
  });

  window.addEventListener("resize", updateButtonVisibility);
  updateButtonVisibility();
});
