$(document).ready(function(){

   $("h1").click(function(){
    $("h1").fadeOut(1200);
		
 });
 
 $("h2").click(function(){
      $( "h2" ).clone().appendTo( ".goodbye" );	  
 });
 
 $( "p" ).bind( "click", function() {
  alert( $( this ).text() );
 
});

$( document ).on( "click", function( event ) {
  $( event.target ).closest( "li" ).toggleClass( "hilight" );
});
 
 });