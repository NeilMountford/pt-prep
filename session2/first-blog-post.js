//function on ready when the document is loaded

$(function() {
    
    //on click event binded to a button id named btnPost

    $( "#btnPost" ).click(function() {

        //get the textarea content for the post
        var content = $("#content").val();
       
        //adding single post but update content
        $("#posts").text(content);

        //adding multiple posts
       // $("body").append('<p>'+content+'</p>');

       //clear textarea 
       $('#content').val('');

      });

});