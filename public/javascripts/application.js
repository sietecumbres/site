$(document).ready(function(){
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
});

function chooseButton(element, style){ 
  if(element.className) 
    element.className=style;
}