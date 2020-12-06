let tl = gsap.timeline();

tl.from("nav", { duration: 0.5, opacity: 0 })
  .from(".lines, .dots", {
    duration: 0.5,
    opacity: 0,
  })
  .from(".myPic", {
    duration: 0.5,
    opacity: 0,
  })
  .from(".hey", {
    duration: 0.5,
    y: 50,
    opacity: 0,
  });

gsap.from(".stretchTop", {
  scrollTrigger: {
    trigger: ".stretchTop",
    start: "10px 90%",
    end: "-50px",
    scrub: 0.4,
  },
  width: 0,
  duration: 0.4,
});

gsap.from(".about p", {
  scrollTrigger: ".about",
  opacity: 0,
  y: 150,
  duration: 1.5,
});

gsap.from(".stretchBottom", {
  scrollTrigger: {
    trigger: ".stretchBottom",
    start: "10px 90%",
    end: "-50px",
    scrub: 0.4,
  },
  width: 0,
  duration: 0.4,
});

document.querySelectorAll(".item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "20px 80%",
    },
    opacity: 0,
    y: 50,
    rotate: 3,
    stagger: 0.2,
    duration: 0.5,
  });
});

let homeTrigger = document.querySelector(".homeTrigger"),
  aboutTrigger = document.querySelector(".aboutTrigger"),
  portfolioTrigger = document.querySelector(".portfolioTrigger"),
  contactTrigger = document.querySelector(".contactTrigger"),
  contactMeTrigger = document.querySelector(".contactMeTrigger");

homeTrigger.onclick = () => {
  if (liTrigger.classList.contains("triggered")) {
    liTrigger.classList.remove("triggered");
    toggleMenu.reverse();
    gsap.to(window, {
      duration: 0.2,
      scrollTo: "header",
      ease: "power2.out",
      delay: 0.8,
    });
  } else {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: "header",
      ease: "power2.out",
    });
  }
};

aboutTrigger.onclick = () => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: { y: ".about", offsetY: 75 },
    ease: "power2.out",
  });
};

portfolioTrigger.onclick = () => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".portfolio",
    ease: "power2.out",
  });
};

contactTrigger.onclick = () => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".contact",
    ease: "power2.out",
  });
};

contactMeTrigger.onclick = () => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".contact",
    ease: "power2.out",
  });
};

let toggleMenu = gsap.timeline(),
  liTrigger = document.querySelector(".liBtn"),
  aboutTriggerMenu = document.querySelector(".aboutTriggerMenu"),
  portfolioTriggerMenu = document.querySelector(".portfolioTriggerMenu"),
  contactTriggerMenu = document.querySelector(".contactTriggerMenu");

toggleMenu
  .to(".liBtn span", {
    duration: 0.2,
    width: 0,
    ease: "power2.out",
  })
  .to(".liBtn span.a", {
    duration: 0,
    delay: 0.2,
    margin: "4px 10.5px",
    transform: "rotate(45deg)",
    ease: "power2.out",
  })
  .to(".liBtn span.b", {
    duration: 0,
    margin: "4px 10.5px",
    ease: "power2.out",
  })
  .to(
    ".liBtn span.c",
    {
      duration: 0,
      delay: 0.5,
      margin: "4px 10.5px",
      transform: "rotate(-45deg)",
      ease: "power2.out",
    },
    "-=0.5"
  )
  .to(".liBtn span.a,.liBtn span.c", {
    duration: 0.2,
    delay: 0.2,
    width: "25px",
    ease: "power2.out",
  })
  .to(".menu", {
    duration: 0.5,
    display: "flex",
    opacity: 1,
    ease: "power2.out",
  })
  .from(".menu ul li", {
    duration: 0.2,
    y: 50,
    opacity: 0,
    stagger: 0.3,
  })
  .pause();

liTrigger.onclick = () => {
  liTrigger.classList.toggle("triggered");
  if (liTrigger.classList.contains("triggered")) {
    toggleMenu.play();
  } else {
    toggleMenu.reverse();
  }
};

aboutTriggerMenu.onclick = () => {
  liTrigger.classList.toggle("triggered");
  toggleMenu.reverse();
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".about",
    ease: "power2.out",
    delay: 0.8,
  });
};
portfolioTriggerMenu.onclick = () => {
  liTrigger.classList.toggle("triggered");
  toggleMenu.reverse();
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".portfolio",
    ease: "power2.out",
    delay: 0.8,
  });
};
contactTriggerMenu.onclick = () => {
  liTrigger.classList.toggle("triggered");
  toggleMenu.reverse();
  gsap.to(window, {
    duration: 0.2,
    scrollTo: ".contact",
    ease: "power2.out",
    delay: 0.8,
  });
};

aboutTrigger.onmouseenter = () => {
  aboutTrigger.textContent = "_";
  gsap.to(aboutTrigger, {
    duration: 0.3,
    text: {
      value: "About",
    },
    ease: "none",
  });
};
portfolioTrigger.onmouseenter = () => {
  portfolioTrigger.textContent = "_";
  gsap.to(portfolioTrigger, {
    duration: 0.3,
    text: {
      value: "Portfolio",
    },
    ease: "none",
  });
};
contactTrigger.onmouseenter = () => {
  contactTrigger.textContent = "_";
  gsap.to(contactTrigger, {
    duration: 0.3,
    text: {
      value: "Contact",
    },
    ease: "none",
  });
};

gsap.to(aboutTrigger, {
  duration: 1,
  text: {
    value: "About",
  },
  ease: "none",
});
gsap.to(portfolioTrigger, {
  duration: 1,
  text: {
    value: "Portfolio",
  },
  ease: "none",
});
gsap.to(contactTrigger, {
  duration: 1,
  text: {
    value: "Contact",
  },
  ease: "none",
});

gsap.from(".contact .row .col", {
  scrollTrigger: ".contact .row",
  opacity: 0,
  y: "5%",
  duration: 0.6,
  stagger: 0.5,
});

gsap.from(".socials a", {
  scrollTrigger: ".socials",
  opacity: 0,
  y: "-150px",
  duration: 0.3,
  stagger: 0.4,
});

gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "0px 105%",
  },
  opacity: 0,
  y: "5%",
  duration: 0.5,
});
