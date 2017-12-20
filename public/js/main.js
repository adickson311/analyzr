$(document).ready(function() {

  // Place JavaScript code here...

  $.getJSON('api/getMatches', function(data){
    console.log(data);
  });

});
