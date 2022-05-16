import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  // it should: add 1 to 4 and get 5
  it("should add 1 to 4 and return 5", () => {
    const button1 = container.getByTestId("number1");
    const addButton = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("5");
  });

  // it should: subtract 4 from 7 and get 3
  it("should subtract 4 from 7 and return 3", () => {
    const button7 = container.getByTestId("number7");
    const subtractButton = container.getByTestId("operator-subtract");
    const button4 = container.getByTestId("number4");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("3");
  });

  // it should: multiply 3 by 5 and get 15
  it("should multiply 3 by 5 and return 15", () => {
    const runningTotal = container.getByTestId("running-total");
    const button3 = container.getByTestId("number3");
    const multiplyButton = container.getByTestId("operator-multiply");
    const button5 = container.getByTestId("number5");
    const equalsButton = container.getByTestId("operator-equals");
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("15");
  });

  // it should: divide 21 by 7 and get 3
  it("should divide 21 by 7 and return 3", () => {
    const runningTotal = container.getByTestId("running-total");
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const divideButton = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const equalsButton = container.getByTestId("operator-equals");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("3");
  });

  // it should: concatenate multiple number button clicks --> ie number 7394444 from clicking button num 7, then button num 3, then button num 9, then button num 4 four times
  it("should concatenate multiple button clicks", () => {
    const runningTotal = container.getByTestId("running-total");
    const button7 = container.getByTestId("number7");
    const button3 = container.getByTestId("number3");
    const button9 = container.getByTestId("number9");
    const button4 = container.getByTestId("number4");
    fireEvent.click(button7);
    fireEvent.click(button3);
    fireEvent.click(button9);
    fireEvent.click(button4);
    fireEvent.click(button4);
    fireEvent.click(button4);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("7394444");
  });

  // it should chain multiple operations together --> ie 24 / 8 * 4 + 5 - 6 = 11
  it("should chain multiple operations together", () => {
    const runningTotal = container.getByTestId("running-total");
    const button2 = container.getByTestId("number2");
    const button4 = container.getByTestId("number4");
    const button8 = container.getByTestId("number8");
    const button5 = container.getByTestId("number5");
    const button6 = container.getByTestId("number6");
    const addButton = container.getByTestId("operator-add");
    const divideButton = container.getByTestId("operator-divide");
    const multiplyButton = container.getByTestId("operator-multiply");
    const subtractButton = container.getByTestId("operator-subtract");
    const equalsButton = container.getByTestId("operator-equals");
    fireEvent.click(button2);
    fireEvent.click(button4);
    fireEvent.click(divideButton);
    fireEvent.click(button8);
    fireEvent.click(multiplyButton);
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(subtractButton);
    fireEvent.click(button6);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("11")
  });

  // it should clear the running total without affecting the calculation
  it("should clear the running total without affecting the calculation", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number1");
    const button6 = container.getByTestId("number6");
    const button4 = container.getByTestId("number4");
    const button2 = container.getByTestId("number2");
    const divideButton = container.getByTestId("operator-divide");
    const addButton = container.getByTestId("operator-add")
    const equalsButton = container.getByTestId("operator-equals");
    const clearButton = container.getByTestId("clear");
    // 16 / 4 = 4 (checkRT=4) + 2 C (checkRT=0) 6 = 10 (checkRT=10)
    fireEvent.click(button1);
    fireEvent.click(button6);
    fireEvent.click(divideButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    // check runningTotal = 4
    expect(runningTotal.textContent).toEqual("4");
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(clearButton);
    // check runningTotal = 0
    expect(runningTotal.textContent).toEqual("0");
    fireEvent.click(button6);
    fireEvent.click(equalsButton);
    //check runningTotal = 10;
    expect(runningTotal.textContent).toEqual("10")
  });
});

