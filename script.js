const centerScrollToHash = (hash) => {
  if (!hash || hash === "#") {
    return;
  }

  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  const rect = target.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const centeredTop = absoluteTop - (window.innerHeight / 2) + (rect.height / 2);

  window.scrollTo({
    top: Math.max(0, centeredTop),
    behavior: "smooth"
  });
};

document.querySelectorAll("[data-scroll-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (!hash || !hash.startsWith("#")) {
      return;
    }

    event.preventDefault();
    centerScrollToHash(hash);
    history.pushState(null, "", hash);
  });
});

window.addEventListener("load", () => {
  if (document.body.dataset.page === "home" && window.location.hash) {
    centerScrollToHash(window.location.hash);
  }
});
