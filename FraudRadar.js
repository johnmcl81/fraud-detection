const FileProcessor = require('./services/FileProcessor.js')
const FraudChecker = require('./services/FraudChecker.js')
const util = require('util')

class FraudRadar {
  // required options (fileName)
  constructor (options) {
    this.orders = new FileProcessor(options.fileName).getOrders()
  }

  check () {
    let fraudResults = []
    // CHECK ORDERS LIST FOR FRAUD
    if (this.orders && this.orders.size !== 0) {
      fraudResults = new FraudChecker(this.orders).fraudResults()
      console.log('fraudResults: ' + util.inspect(fraudResults))
    } else {
      console.log('no orders found')
    }

    return fraudResults
  }
}

module.exports = { FraudRadar }
