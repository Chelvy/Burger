$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });


    $(".eat").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured") === false;
        var devouredState = {
            devoured: newDevoured
        };
        console.log('id:' + id);
        console.log('devoured:' + devouredState.devoured);

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        })
    });
});