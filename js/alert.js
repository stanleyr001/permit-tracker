$("#alert-button").click(function() {
    $("#contact-info").hide();
    $("#alert-info").show();
    $("#tracker").removeClass("alert-success");
    $("#tracker").addClass("alert-danger");
    console.log("Testing...");
});
