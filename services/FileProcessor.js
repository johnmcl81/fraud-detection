const fs = require('fs')
const config = require('../config')
const Order = require('../models/Order.js')

class FileProccesor {
  constructor (fileName) {
    this.filePath = config.paths.baseFilePath + fileName
  }

  readFile () {
    const stats = fs.statSync(this.filePath)
    const fileSizeInBytes = stats.size
    let lines = []
    if (fileSizeInBytes > 0) {
      let fileContent = fs.readFileSync(this.filePath, 'utf8')
      lines = fileContent.split('\n')
    }

    return lines
  }

  parseDataList (objectName) {
    let lines = this.readFile()
    let objectList = []

    switch (objectName) {
      case 'orders':
        objectList = this.setOrderList(lines); break
    }

    return objectList
  }

  setOrderList (lines) {
    let orders = []

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

    return orders
  }
}

module.exports = FileProccesor
