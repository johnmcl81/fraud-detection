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
          if (current.dealId === next.dealId
            && current.email === next.email
            && current.creditCard !== next.creditCard) {
            isFraudulent = true
          }

          if (current.dealId === next.dealId
            && current.state === next.state
            && current.zipCode === next.zipCode
            && current.street === next.street
            && current.city === next.city
            && current.creditCard !== next.creditCard) {
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
}

module.exports = FraudChecker
