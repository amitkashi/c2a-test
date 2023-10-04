import { chosenPhone } from "../utils/globalVars";
export function choosePhone(phones) {
  cy.then(() => {
    let smallestPrice = Infinity;
    let phoneWithSmallestPrice;

    for (let i = 0; i < phones.length; i++) {
      if (phones[i].price < smallestPrice) {
        smallestPrice = phones[i].price;
        phoneWithSmallestPrice = phones[i].title;
      }
    }
    chosenPhone.title = phoneWithSmallestPrice;
    chosenPhone.price = smallestPrice;
    cy.wait(2000);
    cy.contains(phoneWithSmallestPrice).click();
  });
}
