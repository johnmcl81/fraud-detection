const helpers = require('../helpers/helpers.js')
const config = require('../config')

class FraudChecker {
  constructor (ordersList) {
    this.orders = ordersList
  }

  fraudResults () {
    // CHECK FRAUD
    try {
      let fraudResults = []
      for (let i = 0; i < this.orders.length; i++) {
        let current = this.orders[i]
        let isFraudulent = false

        for (let j = i + 1; j < this.orders.length; j++) {
          isFraudulent = false
          let next = this.orders[j]

          // Check order has all non null entries
          let isInvalid = helpers.hasNull(next)

          // Perform validation checks based on rules defined in config
          let isRepeatedEmail = this.isRepeatedEmail(current, next)
          let isRepeatedAddress = this.isRepeatedAddress(current, next)

          // Set isFraudulent depending on rule results
          if (isInvalid || isRepeatedEmail || isRepeatedAddress) {
            isFraudulent = true
          }

          if (typeof isFraudulent === 'undefined') {
            throw TypeError('isFraudulent is not defined')
          } else {
            if (isFraudulent) {
              fraudResults.push({
                isFraudulent: true,
                orderId: next.orderId
              })
            }
          }
        }
      }

      return fraudResults
    } catch (e) {
      return e
    }
  }

  isRepeatedAddress (current, next) {
    return this.checkRule(config.rules.addressCheck, current, next)
  }

  isRepeatedEmail (current, next) {
    return this.checkRule(config.rules.emailCheck, current, next)
  }

  checkRule (rule, current, next) {
    let conditionsMet = []
    for (var property in rule) {
      if (rule.hasOwnProperty(property)) {
        if ((rule[property] === true && current[property] === next[property]) || (rule[property] === false && current[property] !== next[property])) {
          conditionsMet.push(true)
        } else {
          conditionsMet.push(false)
        }
      }
    }
    let ruleMet = conditionsMet.every(function (item, index, array) {
      return item === true
    })
    return ruleMet
  }
}

module.exports = FraudChecker
