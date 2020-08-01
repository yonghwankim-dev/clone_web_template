var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll(".content__slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  if (slideIndex >= x.length) {
    slideIndex = 0;
  }
  x[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(carousel, 2000);
}

const ticket__model = document.querySelector(".content__tour__ticket");
const ticket__buy = document.querySelectorAll(".ticket__buy");
const ticket__close = document.querySelectorAll(".js_close");

function on_window_ticket() {
  ticket__model.style.display = "block";
}

function close_window_ticket() {
  ticket__model.style.display = "none";
}

ticket__buy.forEach((ticket) =>
  ticket.addEventListener("click", on_window_ticket)
);
ticket__close.forEach((ticket) =>
  ticket.addEventListener("click", close_window_ticket)
);

const send = document.querySelector(".js_send");

function send_contact() {
  const name = document.querySelector(".js_name");
  const email = document.querySelector(".js_email");
  const message = document.querySelector(".js_message");

  if (name.value === "") {
    name.focus();
  }
  if (email.value === "") {
    email.focus();
  }
  if (message.value === "") {
    message.focus();
  }
}

send.addEventListener("click", send_contact);
