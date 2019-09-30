$(document).ready( () => {
	
  var simplemde = new SimpleMDE();
	
  
  $('#donew').click( function(e) 
  {e.preventDefault(); 
  
   $('#newblog').click();
   
  return false; } 
  );
  
  $('#mysearch').click(function(event){
    $('#searchform').submit();
  });


  $('#save').click(function(event){

    if ($('#mypic').val().length==0)
    {
     alert('picture is required');
     event.preventDefault();
     return false;
    }else

    if($("#cat").attr("selectedIndex") == 0) {
      alert('category is required');
      event.preventDefault();
      return false;
    }else
    if ($('#tag').val().length==0 ){
      alert('tag is required');
      event.preventDefault();
      return false;
    }else
   
    if ($('#title').val().length==0 ){
      alert('title is required');
      event.preventDefault();
      return false;
    }else
    {
    $('#blogform').submit();
    }
 
 });

 $('#textareaID').bind('input propertychange', function() {

  $("#yourBtnID").hide();

  if(this.value.length){
    $("#yourBtnID").show();
  }
});
  
  
})
