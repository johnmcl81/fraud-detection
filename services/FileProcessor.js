const fs = require('fs')
const config = require('../config')
const Order = require('../models/Order.js')

class FileProccesor {
  constructor (fileName) {
    this.filePath = config.baseFilePath + fileName
  }

  getOrders () {
    let orders = []
    let fileContent = fs.readFileSync(this.filePath, 'utf8')
    let lines = fileContent.split('\n')
    for (let line of lines) {
      let items = line.split(',')

      let order = new Order({
        orderId: Number(items[0]),
        dealId: Number(items[1]),
        email: items[2].toLowerCase(),
        street: items[3].toLowerCase(),
        city: items[4].toLowerCase(),
        state: items[5].toLowerCase(),
        zipCode: items[6],
        creditCard: items[7]
      })
      order.normalize()
      orders.push(order)
    }
    return orders
  }
}

module.exports = FileProccesor
