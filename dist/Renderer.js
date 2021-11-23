function render(playersData) {

    $("#playersData").empty()
    let source = $("#player-template").html()
    let template = Handlebars.compile(source)
    let newHTML = template({ player: playersData })
    $("#playersData").append(newHTML)

}