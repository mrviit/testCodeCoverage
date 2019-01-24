import { expect } from "chai";

// tslint:disable-next-line:no-var-requires
const Calculator = require("./Calculator");
// tslint:disable-next-line:no-var-requires
// const Calculator = require("../../src/helper/Calculator");

const cal = new Calculator();

describe("calculate", () => {
  it("add", () => {
    const result = cal.Sum(5, 2);
    expect(result).equal(7);
  });

  it("substract", () => {
    const result = cal.Difference(5, 2);
    expect(result).equal(3);
  });
});
