// export const user = {
//   userName: Cypress.env("USER_NAME"),
//   password: Cypress.env("PASSWORD"),
// };

// export const chosenPhone = {};

export interface User {
  userName: string;
  password: string;
}

export const user: User = {
  userName: Cypress.env("USER_NAME"),
  password: Cypress.env("PASSWORD"),
};

export interface ChosenPhone {
  title: string;
  price: number;
}

export const chosenPhone: ChosenPhone = {
  title: "",
  price: 0
};