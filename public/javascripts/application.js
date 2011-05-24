$(document).ready(function(){
	$(document).mousemove(function(e){
		$('#status').html(e.pageX +', '+ e.pageY);
		
		// Marco
		if(e.pageY >= 596 && e.pageX >= 668 && e.pageX <= 738 && e.pageY <= 675)
		{
			$('#foto_marco').removeClass('front');
			$('#foto_marco').addClass('left');
		} 
	});
});

function chooseButton(element, style){ 
  if(element.className) 
    element.className=style;
}