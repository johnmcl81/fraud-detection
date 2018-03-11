const path = require('path')

const paths = {
  baseFilePath: path.join(__dirname, 'Files/')
}

const rules = {
  addressCheck: {
    dealId: true,
    state: true,
    zipCode: true,
    street: true,
    city: true,
    creditCard: false
  },
  emailCheck: {
    dealId: true,
    email: true,
    creditCard: false
  }
}

module.exports = {paths, rules}
