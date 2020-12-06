let items = document.getElementsByClassName("item");
let img = document.getElementById("imgProj");
let arrow = document.getElementById("arrow");
let imageSrc = [
  "./imgs/Not-Nike.jpg",
  "./imgs/Cluse.png",
  "./imgs/Barber.jpg",
  "./imgs/Restaurant.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Array.from(document.querySelectorAll(".cursor")).forEach((elem) => {
      elem.style.display = "none";
    });
  } else {
    const showImg = (e) => {
      img.style.display = "block";
      arrow.style.display = "block";
      let x = e.pageX;
      let y = e.pageY;
      img.style.top = `${y}px`;
      img.style.left = `${x}px`;
      arrow.style.top = `${y}px`;
      arrow.style.left = `${x}px`;
      if (e.path[0].classList.contains("item"))
        e.path[0].classList.add("active");
      for (let i = 0; i <= items.length - 1; i++) {
        if (items[i].classList.contains("active")) {
          img.src = imageSrc[i];
        }
      }
      Array.from(document.querySelectorAll(".cursor")).forEach((elem) => {
        elem.style.display = "none";
      });
    };

    const hideImg = (e) => {
      img.style.display = "none";
      arrow.style.display = "none";
      e.path[0].classList.remove("active");
      Array.from(document.querySelectorAll(".cursor")).forEach((elem) => {
        elem.style.display = "block";
      });
    };

    for (let i = 0; i <= items.length - 1; i++) {
      items[i].addEventListener("mousemove", showImg);
      items[i].addEventListener("mouseleave", hideImg);
      items[i].addEventListener("click", () => {
        if (items[0].classList.contains("active"))
          window.open("https://kirolos-kr7.github.io/Not-Nike/", "_blank");
        if (items[1].classList.contains("active"))
          window.open("https://kirolos-kr7.github.io/CLUSE/", "_blank");
        if (items[2].classList.contains("active"))
          window.open(
            "https://barbershopbykirolos.000webhostapp.com",
            "_blank"
          );
        if (items[3].classList.contains("active"))
          window.open("https://kirolos-kr7.github.io/Restaurant/", "_blank");
      });
    }
    Array.from(document.querySelectorAll(".portfolio a")).forEach((elem) => {
      elem.style.display = "none";
    });
  }
});

let name = document.getElementById("name");
let mail = document.getElementById("mail");
let msg = document.getElementById("msg");

const validateName = (e) => {
  if (name.value === "") {
    name.parentElement.children[1].textContent = "Input can't be empty";
    name.parentElement.children[0].classList.add("failed");
    e.preventDefault();
  } else {
    name.parentElement.children[1].textContent = " ";
    name.parentElement.children[0].classList.add("passed");
    name.parentElement.children[0].classList.remove("failed");
  }
};

const validateMail = (e) => {
  if (mail.value === "") {
    mail.parentElement.children[1].textContent = "Input can't be empty";
    mail.parentElement.children[0].classList.add("failed");
    e.preventDefault();
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail.value
    )
  ) {
    mail.parentElement.children[1].textContent = "E-mail not valid";
    mail.parentElement.children[0].classList.add("failed");
    e.preventDefault();
  } else {
    mail.parentElement.children[1].textContent = " ";
    mail.parentElement.children[0].classList.add("passed");
    mail.parentElement.children[0].classList.remove("failed");
  }
};

const validateMsg = (e) => {
  if (msg.value === "") {
    msg.parentElement.children[1].textContent = "Input can't be empty";
    msg.parentElement.children[0].classList.add("failed");
    e.preventDefault();
  } else {
    msg.parentElement.children[1].textContent = " ";
    msg.parentElement.children[0].classList.add("passed");
    msg.parentElement.children[0].classList.remove("failed");
  }
};

const validate = (e) => {
  name.oninput = validateName(e);
  mail.oninput = validateMail(e);
  msg.oninput = validateMsg(e);
};

document.getElementById("form").onsubmit = validate;
name.addEventListener("input", validateName);
mail.addEventListener("input", validateMail);
msg.addEventListener("input", validateMsg);
