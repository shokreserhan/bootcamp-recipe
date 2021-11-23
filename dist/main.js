let render = new Renderer();

$("#searchButton").on("click", function() {
    let ingredientName = $("#ingredientName").val()

    $.get(`/recipes/${ingredientName}`, function(result) {
        render.render(result)
    })
})

$("#recipesData").on("click", "img", function() {
    alert($(this).closest(".recipe").find("ul").find("li:first-child").text())
})