document.addEventListener("DOMContentLoaded", function () {
  const label = document.getElementById("frDevelop");
  const text = label.innerText;

  label.innerHTML = text
    .split("")
    .map(
      (letter, idx) =>
        `<span style='transition-delay:${idx * 50}ms'>${letter}</span>`
    )
    .join("");

  const spans = label.querySelectorAll("span");

  let colorIdx = 0;
  const intervalId = setInterval(() => {
    spans[colorIdx].classList.add("change-color");
    colorIdx++;

    if (colorIdx === spans.length) {
      clearInterval(intervalId);
    }
  }, 50);

  const skills = document.querySelectorAll(".skill");

  function checkBoxes() {
    const skills = document.querySelectorAll(".skill");
    if (window.innerWidth <= 1024) {
      skills.forEach((skill) => {
        skill.classList.add("show");
      });
    } else if (window.innerWidth >= 1024) {
      const trigger = (window.innerHeight / 5) * 4;

      skills.forEach((skill) => {
        const top = skill.getBoundingClientRect().top;
        if (top < trigger) {
          skill.classList.add("show");
        } else {
          skill.classList.remove("show");
        }
      });
    }
  }

  checkBoxes()
  window.addEventListener("scroll", checkBoxes);

  const pages = document.querySelectorAll(".intWork");
  const right = document.getElementById("right");
  const left = document.getElementById("left");

  let activeSlide = 0;
  const pag = pages.length;

  right.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide === pag) {
      activeSlide = 0;
    }
    setActiveSlide();
  });

  left.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = pag - 1;
    }
    setActiveSlide();
  });

  function setActiveSlide() {
    pages.forEach((page, index) => {
      if (index === activeSlide) {
        page.classList.remove("way");
      } else {
        page.classList.add("way");
      }
    });
  }

  const background = document.getElementById("background");

  window.addEventListener("scroll", function () {
    const overlay = background;
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)
    })`;
  });
});
