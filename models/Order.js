// Order is a base class
class Order {
  constructor (order) {
    this.orderId = order.orderId
    this.dealId = order.dealId
    this.email = order.email
    this.street = order.street
    this.city = order.city
    this.state = order.state
    this.zipCode = order.zipCode
    this.creditCard = order.creditCard
  }

  normalize () {
    // Normalize email
    let aux = this.email.split('@')
    let atIndex = aux[0].indexOf('+')
    aux[0] = atIndex < 0 ? aux[0].replace('.', '') : aux[0].replace('.', '').substring(0, atIndex - 1)
    this.email = aux.join('@')

    // Normalize street
    this.street = this.street.replace('st.', 'street').replace('rd.', 'road')

    // Normalize state
    this.state = this.street.replace('il', 'illinois').replace('ca', 'california').replace('ny', 'new york')
  }
}

module.exports = Order
