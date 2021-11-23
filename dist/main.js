$("#searchButton").on("click", function() {
    let TeamName = $("#teamName").val()

    $.get(`/teams/${TeamName}`, function(result) {
        render(result)
    })
})