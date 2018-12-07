// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".catch").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/pokemon/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        console.log("catching Pokemon");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPokemon = {
      pokeName: $("#name").val().trim(),
      pokeNumber: parseInt($("#number").val().trim())
    };

    // Send the POST request.
    $.ajax("/api/pokemon", {
      type: "POST",
      data: newPokemon
    }).then(
      function() {
        console.log("Adding Pokemon to DB");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
