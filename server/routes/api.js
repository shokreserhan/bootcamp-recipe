const { json } = require('body-parser')
const express = require('express')
const { map } = require('jquery')
const urllib = require('urllib')
const router = express.Router()

let recipes = []

// router.get("/teams/:teamName", function(request, response) {
//     let teamID = teamToIDs[request.params.teamName]
//     if (teamID === undefined) {
//         response.end()
//     }

//     let teamPlayers = playersData
//         .filter(player => player.teamId === teamID && player.isActive)
//         .map(player => {
//             return {
//                 firstName: player.firstName,
//                 lastName: player.lastName,
//                 jersey: player.jersey,
//                 pos: player.pos,
//             }
//         })
//     response.send(teamPlayers)
// })

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