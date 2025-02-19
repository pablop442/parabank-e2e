import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage";
import ProfileMainPage from "../../pageObject/ProfileMainPage";
import UserFixture from "../../../support/types";
import NewAccountPage from "../../pageObject/NewAccountPage";

const homePage = new HomePage();
const profileMainPage = new ProfileMainPage
const newAccountPage = new NewAccountPage();

const successNewAccountMessage: string = 'Account Opened!';
const defaultAccountBalance: string = '$100.00'

beforeEach(function () {
    cy.fixture('users.json').as('users');
  });
  

  Given('I am logged into ParaBank', function () {
    cy.visit(Cypress.env("url") + "/index.htm");
  
    cy.get<UserFixture>('@users').then((users) => {
      const userName: string = users.correct_user.user_name;
      const password: string = users.correct_user.password;
      const firstName: string = users.correct_user.first_name;
      const lastName: string = users.correct_user.last_name;
  
      homePage.getUserNameInput().type(userName);
      homePage.getPasswordInput().type(password);
      homePage.getLoginButton()
        .should('be.visible')
        .should('not.be.disabled')
        .click();
  
      profileMainPage.getWelcomeMessage().should(
        "contain.text",
        `Welcome ${firstName} ${lastName}`
      );
    });
  });

When('I open a new Savings account', function() {
    homePage.getOpenNewAccountLink().click();
    newAccountPage.getAccountTypeDropdown()
    .select('1')
    .should('have.value', '1');
    newAccountPage.getAccountIdDropdown().select(0);
    newAccountPage.getOpenNewAccountButton()
      .should('be.visible')
      .should('not.be.disabled')
      .click();
    newAccountPage.getAccountOpenedMessage()
    .should('contain.text', successNewAccountMessage);

    newAccountPage.getNewAccountNumber()
    .should('be.visible')
    .invoke('text')
    .then((newAccountId)=>{
        cy.wrap(newAccountId).as('newAccountId')
    })   
})

Then('I see a new account created in my accounts overview page', function(){
    cy.get('@newAccountId').then((newAccountId)=>{
      const accountIdString = String(newAccountId);

      newAccountPage.getAccountOverviewLink().click();

      newAccountPage.getAccountNumberColumn()
      .contains(accountIdString)
      .should('be.visible'); 
    })  
})

Then('I see a new account details with correct balance', function(){
  cy.get('@newAccountId').then((newAccountId)=>{
    const accountIdString = String(newAccountId);

    newAccountPage.getAccountOverviewLink().click();
    cy.log(`Account ID: ${newAccountId}`);

    newAccountPage.getAccountNumberColumn()
    .contains(accountIdString)
    .should('be.visible')
    .click(); 
  })  

  newAccountPage.getAccountDetailsBalance()
  .should('contain.text', defaultAccountBalance);
})