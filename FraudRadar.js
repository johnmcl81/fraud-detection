const FileProcessor = require('./services/FileProcessor.js')
const FraudChecker = require('./services/FraudChecker.js')

class FraudRadar {
  // required options (fileName)
  constructor (options) {
    this.orders = new FileProcessor(options.fileName).getOrders()
  }

  check () {
    // CHECK ORDERS LIST FOR FRAUD
    let fraudResults = new FraudChecker(this.orders).fraudResults()

    return fraudResults
  }
}

module.exports = { FraudRadar }
