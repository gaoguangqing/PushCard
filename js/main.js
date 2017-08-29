$(function(){
	$(".checkbox").click(function(){
					if($(this).hasClass('isselected'))
					{
						$(this).removeClass('isselected');
					}
					else{
						$(this).addClass('isselected');
					}
				});
})();
				
