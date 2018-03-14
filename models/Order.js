class Order {
  constructor (order) {
    this.orderId = Number(order.orderId)
    this.dealId = Number(order.dealId)
    this.email = order.email ? order.email.toLowerCase() : null
    this.street = order.street ? order.street.toLowerCase() : null
    this.city = order.city ? order.city.toLowerCase() : null
    this.state = order.state ? order.state.toLowerCase() : null
    this.zipCode = order.zipCode ? order.zipCode : null
    this.creditCard = order.creditCard ? order.creditCard : null
  }

  normalize () {
    if (this.email) {
      let aux = this.email.split('@')
      if (aux.length > 1) {
        let atIndex = aux[0].indexOf('+')
        aux[0] = atIndex < 0 ? aux[0].replace('.', '') : aux[0].replace('.', '').substring(0, atIndex - 1)
        this.email = aux.join('@')
      } else {
        this.email = null
      }
    }

    if (this.street) {
      this.street = this.street.replace('st.', 'street').replace('rd.', 'road')
    }

    if (this.state) {
      this.state = this.street.replace('il', 'illinois').replace('ca', 'california').replace('ny', 'new york')
    }
  }
}

module.exports = Order
