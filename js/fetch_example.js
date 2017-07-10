$( document ).ready(function() {


// just one event listener for all the buttons
$('button').on('click', function() {

  // get value from the data attribute in the button element
  // -- it's different for each button --
  var data = $(this).data('state');

  // below is the Fetch API getting an HTML file
  fetch('states.html')
    // make sure it worked; => is ES6
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.text();
      }
    })
    // use the data we received ( response.text() )
    .then(text => {
      // jQuery .each() lets us examine each element in a JS object
      $( text ).each(function( index ) {
        // look at full HTML contents of each element
        var stuff = $( text ).get(index);
        // check if the ID of the element matches the button clicked
        if (stuff.id === data) {
          // write the complete element into the open page if it matches
          // -- it's a DIV that picks up the CSS already loaded for the page --
          $( '#content' ).html( stuff );
          return;
        } // end if
      }); // end .each()
    })
    // catch errors such as File Not Found
    .catch(error => {
      var foobar = error;
      alert('Looks like there was a problem: \n\n' + foobar);
    });

}); // end button listener


}); // close document ready
