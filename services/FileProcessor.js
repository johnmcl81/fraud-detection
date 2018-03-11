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
    const stats = fs.statSync(this.filePath)
    const fileSizeInBytes = stats.size

    if (fileSizeInBytes > 0) {
      for (let line of lines) {
        let items = line.split(',')
        let order = new Order({
          orderId: items[0],
          dealId: items[1],
          email: items[2],
          street: items[3],
          city: items[4],
          state: items[5],
          zipCode: items[6],
          creditCard: items[7]
        })
        order.normalize()
        orders.push(order)
      }
    }
    return orders
  }
}

module.exports = FileProccesor
