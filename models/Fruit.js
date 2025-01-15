const fruits = require("../fruits.json")

class Fruit {
  constructor({genus, name, id, family, order, nutritions}) {
    this.genus = genus
    this.name = name
    this.id = id
    this.family = family
    this.order = order
    this.nutritions = nutritions
  }

  static showAll = () => {
    return fruits.map((f) => new Fruit(f))
  }

  static show = (name) => {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
    if (fruit) {
      return new Fruit(fruit)
    } else {
      throw Error("The fruit doesn't exist.")
    }
  }

  static create = (data) => {
    const newFruit = data
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

    if (fruit) {
      throw "The fruit already exists."
    } else {
      newFruit["id"] = fruits.length + 1
      fruits.push(newFruit)

      return new Fruit(newFruit)
    }
  }


  update(data){
    console.log(this)
    const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

    console.log('data', data)
    console.log('updatedFruit', updatedFruit)
    if (updatedFruit){
      updatedFruit.name = data.name
      updatedFruit.family = data.family
      return new Fruit(updatedFruit)
    } else {
      throw "Fruit not found"
    }
  }


  destroy() {
    const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

    if (deleteFruit) {
      const index = fruits.indexOf(deletedFruit)
      fruits.splice(index, 1)
    } else {
      throw "Fruit not found"
    }
  }

}

module.exports = Fruit
