const input = document.querySelector(".money-input");
const button = document.querySelector(".button");
const calculatorButton = document.querySelector(".calculator");
const cursesButton = document.querySelector(".curses");

const calcSideForm = document.querySelector(".calc-side-form");
const mainContainer = document.querySelector(".common-container");
const container = document.querySelector(".container");
const form1 = document.querySelector("#first-form");
const form2 = document.querySelector("#second-form");
const label = document.querySelector("#money");

calculatorButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  cursesButton.classList.remove("color");
  calculatorButton.classList.add("color");
  calcSideForm.style.display = "flex";
  form1.classList.add("form-active");
  form2.classList.add("form-active");
});
cursesButton.addEventListener("click", () => {
  calculatorButton.classList.remove("color");
  mainContainer.style.display = "flex";
  cursesButton.classList.add("color");
  calcSideForm.style.display = "none";
});

input.addEventListener("click", () => {
  label.classList.add("transition");
});

input.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    label.classList.remove("transition");
  }
});

const convertMoney = (data) => {
  input.addEventListener("keyup", (e) => {
    const secondOption = document.querySelector("#second-lister");
    const secondInput = document.querySelector(".second-input");
    const { rates } = data;
    const { GEL, GBP, USD, EUR } = rates;
    let option = secondOption.value;
    let multiply = 1;
    if (option === "USD") {
      multiply = (input.value * USD).toFixed(3);
      secondInput.setAttribute("placeholder", multiply);
    } else if (option === "GBP") {
      multiply = (input.value * GBP).toFixed(3);
      secondInput.setAttribute("placeholder", multiply);
    } else if (option === "EUR") {
      multiply = (input.value * EUR).toFixed(3);
      secondInput.setAttribute("placeholder", multiply);
    } else if (option === "GEL") {
      multiply = input.value * GEL;
      secondInput.setAttribute("placeholder", multiply);
    }
    secondOption.addEventListener("change", () => {
      const { rates } = data;
      const { GEL, GBP, USD, EUR } = rates;
      let option = secondOption.value;
      let multiply = 1;
      if (option === "USD") {
        multiply = (input.value * USD).toFixed(3);
        secondInput.setAttribute("placeholder", multiply);
      } else if (option === "GBP") {
        multiply = (input.value * GBP).toFixed(3);
        secondInput.setAttribute("placeholder", multiply);
      } else if (option === "EUR") {
        multiply = (input.value * EUR).toFixed(3);
        secondInput.setAttribute("placeholder", multiply);
      } else if (option === "GEL") {
        multiply = input.value * GEL;
        secondInput.setAttribute("placeholder", multiply);
      }
    });
  });
};

const usdInGel = (data) => {
  const outerListItem = document.querySelector(".list-item");

  const { rates } = data;
  const { GEL, USD, EUR, GBP } = rates;
  const gela = `${GEL}`;

  const li = document.createElement("li");
  li.classList.add("inner-li");
  li.innerHTML = `${gela}`;
  outerListItem.appendChild(li);
};
const eurInGel = (data) => {
  const outerListItem = document.querySelector(".list-item");

  const { rates } = data;
  const { GEL, USD, EUR, GBP } = rates;
  const gel = `${GEL}`;

  const li = document.createElement("li");
  li.classList.add("inner-li");
  li.innerHTML = `${gel}`;
  outerListItem.appendChild(li);
};

const gbpInGEL = () => {
  const outerListItem = document.querySelector(".list-item");

  const { rates } = data;
  const { GEL, USD, EUR, GBP } = rates;
  const gela = `${GEL}`;

  const li = document.createElement("li");
  li.classList.add("inner-li");
  li.innerHTML = `${gela}`;
  outerListItem.appendChild(li);
};

const getCurrencyGEL = async () => {
  try {
    const result = await fetch(
      "https://api.exchangerate-api.com/v4/latest/GEL"
    );
    const data = await result.json();
    if (!result.ok) {
      const error = new Error(data.message);
      throw error;
    }
    convertMoney(data);
  } catch (error) {
    alert(error);
  }
};

const getCurrencyUSD = async () => {
  try {
    const result = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await result.json();
    if (!result.ok) {
      const error = new Error(data.message);
      throw error;
    }
    eurInGel(data);
  } catch (error) {
    alert(error);
  }
};
const getCurrencyEUR = async () => {
  try {
    const result = await fetch(
      "https://api.exchangerate-api.com/v4/latest/EUR"
    );
    const data = await result.json();
    if (!result.ok) {
      const error = new Error(data.message);
      throw error;
    }
    eurInGel(data);
  } catch (error) {
    alert(error);
  }
};
const getCurrencyGBP = async () => {
  try {
    const result = await fetch(
      "https://api.exchangerate-api.com/v4/latest/GBP"
    );
    const data = await result.json();
    if (!result.ok) {
      const error = new Error(data.message);
      throw error;
    }
    eurInGel(data);
  } catch (error) {
    alert(error);
  }
};

getCurrencyUSD();
getCurrencyEUR();
getCurrencyGBP();
getCurrencyGEL();
