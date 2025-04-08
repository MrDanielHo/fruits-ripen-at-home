const fruits = require('../fruits.json')

function getFruit (name) {

    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

    if (fruit == undefined) {
        res.status(404).send('The fruit does not exist.')
    } else {
        res.status(200).send(fruit)
    }
}

module.exports = getFruit