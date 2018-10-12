$.fn.extend({'lunBo':function() {
	
	var left = 0
	var photoWidth=$(this).find('img').eq(0).width();
	var span1=$(this).find("span").eq(0);
	var span2=$(this).find("span").eq(1);
	var n = $(this).find('img').length;
	$('ul li').on("mousemove", function() {
		var index = $(this).index();
		$(this).parent().parent().eq(0).css({
			left: -(index) * photoWidth	
		})
		
	});
	
	span1.click(function() {

		left += photoWidth
		if(left > 0) {
			left = -(n - 1) * photoWidth
		}
		if(left <= -n * photoWidth) {
			left = 0;
		}
		$(this).parent().stop().animate({
			left: left
		}, 1000)
		if(left==0)
	$('ul li:first').css("backgroundColor","red").siblings().css("backgroundColor","black")
	else if(left==-900)
	$('ul li:eq(1)').css("backgroundColor","red").siblings().css("backgroundColor","black")
		else 
		$('ul li:last').css("backgroundColor","red").siblings().css("backgroundColor","black")
	})
	span2.click(function() {
		left -= photoWidth
		if(left <= -n * photoWidth) {
			left = 0;
		}
		$(this).parent().stop().animate({
			left: left
		}, 1000)
		if(left==0)
	$('ul li:first').css("backgroundColor","red").siblings().css("backgroundColor","black")
	else if(left==-900)
	$('ul li:eq(1)').css("backgroundColor","red").siblings().css("backgroundColor","black")
		else 
		$('ul li:last').css("backgroundColor","red").siblings().css("backgroundColor","black")
	})

}
})