class Renderer {
    render(data) {
        $("#recipesData").empty()
        let source = $("#recipes-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({ recipe: data })
        $("#recipesData").append(newHTML)
    }
}