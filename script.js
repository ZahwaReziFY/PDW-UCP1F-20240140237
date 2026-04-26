window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    let target = this.getAttribute("href");

    if (target && !target.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 300);
    }
  });
});