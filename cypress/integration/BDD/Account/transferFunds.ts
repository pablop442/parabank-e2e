import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage";
import ProfileMainPage from "../../pageObject/ProfileMainPage";
import UserFixture from "../../../support/types";
import TransferFundsPage from "../../pageObject/TransferFundsPage";

const homePage = new HomePage();
const profileMainPage = new ProfileMainPage;
const transferFundsPage = new TransferFundsPage();

const amountToTransfer: string = '1.00'

beforeEach(function () {
    cy.fixture('users.json').as('users');
  });

  When('I transfer funds from my Checking account to my Savings account', function() {
    homePage.getTransferFundsLink().click();
    transferFundsPage.getAmountInput().type(amountToTransfer);
    transferFundsPage.getFromAccountSelect().select('12345');
    transferFundsPage.getFromAccountSelect().select('54321');
    transferFundsPage.getTransferButton().click();
  });

  Then('I see the funds transferred successfully', function() {
    transferFundsPage.getTransferCompletedMessage().should('contain.text', 'Transfer Complete!');
    transferFundsPage.getTransferedAmountText().should('contain.text', `$${amountToTransfer}`);
  });

