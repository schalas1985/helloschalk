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

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const textToCopy = btn.getAttribute("data-copy");
    const originalHTML = btn.innerHTML;
    navigator.clipboard.writeText(textToCopy).then(() => {
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove("copied");
      }, 2000);
    });
  });
});

var form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }
  });
});

document.querySelectorAll('.mobile-menu-toggle').forEach((toggle) => {
  toggle.addEventListener('click', function() {
    const navSide = this.closest('.nav-side');
    navSide.classList.toggle('mobile-menu-open');
  });
});
