const FraudRadar = require('./FraudRadar').FraudRadar
const assert = require('assert')

describe('Fraud Radar', function () {
  it('Should process the one line file', function () {
    let result = new FraudRadar({fileName: 'OneLineFile.txt'}).check()
    assert.ok(result)
    assert.equal(result.length, 0)
  })

  it('Should process the two line file in which the second is fraudulent', function () {
    let result = new FraudRadar({fileName: 'TwoLines_FraudulentSecond.txt'}).check()
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the three line file in which the second is fraudulent', function () {
    let result = new FraudRadar({fileName: 'ThreeLines_FraudulentSecond.txt'}).check()
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the four line file in which more than one order is fraudulent', function () {
    let result = new FraudRadar({fileName: 'FourLines_MoreThanOneFraudulent.txt'}).check()
    assert.ok(result)
    assert.equal(result.length, 2)
  })
})
