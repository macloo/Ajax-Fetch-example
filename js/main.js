$( document ).ready(function() {


// just one event listener for all the buttons
$('button').on('click', function() {

  // get value from the data attribute in the button element
  // -- it's different for each button --
  var data = $(this).data('state');

  // below is a jQuery Ajax request to an HTML file
  $.ajax({
    url: "states.html",
    dataType: "html",
    success: function(response) {
      // jQuery .each() lets us examine each element in a JS object
      $( response ).each(function( index ) {
        // look at full HTML contents of each element
        var stuff = $( response ).get(index);
        // check if the ID of the element matches the button clicked
        if (stuff.id === data) {
          // write the complete element into the open page if it matches
          // -- it's a DIV that picks up the CSS already loaded for the page --
          $( '#content' ).html( stuff );
          return;
        } // end if
      }); // end .each()
    }     // end success
  });     // end .ajax()

}); // end button listener


}); // close document ready
