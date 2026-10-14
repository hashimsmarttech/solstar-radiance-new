document.addEventListener('DOMContentLoaded', function () {

  /* ===== Mobile Nav Toggle ===== */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  /* ===== FAQ Accordion ===== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ===== File Upload Label ===== */
  const fileInput = document.getElementById('fileUpload');
  const fileLabel = document.getElementById('fileLabel');
  const chooseFileBtn = document.getElementById('chooseFileBtn');
  if (fileInput && chooseFileBtn) {
    chooseFileBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      fileLabel.textContent = fileInput.files.length ? fileInput.files[0].name : 'No file chosen';
    });
  }

  /* ===== Assessment Form Submit ===== */
  const form = document.getElementById('assessmentForm');
  const successMsg = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }
      successMsg.classList.remove('error');
      successMsg.textContent = "Thanks! We'll reach out shortly with your solar proposal.";

      const formData = new FormData(form);

      fetch(form.getAttribute('action'), {
        method: 'POST',
        body: formData
      })
        .then(res => res.ok ? res.json().catch(() => ({ success: true })) : Promise.reject())
        .then(() => {
          successMsg.classList.add('show');
          form.reset();
          fileLabel.textContent = 'No file chosen';
        })
        .catch(() => {
          successMsg.textContent = "Something went wrong sending your request. Please WhatsApp us instead, or try again.";
          successMsg.classList.add('show', 'error');
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          setTimeout(() => successMsg.classList.remove('show'), 6000);
        });
    });
  }

  /* ===== Active nav link on scroll ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  if (sections.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.getAttribute('id');
      });
      navLinks.forEach(link => {
        const hash = link.getAttribute('href').split('#')[1];
        link.classList.remove('active');
        if (hash === current) link.classList.add('active');
      });
    });
  }

  /* ===== Projects page filter ===== */
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');
  if (filterPills.length && projectCards.length) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        projectCards.forEach(card => {
          const show = filter === 'all' || card.getAttribute('data-category') === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ===== Sticky header shadow on scroll ===== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    else header.style.boxShadow = 'none';
  });

});
