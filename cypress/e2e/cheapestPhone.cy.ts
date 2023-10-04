import { choosePhone } from "../support/functions/functions";
import { elementsId } from "../support/utils/elementsId";
import { user, chosenPhone } from "../support/utils/globalVars";

const phones = [];

describe("cheapest phone", () => {
  it("visit url", () => {
    cy.visit("/");
  });

  it("login", () => {
    cy.clickOnElement(elementsId.navBar.loginBtn.id);
    cy.wait(2000);
    cy.get(elementsId.login.loginModal.section).within(() => {
      cy.get(elementsId.login.loginModal.id).should(
        "have.text",
        elementsId.login.loginModal.text
      );
    });
  });

  it("enter username and password", () => {
    cy.wait(2000);
    cy.get(elementsId.login.userName.id).type(user.userName);
    cy.get(elementsId.login.password.id).type(user.password);
  });

  it("press on login", () => {
    cy.contains("button", elementsId.login.btn.text).click();
  });

  it("choose phone category", () => {
    cy.wait(2000);
    cy.get(elementsId.homePage.phoneCategory.id).within(() => {
      cy.clickOnElementContains(elementsId.homePage.phoneCategory.text);
    });
  });

  it("choose cheapest phone", () => {
    cy.get(elementsId.homePage.cards.id).within(() => {
      cy.get(elementsId.homePage.card.id).each(($card) => {
        cy.wrap($card)
          .find("h5")
          .invoke("text")
          .then((priceText) => {
            const price = parseInt(priceText.replace(/\D/g, ""));

            cy.wrap($card)
              .find("a")
              .invoke("text")
              .then((phoneName) => {
                const title = phoneName;
                phones.push({ title, price });
              });
          });
      });
    });
    choosePhone(phones);
  });

  it("add to cart", () => {
    cy.wait(2000);
    cy.clickOnElementContains(elementsId.productPage.addToCartBtn.text);
  });

  it("navigate to the cart", () => {
    cy.clickOnElement(elementsId.navBar.cartBtn.id);
  });

  it("verify product", () => {
    cy.get(elementsId.cart.cartTable.itemTitle.id)
      .invoke("text")
      .then((text) => {
        expect(text).to.eq(chosenPhone.title);
      });
  });
});
