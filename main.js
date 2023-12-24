let form = document.querySelector("form");

let username = document.querySelector("#user");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errors = document.querySelector("#errors");

console.log(errors);

const re =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
error_list = [];

form.addEventListener("submit", (e) => {
  allErrors = document.getElementsByClassName("newitem");

  if (allErrors.length >= 3) {
    e.preventDefault();
    document.querySelector("#button").value = "Reset";
  } else {
    if (username.value == "") {
      error_list.push("Please Enter Valid Username");
    }
    if (password.value.length <= 6) {
      error_list.push("Password Must be Greater Than 6 Chracters");
    }
    if (re.test(email.value) == false) {
      error_list.push("Please Enter Valid Email");
    }

    if (error_list.length > 0) {
      e.preventDefault();
      error_list.forEach((element) => {
        items_list = document.createElement("li");
        items_list.classList.add("newitem");
        items_list.innerText = element;
        errors.appendChild(items_list);
      });
    }
  }
  //   console.log(allErrors.length);
});
