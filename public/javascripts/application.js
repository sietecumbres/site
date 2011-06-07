$(document).ready(function(){
		
	$('#skills-nav-btn').click(function() {
	  $('#arrow').css('display', 'block');
	  $('#arrow').css('top', '325px');
	});
	$('#team-nav-btn').click(function() {
	  $('#arrow').css('display', 'block');
	  $('#arrow').css('top', '380px');
	});
	$('#contact-nav-btn').click(function() {
	  $('#arrow').css('display', 'block');
	  $('#arrow').css('top', '435px');
	});
	
	/* SLIDER */
	$(".main_image .desc").show(); //Show Banner
	$(".main_image .block").animate({ opacity: 0.85 }, 1 ); //Set Opacity
	
	$(".image_thumb ul li:first").addClass('active'); //Add the active class (highlights the very first list item by default)
	$(".image_thumb ul li").click(function(){
	    //Set Variables
	    var imgAlt = $(this).find('img').attr("alt"); //Get Alt Tag of Image
	    var imgTitle = $(this).find('a').attr("href"); //Get Main Image URL
	    var imgDesc = $(this).find('.block').html();  //Get HTML of the "block" container
	    var imgDescHeight = $(".main_image").find('.block').height(); //Find the height of the "block"

	    if ($(this).is(".active")) {  //If the list item is active/selected, then...
	        return false; // Don't click through - Prevents repetitive animations on active/selected list-item
	    } else { //If not active then...
	        //Animate the Description
	        $(".main_image .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() { //Pull the block down (negative bottom margin of its own height)
	            $(".main_image .block").html(imgDesc).animate({ opacity: 0.85,  marginBottom: "0" }, 250 ); //swap the html of the block, then pull the block container back up and set opacity
	            $(".main_image img").attr({ src: imgTitle , alt: imgAlt}); //Switch the main image (URL + alt tag)
	        });
	    }
	    //Show active list-item
	    $(".image_thumb ul li").removeClass('active'); //Remove class of 'active' on all list-items
	    $(this).addClass('active');  //Add class of 'active' on the selected list
	
			$(".desc .block").show();
			$("a.collapse").removeClass("show");
				
	    return false;

	}) .hover(function(){ //Hover effects on list-item
	    $(this).addClass('hover'); //Add class "hover" on hover
	    }, function() {
	    $(this).removeClass('hover'); //Remove class "hover" on hover out
	});
	
	$(".desc .block").show();
	$("a.collapse").show();

	$('a.collapse').click(function(){
		$("a.collapse").toggleClass("show");
		$(".desc .block").slideToggle();
	});
	
	/*
	$("a.collapse").click(function(){
	    $(".main_banner .block").slideToggle(); //Toggle the description (slide up and down)
	    $("a.collapse").toggleClass("show"); //Toggle the class name of "show" (the hide/show tab)
	});
	*/
	
	/*
	$(document).mousemove(function(e){
		
		// Marco
		var marco = $("#foto_marco");
		var mp = marco.position();
		
		var left = mp.left + 20;
		var right = mp.left + 91;
		var top = mp.top + 6;
		var below = mp.top + 86;
		
		if(e.pageY >= top && e.pageX >= left && e.pageX <= right && e.pageY <= below)
		{
			$('#foto_marco').removeClass('left');
			$('#foto_marco').removeClass('right');
			$('#foto_marco').removeClass('up');
			$('#foto_marco').removeClass('down');
			$('#foto_marco').removeClass('down_left');
			$('#foto_marco').removeClass('down_right');
			$('#foto_marco').removeClass('top_right');
			$('#foto_marco').removeClass('top_left');
			$('#foto_marco').addClass('front');
		} else 
		{
			if(e.pageY <= below && e.pageY >= top && e.pageX <= left)
			{
				$('#foto_marco').removeClass('front');
				$('#foto_marco').removeClass('right');
				$('#foto_marco').removeClass('up');
				$('#foto_marco').removeClass('down');
				$('#foto_marco').removeClass('down_left');
				$('#foto_marco').removeClass('down_right');
				$('#foto_marco').removeClass('top_right');
				$('#foto_marco').removeClass('top_left');
				$('#foto_marco').addClass('left');
			} else
			{
				if(e.pageY <= below && e.pageY >= top && e.pageX >= right)
				{
					$('#foto_marco').removeClass('front');
					$('#foto_marco').removeClass('left');
					$('#foto_marco').removeClass('up');
					$('#foto_marco').removeClass('down');
					$('#foto_marco').removeClass('down_left');
					$('#foto_marco').removeClass('down_right');
					$('#foto_marco').removeClass('top_right');
					$('#foto_marco').removeClass('top_left');
					$('#foto_marco').addClass('right');
				} else
				{
					if(e.pageX <= right && e.pageX >= left && e.pageY <= top)
					{
						$('#foto_marco').removeClass('front');
						$('#foto_marco').removeClass('left');
						$('#foto_marco').removeClass('right');
						$('#foto_marco').removeClass('down');
						$('#foto_marco').removeClass('down_left');
						$('#foto_marco').removeClass('down_right');
						$('#foto_marco').removeClass('top_right');
						$('#foto_marco').removeClass('top_left');
						$('#foto_marco').addClass('up');
					} else
					{
						if(e.pageX <= right && e.pageX >= left && e.pageY >= below)
						{
							$('#foto_marco').removeClass('front');
							$('#foto_marco').removeClass('left');
							$('#foto_marco').removeClass('right');
							$('#foto_marco').removeClass('up');
							$('#foto_marco').removeClass('down_left');
							$('#foto_marco').removeClass('down_right');
							$('#foto_marco').removeClass('top_right');
							$('#foto_marco').removeClass('top_left');
							$('#foto_marco').addClass('down');
						} else
						{
							if(e.pageX <= left && e.pageY <= top)
							{
								$('#foto_marco').removeClass('front');
								$('#foto_marco').removeClass('left');
								$('#foto_marco').removeClass('right');
								$('#foto_marco').removeClass('up');
								$('#foto_marco').removeClass('down');
								$('#foto_marco').removeClass('down_left');
								$('#foto_marco').removeClass('down_right');
								$('#foto_marco').removeClass('top_right');
								$('#foto_marco').addClass('top_left');
							} else
							{
								if(e.pageX >= right && e.pageY <= top)
								{
									$('#foto_marco').removeClass('front');
									$('#foto_marco').removeClass('left');
									$('#foto_marco').removeClass('right');
									$('#foto_marco').removeClass('up');
									$('#foto_marco').removeClass('down');
									$('#foto_marco').removeClass('down_left');
									$('#foto_marco').removeClass('down_right');
									$('#foto_marco').removeClass('top_left');
									$('#foto_marco').addClass('top_right');
								} else
								{
									if(e.pageX <= left && e.pageY >= below)
									{
										$('#foto_marco').removeClass('front');
										$('#foto_marco').removeClass('left');
										$('#foto_marco').removeClass('right');
										$('#foto_marco').removeClass('up');
										$('#foto_marco').removeClass('down');
										$('#foto_marco').removeClass('top_right');
										$('#foto_marco').removeClass('down_right');
										$('#foto_marco').removeClass('top_left');
										$('#foto_marco').addClass('down_left');
									} else
									{
										if(e.pageX >= right && e.pageY >= below)
										{
											$('#foto_marco').removeClass('front');
											$('#foto_marco').removeClass('left');
											$('#foto_marco').removeClass('right');
											$('#foto_marco').removeClass('up');
											$('#foto_marco').removeClass('down');
											$('#foto_marco').removeClass('top_right');
											$('#foto_marco').removeClass('down_left');
											$('#foto_marco').removeClass('top_left');
											$('#foto_marco').addClass('down_right');
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		// Juan
		var juan = $("#foto_juan");
		var jp = juan.position();
		
		var left = jp.left + 20;
		var right = jp.left + 91;
		var top = jp.top + 6;
		var below = jp.top + 86;
		
		if(e.pageY >= top && e.pageX >= left && e.pageX <= right && e.pageY <= below)
		{
			$('#foto_juan').removeClass('left');
			$('#foto_juan').removeClass('right');
			$('#foto_juan').removeClass('up');
			$('#foto_juan').removeClass('down');
			$('#foto_juan').removeClass('down_left');
			$('#foto_juan').removeClass('down_right');
			$('#foto_juan').removeClass('top_right');
			$('#foto_juan').removeClass('top_left');
			$('#foto_juan').addClass('front');
		} else 
		{
			if(e.pageY <= below && e.pageY >= top && e.pageX <= left)
			{
				$('#foto_juan').removeClass('front');
				$('#foto_juan').removeClass('right');
				$('#foto_juan').removeClass('up');
				$('#foto_juan').removeClass('down');
				$('#foto_juan').removeClass('down_left');
				$('#foto_juan').removeClass('down_right');
				$('#foto_juan').removeClass('top_right');
				$('#foto_juan').removeClass('top_left');
				$('#foto_juan').addClass('left');
			} else
			{
				if(e.pageY <= below && e.pageY >= top && e.pageX >= right)
				{
					$('#foto_juan').removeClass('front');
					$('#foto_juan').removeClass('left');
					$('#foto_juan').removeClass('up');
					$('#foto_juan').removeClass('down');
					$('#foto_juan').removeClass('down_left');
					$('#foto_juan').removeClass('down_right');
					$('#foto_juan').removeClass('top_right');
					$('#foto_juan').removeClass('top_left');
					$('#foto_juan').addClass('right');
				} else
				{
					if(e.pageX <= right && e.pageX >= left && e.pageY <= top)
					{
						$('#foto_juan').removeClass('front');
						$('#foto_juan').removeClass('left');
						$('#foto_juan').removeClass('right');
						$('#foto_juan').removeClass('down');
						$('#foto_juan').removeClass('down_left');
						$('#foto_juan').removeClass('down_right');
						$('#foto_juan').removeClass('top_right');
						$('#foto_juan').removeClass('top_left');
						$('#foto_juan').addClass('up');
					} else
					{
						if(e.pageX <= right && e.pageX >= left && e.pageY >= below)
						{
							$('#foto_juan').removeClass('front');
							$('#foto_juan').removeClass('left');
							$('#foto_juan').removeClass('right');
							$('#foto_juan').removeClass('up');
							$('#foto_juan').removeClass('down_left');
							$('#foto_juan').removeClass('down_right');
							$('#foto_juan').removeClass('top_right');
							$('#foto_juan').removeClass('top_left');
							$('#foto_juan').addClass('down');
						} else
							{
							if(e.pageX <= left && e.pageY <= top)
							{
								$('#foto_juan').removeClass('front');
								$('#foto_juan').removeClass('left');
								$('#foto_juan').removeClass('right');
								$('#foto_juan').removeClass('up');
								$('#foto_juan').removeClass('down');
								$('#foto_juan').removeClass('down_left');
								$('#foto_juan').removeClass('down_right');
								$('#foto_juan').removeClass('top_right');
								$('#foto_juan').addClass('top_left');
							} else
							{
								if(e.pageX >= right && e.pageY <= top)
								{
									$('#foto_juan').removeClass('front');
									$('#foto_juan').removeClass('left');
									$('#foto_juan').removeClass('right');
									$('#foto_juan').removeClass('up');
									$('#foto_juan').removeClass('down');
									$('#foto_juan').removeClass('down_left');
									$('#foto_juan').removeClass('down_right');
									$('#foto_juan').removeClass('top_left');
									$('#foto_juan').addClass('top_right');
								} else
								{
									if(e.pageX <= left && e.pageY >= below)
									{
										$('#foto_juan').removeClass('front');
										$('#foto_juan').removeClass('left');
										$('#foto_juan').removeClass('right');
										$('#foto_juan').removeClass('up');
										$('#foto_juan').removeClass('down');
										$('#foto_juan').removeClass('top_right');
										$('#foto_juan').removeClass('down_right');
										$('#foto_juan').removeClass('top_left');
										$('#foto_juan').addClass('down_left');
									} else
									{
										if(e.pageX >= right && e.pageY >= below)
										{
											$('#foto_juan').removeClass('front');
											$('#foto_juan').removeClass('left');
											$('#foto_juan').removeClass('right');
											$('#foto_juan').removeClass('up');
											$('#foto_juan').removeClass('down');
											$('#foto_juan').removeClass('top_right');
											$('#foto_juan').removeClass('down_left');
											$('#foto_juan').removeClass('top_left');
											$('#foto_juan').addClass('down_right');
										}
									}
								}
							}
						}
					}
				}
			}
		}
	
		// Gordo
		var gordo = $("#foto_gordo");
		var gp = gordo.position();
		
		var left = gp.left + 20;
		var right = gp.left + 91;
		var top = gp.top + 6;
		var below = gp.top + 86;
		
		if(e.pageY >= top && e.pageX >= left && e.pageX <= right && e.pageY <= below)
		{
			$('#foto_gordo').removeClass('left');
			$('#foto_gordo').removeClass('right');
			$('#foto_gordo').removeClass('up');
			$('#foto_gordo').removeClass('down');
			$('#foto_gordo').removeClass('down_left');
			$('#foto_gordo').removeClass('down_right');
			$('#foto_gordo').removeClass('top_right');
			$('#foto_gordo').removeClass('top_left');
			$('#foto_gordo').addClass('front');
		} else 
		{
			if(e.pageY <= below && e.pageY >= top && e.pageX <= left)
			{
				$('#foto_gordo').removeClass('front');
				$('#foto_gordo').removeClass('right');
				$('#foto_gordo').removeClass('up');
				$('#foto_gordo').removeClass('down');
				$('#foto_gordo').removeClass('down_left');
				$('#foto_gordo').removeClass('down_right');
				$('#foto_gordo').removeClass('top_right');
				$('#foto_gordo').removeClass('top_left');
				$('#foto_gordo').addClass('left');
			} else
			{
				if(e.pageY <= below && e.pageY >= top && e.pageX >= right)
				{
					$('#foto_gordo').removeClass('front');
					$('#foto_gordo').removeClass('left');
					$('#foto_gordo').removeClass('up');
					$('#foto_gordo').removeClass('down');
					$('#foto_gordo').removeClass('down_left');
					$('#foto_gordo').removeClass('down_right');
					$('#foto_gordo').removeClass('top_right');
					$('#foto_gordo').removeClass('top_left');
					$('#foto_gordo').addClass('right');
				} else
				{
					if(e.pageX <= right && e.pageX >= left && e.pageY <= top)
					{
						$('#foto_gordo').removeClass('front');
						$('#foto_gordo').removeClass('left');
						$('#foto_gordo').removeClass('right');
						$('#foto_gordo').removeClass('down');
						$('#foto_gordo').removeClass('down_left');
						$('#foto_gordo').removeClass('down_right');
						$('#foto_gordo').removeClass('top_right');
						$('#foto_gordo').removeClass('top_left');
						$('#foto_gordo').addClass('up');
					} else
					{
						if(e.pageX <= right && e.pageX >= left && e.pageY >= below)
						{
							$('#foto_gordo').removeClass('front');
							$('#foto_gordo').removeClass('left');
							$('#foto_gordo').removeClass('right');
							$('#foto_gordo').removeClass('up');
							$('#foto_gordo').removeClass('down_left');
							$('#foto_gordo').removeClass('down_right');
							$('#foto_gordo').removeClass('top_right');
							$('#foto_gordo').removeClass('top_left');
							$('#foto_gordo').addClass('down');
						}	else
							{
							if(e.pageX <= left && e.pageY <= top)
							{
								$('#foto_gordo').removeClass('front');
								$('#foto_gordo').removeClass('left');
								$('#foto_gordo').removeClass('right');
								$('#foto_gordo').removeClass('up');
								$('#foto_gordo').removeClass('down');
								$('#foto_gordo').removeClass('down_left');
								$('#foto_gordo').removeClass('down_right');
								$('#foto_gordo').removeClass('top_right');
								$('#foto_gordo').addClass('top_left');
							} else
							{
								if(e.pageX >= right && e.pageY <= top)
								{
									$('#foto_gordo').removeClass('front');
									$('#foto_gordo').removeClass('left');
									$('#foto_gordo').removeClass('right');
									$('#foto_gordo').removeClass('up');
									$('#foto_gordo').removeClass('down');
									$('#foto_gordo').removeClass('down_left');
									$('#foto_gordo').removeClass('down_right');
									$('#foto_gordo').removeClass('top_left');
									$('#foto_gordo').addClass('top_right');
								} else
								{
									if(e.pageX <= left && e.pageY >= below)
									{
										$('#foto_gordo').removeClass('front');
										$('#foto_gordo').removeClass('left');
										$('#foto_gordo').removeClass('right');
										$('#foto_gordo').removeClass('up');
										$('#foto_gordo').removeClass('down');
										$('#foto_gordo').removeClass('top_right');
										$('#foto_gordo').removeClass('down_right');
										$('#foto_gordo').removeClass('top_left');
										$('#foto_gordo').addClass('down_left');
									} else
									{
										if(e.pageX >= right && e.pageY >= below)
										{
											$('#foto_gordo').removeClass('front');
											$('#foto_gordo').removeClass('left');
											$('#foto_gordo').removeClass('right');
											$('#foto_gordo').removeClass('up');
											$('#foto_gordo').removeClass('down');
											$('#foto_gordo').removeClass('top_right');
											$('#foto_gordo').removeClass('down_left');
											$('#foto_gordo').removeClass('top_left');
											$('#foto_gordo').addClass('down_right');
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		// Alejo
		var alejo = $("#foto_alejo");
		var ap = alejo.position();
		
		var left = ap.left + 20;
		var right = ap.left + 91;
		var top = ap.top + 6;
		var below = ap.top + 86;
		
		if(e.pageY >= top && e.pageX >= left && e.pageX <= right && e.pageY <= below)
		{
			$('#foto_alejo').removeClass('left');
			$('#foto_alejo').removeClass('right');
			$('#foto_alejo').removeClass('up');
			$('#foto_alejo').removeClass('down');
			$('#foto_alejo').removeClass('down_left');
			$('#foto_alejo').removeClass('down_right');
			$('#foto_alejo').removeClass('top_right');
			$('#foto_alejo').removeClass('top_left');
			$('#foto_alejo').addClass('front');
		} else 
		{
			if(e.pageY <= below && e.pageY >= top && e.pageX <= left)
			{
				$('#foto_alejo').removeClass('front');
				$('#foto_alejo').removeClass('right');
				$('#foto_alejo').removeClass('up');
				$('#foto_alejo').removeClass('down');
				$('#foto_alejo').removeClass('down_left');
				$('#foto_alejo').removeClass('down_right');
				$('#foto_alejo').removeClass('top_right');
				$('#foto_alejo').removeClass('top_left');
				$('#foto_alejo').addClass('left');
			} else
			{
				if(e.pageY <= below && e.pageY >= top && e.pageX >= right)
				{
					$('#foto_alejo').removeClass('front');
					$('#foto_alejo').removeClass('left');
					$('#foto_alejo').removeClass('up');
					$('#foto_alejo').removeClass('down');
					$('#foto_alejo').removeClass('down_left');
					$('#foto_alejo').removeClass('down_right');
					$('#foto_alejo').removeClass('top_right');
					$('#foto_alejo').removeClass('top_left');
					$('#foto_alejo').addClass('right');
				} else
				{
					if(e.pageX <= right && e.pageX >= left && e.pageY <= top)
					{
						$('#foto_alejo').removeClass('front');
						$('#foto_alejo').removeClass('left');
						$('#foto_alejo').removeClass('right');
						$('#foto_alejo').removeClass('down');
						$('#foto_alejo').removeClass('down_left');
						$('#foto_alejo').removeClass('down_right');
						$('#foto_alejo').removeClass('top_right');
						$('#foto_alejo').removeClass('top_left');
						$('#foto_alejo').addClass('up');
					} else
					{
						if(e.pageX <= right && e.pageX >= left && e.pageY >= below)
						{
							$('#foto_alejo').removeClass('front');
							$('#foto_alejo').removeClass('left');
							$('#foto_alejo').removeClass('right');
							$('#foto_alejo').removeClass('up');
							$('#foto_alejo').removeClass('down_left');
							$('#foto_alejo').removeClass('down_right');
							$('#foto_alejo').removeClass('top_right');
							$('#foto_alejo').removeClass('top_left');
							$('#foto_alejo').addClass('down');
						}	else
							{
							if(e.pageX <= left && e.pageY <= top)
							{
								$('#foto_alejo').removeClass('front');
								$('#foto_alejo').removeClass('left');
								$('#foto_alejo').removeClass('right');
								$('#foto_alejo').removeClass('up');
								$('#foto_alejo').removeClass('down');
								$('#foto_alejo').removeClass('down_left');
								$('#foto_alejo').removeClass('down_right');
								$('#foto_alejo').removeClass('top_right');
								$('#foto_alejo').addClass('top_left');
							} else
							{
								if(e.pageX >= right && e.pageY <= top)
								{
									$('#foto_alejo').removeClass('front');
									$('#foto_alejo').removeClass('left');
									$('#foto_alejo').removeClass('right');
									$('#foto_alejo').removeClass('up');
									$('#foto_alejo').removeClass('down');
									$('#foto_alejo').removeClass('down_left');
									$('#foto_alejo').removeClass('down_right');
									$('#foto_alejo').removeClass('top_left');
									$('#foto_alejo').addClass('top_right');
								} else
								{
									if(e.pageX <= left && e.pageY >= below)
									{
										$('#foto_alejo').removeClass('front');
										$('#foto_alejo').removeClass('left');
										$('#foto_alejo').removeClass('right');
										$('#foto_alejo').removeClass('up');
										$('#foto_alejo').removeClass('down');
										$('#foto_alejo').removeClass('top_right');
										$('#foto_alejo').removeClass('down_right');
										$('#foto_alejo').removeClass('top_left');
										$('#foto_alejo').addClass('down_left');
									} else
									{
										if(e.pageX >= right && e.pageY >= below)
										{
											$('#foto_alejo').removeClass('front');
											$('#foto_alejo').removeClass('left');
											$('#foto_alejo').removeClass('right');
											$('#foto_alejo').removeClass('up');
											$('#foto_alejo').removeClass('down');
											$('#foto_alejo').removeClass('top_right');
											$('#foto_alejo').removeClass('down_left');
											$('#foto_alejo').removeClass('top_left');
											$('#foto_alejo').addClass('down_right');
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
				
	});
	*/
});

function chooseButton(element, style){ 
  if(element.className) 
    element.className=style;
}