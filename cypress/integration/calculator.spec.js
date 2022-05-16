describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it("should update the display of the running total when multiple numbers are clicked", () => {
    cy.get("#number3").click();
    cy.get("#number3").click();
    cy.get("#number5").click();
    cy.get("#number9").click();
    cy.get(".display").should("contain", "3359");
  });

  it("should do the arithmetical operations and update the running total shown on the display", () => {
    cy.get("#number4").click();
    cy.get("#operator-add").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "10");
  });

  it("should chain multiple operations together", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number8").click();
    cy.get("#operator-multiply").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "28");
  });

  it("should output as expected for calculations with very large numbers", () => {
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get(".display").should("contain", "5555555555");
    cy.get("#operator-divide").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "1111111111");
  });

  it("should output as expected for calculations with negative numbers", () => {
    cy.get("#number9").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-8");
    cy.get("#operator-multiply").click();
    cy.get("#number8").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-712");
  });

  it("should output as expected for calculations using decimals/not whole numbers", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number2").click();
    cy.get("#number5").click();
    cy.get(".display").should("contain", "0.25");
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "48");
    cy.get("#operator-divide").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "5.333333333333333");
  });

  it("should return undefined when dividing a number by zero", () => {
    cy.get("#number5").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Undefined");
  });
});