var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  }
)
  it('it should add numbers', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    actual = calculator.runningTotal;
    expected = 5;
    assert.strictEqual(actual, expected);
  });
  it('it should subtract numbers', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4)
    actual = calculator.runningTotal;
    expected = 3
    assert.strictEqual(actual, expected);
  });
  it('it should multiply numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5)
    actual = calculator.runningTotal;
    expected = 15
    assert.strictEqual(actual, expected);
  });
  it('it should divide numbers', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7)
    actual = calculator.runningTotal;
    expected = 3
    assert.strictEqual(actual, expected);
  });

});
