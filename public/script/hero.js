const observe1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("hero-1-show");
    } else {
      entry.target.classList.remove("hero-1-show");
    }
  });
});

const hero1 = document.querySelectorAll(".hero-1");
hero1.forEach((el) => observe1.observe(el));

const observe2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("hero-2-show");
    } else {
      entry.target.classList.remove("hero-2-show");
    }
  });
});

const hero2 = document.querySelectorAll(".hero-2");
hero2.forEach((el) => observe2.observe(el));

const observe3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("hero-3-show");
    } else {
      entry.target.classList.remove("hero-3-show");
    }
  });
});

const hero3 = document.querySelectorAll(".hero-3");
hero3.forEach((el) => observe2.observe(el));
