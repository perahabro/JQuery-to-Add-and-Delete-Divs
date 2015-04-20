($(document).ready(function() {
    var dvjQuery = null;
    $('#btnAdd').attr('disabled','disabled');
    
    $("#dvjQuery").hover(function() {
        $(this).addClass('highlight');
    }, function() {
        $(this).removeClass('highlight');
    });

    $('#btnEmpty').click(function() {
        dvjQuery = $("#dvjQuery").remove();
        $(this).attr('disabled','disabled');
        $('#btnEmpty').removeAttr('disabled');
    });
    
    $('#btnAdd').click(function() {
        $("#dvParent").html(dvjQuery);
         $(this).attr('disabled','disabled');
        $('#btnRemove').removeAttr('disabled');
    });
});
) ();