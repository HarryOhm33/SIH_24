const login_observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("login-show");
    } else {
      entry.target.classList.remove("login-show");
    }
  });
});

const login = document.querySelectorAll(".login-card");
login.forEach((el) => login_observe.observe(el));

const signup_observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("signup-show");
    } else {
      entry.target.classList.remove("signup-show");
    }
  });
});

const signup = document.querySelectorAll(".signup-card");
signup.forEach((el) => login_observe.observe(el));
