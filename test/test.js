const chai = require('chai'); 
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    console.log('expected :>> ', expected);
    it(`${x} в степени 3 будет ${expected}`, function() {
      chai.expect(pow(x, 3)).equal(expected);
    });
  }

  for (let x = 1; x <= 7; x++) {
    makeTest(x);
  }
});



