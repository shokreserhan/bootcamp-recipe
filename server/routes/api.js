const { json } = require('body-parser')
const express = require('express')
const { map } = require('jquery')
const urllib = require('urllib')
const router = express.Router()

let recipes = []

router.get("/sanity", function(request, response) {
    response.send("OK")
})


router.get("/recipes/:ingredient", function(request, response) {
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${request.params.ingredient}`, function(err, data, res) {
        if (err)
            throw err
        recipes = JSON.parse(data.toString()).results;
    })
    response.send(recipes)
})

module.exports = router