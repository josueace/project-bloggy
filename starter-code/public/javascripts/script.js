$(document).ready( () => {
	
  var simplemde = new SimpleMDE();
	
  
  $('#donew').click( function(e) 
  {e.preventDefault(); 
  
   $('#newblog').click();
   
  return false; } 
  );
  
  

  $('#save').click(function(event){
    
    if ($('#mypic').val().length==0 ||
    $('#cat').val().length==0 ||
    $('#tag').val().length==0 ||
    $('#comment').val().length==0 ||
    $('#title').val().length==0 
      ){
      alert('All fields are required');
      event.preventDefault(); 
      }
    else
    $('#blogform').submit();
 
 });

 $('#textareaID').bind('input propertychange', function() {

  $("#yourBtnID").hide();

  if(this.value.length){
    $("#yourBtnID").show();
  }
});
  
  
})
