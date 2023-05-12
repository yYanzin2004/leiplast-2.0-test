let inputs = document.querySelectorAll(".summary-input");
let sumButton = document.querySelector(".summary-button");
let inputError = document.querySelectorAll(".input-error");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneformat = /^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$/;
sumButton.addEventListener("click", function () {
  inputs.forEach((element, index) => {
    if (element.value == "") {
      errorTrigger("blank");
    } else {
      inputError[index].classList.remove("input-error-active");
    }
    if (inputs[1].value.match(mailformat)) {
      console.log("email foi");
    } else {
      errorTrigger("email");
    }

    function errorTrigger(type) {
      if (type == "blank") {
        inputError[index].classList.add("input-error-active");
        inputError[index].innerHTML = "Preencha esse campo";
      } else if (type == "email") {
        inputError[1].classList.add("input-error-active");
        inputError[1].innerHTML = "E-mail invalido";
      }
    }
  });
});

console.log(inputs);
