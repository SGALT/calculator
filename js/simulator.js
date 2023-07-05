


const roomInput = document.getElementById("room");
const formulaSelect = document.getElementById("formula");
const engagementCheckbox = document.getElementById("engagement");
const packOptionCheckbox = document.getElementById("pack-option");
const optiontext = document.getElementById("optiontext");
const moduleChoice = document.getElementById("moduleChoice");
const resultContainer = document.getElementById("resultContainer");

roomInput.addEventListener("input", calculatePrice);
formulaSelect.addEventListener("change", calculatePrice);
engagementCheckbox.addEventListener("change", calculatePrice);
packOptionCheckbox.addEventListener("change", calculatePrice);

function calculatePrice() {
  const maxRooms = parseInt(roomInput.value);
  const selectedFormula = formulaSelect.value;
  const formulaNumber = selectedFormula.replace("basique", "");
  const numberOfFormula = parseInt(formulaNumber);

  const price = pricesHelper(selectedFormula, maxRooms, numberOfFormula);
  const option = packOption(selectedFormula);
  const modChoice = modOption(selectedFormula);

  if (isNaN(price)) {
    resultCont.textContent = `Prix : 0€/Mois`;
  } else {
    resultCont.textContent = `Prix : ${price.toFixed(2)}€/Mois`;
  }
  optiontext.textContent = `${option}`;
  moduleChoice.innerHTML = `${modChoice}`;
}

function packOption(selectedFormula) {
  if (packOptionCheckbox.checked) {
    if (selectedFormula != "premium" && engagementCheckbox.checked) {
      return "+100€ pour le pack option clé en main, il sera facturé le premier mois";
    } else if (selectedFormula != "premium" && !engagementCheckbox.checked) {
      return "+200€ pour le pack option clé en main, il sera facturé le premier mois";
    } else {
      return "Le pack option clé est déja compris dans la formule premium";
    }
  } else {
    return "";
  }
}

