const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const trimmedValue = e.currentTarget.value.trim();

  if (trimmedValue === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = trimmedValue;
  }
});