function modOption(selectedFormula) {
  if (!engagementCheckbox.checked) {
    if (selectedFormula != "base") {
      return "+150€ pour le module Imprimante, facturé le premier mois. L'engagement d'1 an vous dispense de cette somme.";
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function pricesHelper(selectedFormula, maxRooms, numberOfFormula) {

  if (engagementCheckbox.checked) {
    if (selectedFormula === "base") {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.5;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + (maxRooms - 10) * 1;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + (maxRooms - 20) * 0.75;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + (maxRooms - 50) * 0.5;
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + (maxRooms - 100) * 0.25;
      }
    } else if (numberOfFormula == 1) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + maxRooms * 0.75;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + 10 * 0.75 + (maxRooms - 10) * 1 + (maxRooms - 10) * 0.5;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + 10 * 0.75 + 10 * 0.5 + (maxRooms - 20) * 0.75 + (maxRooms - 20) * 0.38;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 10 * 0.75 + 10 * 0.5 + 30 * 0.38 + (maxRooms - 50) * 0.5 + (maxRooms - 50) * 0.25;
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + 10 * 0.75 + 10 * 0.5 + 30 * 0.38 + 50 * 0.25 + (maxRooms - 100) * 0.25 + (maxRooms - 100) * 0.13;
      }
    } else if (numberOfFormula == 2) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + ((maxRooms * 0.75) * 2);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + ((10 * 0.75) * 2) + (maxRooms - 10) * 1 + (((maxRooms - 10) * 0.5) * 2);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + ((10 * 0.75) * 2) + ((10 * 0.5) * 2) + (maxRooms - 20) * 0.75 + (((maxRooms - 20) * 0.38 ) * 2);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + ((10 * 0.75) * 2) + ((10 * 0.5) * 2) + ((30 * 0.38) * 2) + (maxRooms - 50) * 0.5 + (((maxRooms - 50) * 0.25) * 2);
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + ((10 * 0.75) * 2) + ((10 * 0.5) * 2) + ((30 * 0.38) * 2) + ((50 * 0.25) * 2) + (maxRooms - 100) * 0.25 + (((maxRooms - 100) * 0.13) * 2);
      }
    } else if (numberOfFormula == 3) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + ((maxRooms * 0.75) * 3);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + ((10 * 0.75) * 3) + (maxRooms - 10) * 1 + (((maxRooms - 10) * 0.5) * 3);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + ((10 * 0.75) * 3) + ((10 * 0.5) * 3) + (maxRooms - 20) * 0.75 + (((maxRooms - 20) * 0.38 ) * 3);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + ((10 * 0.75) * 3) + ((10 * 0.5) * 3) + ((30 * 0.38) * 3) + (maxRooms - 50) * 0.5 + (((maxRooms - 50) * 0.25) * 3);
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + ((10 * 0.75) * 3) + ((10 * 0.5) * 3) + ((30 * 0.38) * 3) + ((50 * 0.25) * 3) + (maxRooms - 100) * 0.25 + (((maxRooms - 100) * 0.13) * 3);
      }
    } else if (numberOfFormula == 4) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + ((maxRooms * 0.75) * 4);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + ((10 * 0.75) * 4) + (maxRooms - 10) * 1 + (((maxRooms - 10) * 0.5) * 4);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + ((10 * 0.75) * 4) + ((10 * 0.5) * 4) + (maxRooms - 20) * 0.75 + (((maxRooms - 20) * 0.38 ) * 4);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + ((10 * 0.75) * 4) + ((10 * 0.5) * 4) + ((30 * 0.38) * 4) + (maxRooms - 50) * 0.5 + (((maxRooms - 50) * 0.25) * 4);
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + ((10 * 0.75) * 4) + ((10 * 0.5) * 4) + ((30 * 0.38) * 4) + ((50 * 0.25) * 4) + (maxRooms - 100) * 0.25 + (((maxRooms - 100) * 0.13) * 4);
      }
    } else if (numberOfFormula == 5) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + ((maxRooms * 0.75) * 5);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + ((10 * 0.75) * 5) + (maxRooms - 10) * 1 + (((maxRooms - 10) * 0.5) * 5);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + ((10 * 0.75) * 5) + ((10 * 0.5) * 5) + (maxRooms - 20) * 0.75 + (((maxRooms - 20) * 0.38 ) * 5);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + ((10 * 0.75) * 5) + ((10 * 0.5) * 5) + ((30 * 0.38) * 5) + (maxRooms - 50) * 0.5 + (((maxRooms - 50) * 0.25) * 5);
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + ((10 * 0.75) * 5) + ((10 * 0.5) * 5) + ((30 * 0.38) * 5) + ((50 * 0.25) * 5) + (maxRooms - 100) * 0.25 + (((maxRooms - 100) * 0.13) * 5);
      }
    } else if (numberOfFormula == 6) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1,5 + ((maxRooms * 0.75) * 6);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.5 + ((10 * 0.75) * 6) + (maxRooms - 10) * 1 + (((maxRooms - 10) * 0.5) * 6);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.5 + 10 * 1 + ((10 * 0.75) * 6) + ((10 * 0.5) * 6) + (maxRooms - 20) * 0.75 + (((maxRooms - 20) * 0.38 ) * 6);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + ((10 * 0.75) * 6) + ((10 * 0.5) * 6) + ((30 * 0.38) * 6) + (maxRooms - 50) * 0.5 + (((maxRooms - 50) * 0.25) * 6);
        default:
          return 10 * 1.5 + 10 * 1 + 30 * 0.75 + 50 * 0.5 + ((10 * 0.75) * 6) + ((10 * 0.5) * 6) + ((30 * 0.38) * 6) + ((50 * 0.25) * 6) + (maxRooms - 100) * 0.25 + (((maxRooms - 100) * 0.13) * 6);
      }
    } else if (selectedFormula === "premium") {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 5;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 5 + (maxRooms - 10) * 3;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 5 + 10 * 3 + (maxRooms - 20) * 2;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 5 + 10 * 3 + 30 * 2 + (maxRooms - 50) * 1.5;
        default:
          return 10 * 5 + 10 * 3 + 30 * 2 + 50 * 1.5 + (maxRooms - 100) * 1;
      }
    } else {
      return 0;
    }
  } else {
    if (selectedFormula === "base") {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + (maxRooms - 10) * 1.2;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + (maxRooms - 20) * 0.9;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + (maxRooms - 50) * 0.6;
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + (maxRooms - 100) * 0.3;
      }
    } else if (numberOfFormula == 1) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + maxRooms * 0.9;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + 10 * 0.9 + (maxRooms - 10) * 1.2 + (maxRooms - 10) * 0.6;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + 10 * 0.9 + 10 * 0.6 + (maxRooms - 20) * 0.9 + (maxRooms - 20) * 0.45;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 10 * 0.9 + 10 * 0.6 + 30 * 0.45 + (maxRooms - 50) * 0.6 + (maxRooms - 50) * 0.3;
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + 10 * 0.9 + 10 * 0.6 + 30 * 0.45 + 50 * 0.3 + (maxRooms - 100) * 0.3 + (maxRooms - 100) * 0.15;
      }
    } else if (numberOfFormula == 2) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + ((maxRooms * 0.9) * 2);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + ((10 * 0.9) * 2) + (maxRooms - 10) * 1.2 + (((maxRooms - 10) * 0.6) * 2);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + ((10 * 0.9) * 2) + ((10 * 0.6) * 2) + (maxRooms - 20) * 0.9 + (((maxRooms - 20) * 0.45 ) * 2);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + ((10 * 0.9) * 2) + ((10 * 0.6) * 2) + ((30 * 0.45) * 2) + (maxRooms - 50) * 0.6 + (((maxRooms - 50) * 0.3) * 2);
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + ((10 * 0.9) * 2) + ((10 * 0.6) * 2) + ((30 * 0.45) * 2) + ((50 * 0.3) * 2) + (maxRooms - 100) * 0.3 + (((maxRooms - 100) * 0.15) * 2);
      }
    } else if (numberOfFormula == 3) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + ((maxRooms * 0.9) * 3);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + ((10 * 0.9) * 3) + (maxRooms - 10) * 1.2 + (((maxRooms - 10) * 0.6) * 3);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + ((10 * 0.9) * 3) + ((10 * 0.6) * 3) + (maxRooms - 20) * 0.9 + (((maxRooms - 20) * 0.45 ) * 3);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + ((10 * 0.9) * 3) + ((10 * 0.6) * 3) + ((30 * 0.45) * 3) + (maxRooms - 50) * 0.6 + (((maxRooms - 50) * 0.3) * 3);
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + ((10 * 0.9) * 3) + ((10 * 0.6) * 3) + ((30 * 0.45) * 3) + ((50 * 0.3) * 3) + (maxRooms - 100) * 0.3 + (((maxRooms - 100) * 0.15) * 3);
      }
    } else if (numberOfFormula == 4) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + ((maxRooms * 0.9) * 4);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + ((10 * 0.9) * 4) + (maxRooms - 10) * 1.2 + (((maxRooms - 10) * 0.6) * 4);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + ((10 * 0.9) * 4) + ((10 * 0.6) * 4) + (maxRooms - 20) * 0.9 + (((maxRooms - 20) * 0.45 ) * 4);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + ((10 * 0.9) * 4) + ((10 * 0.6) * 4) + ((30 * 0.45) * 4) + (maxRooms - 50) * 0.6 + (((maxRooms - 50) * 0.3) * 4);
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + ((10 * 0.9) * 4) + ((10 * 0.6) * 4) + ((30 * 0.45) * 4) + ((50 * 0.3) * 4) + (maxRooms - 100) * 0.3 + (((maxRooms - 100) * 0.15) * 4);
      }
    } else if (numberOfFormula == 5) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + ((maxRooms * 0.9) * 5);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + ((10 * 0.9) * 5) + (maxRooms - 10) * 1.2 + (((maxRooms - 10) * 0.6) * 5);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + ((10 * 0.9) * 5) + ((10 * 0.6) * 5) + (maxRooms - 20) * 0.9 + (((maxRooms - 20) * 0.45 ) * 5);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + ((10 * 0.9) * 5) + ((10 * 0.6) * 5) + ((30 * 0.45) * 5) + (maxRooms - 50) * 0.6 + (((maxRooms - 50) * 0.3) * 5);
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + ((10 * 0.9) * 5) + ((10 * 0.6) * 5) + ((30 * 0.45) * 5) + ((50 * 0.3) * 5) + (maxRooms - 100) * 0.3 + (((maxRooms - 100) * 0.15) * 5);
      }
    } else if (numberOfFormula == 6) {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 1.8 + ((maxRooms * 0.9) * 6);
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 1.8 + ((10 * 0.9) * 6) + (maxRooms - 10) * 1.2 + (((maxRooms - 10) * 0.6) * 6);
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 1.8 + 10 * 1.2 + ((10 * 0.9) * 6) + ((10 * 0.6) * 6) + (maxRooms - 20) * 0.9 + (((maxRooms - 20) * 0.45 ) * 6);
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + ((10 * 0.9) * 6) + ((10 * 0.6) * 6) + ((30 * 0.45) * 6) + (maxRooms - 50) * 0.6 + (((maxRooms - 50) * 0.3) * 6);
        default:
          return 10 * 1.8 + 10 * 1.2 + 30 * 0.9 + 50 * 0.6 + ((10 * 0.9) * 6) + ((10 * 0.6) * 6) + ((30 * 0.45) * 6) + ((50 * 0.3) * 6) + (maxRooms - 100) * 0.3 + (((maxRooms - 100) * 0.15) * 6);
      }
    } else if (selectedFormula === "premium") {
      switch (true) {
        case maxRooms >= 0 && maxRooms <= 10:
          return maxRooms * 6;
        case maxRooms >= 11 && maxRooms <= 20:
          return 10 * 6 + (maxRooms - 10) * 3.6;
        case maxRooms >= 21 && maxRooms <= 50:
          return 10 * 6 + 10 * 3.6 + (maxRooms - 20) * 2.4;
        case maxRooms >= 51 && maxRooms <= 100:
          return 10 * 6 + 10 * 3.6 + 30 * 2.4 + (maxRooms - 50) * 1.8;
        default:
          return 10 * 6 + 10 * 3.6 + 30 * 2.4 + 50 * 1.8 + (maxRooms - 100) * 1.2;
      }
    } else {
      return 0;
    }
  }
}
