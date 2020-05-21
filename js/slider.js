$(document).ready(function() {
	$(".photo").click(function() {
		var clickedClass = $(this).attr("class");
		var clickedStyle = $(this).attr("style");
		var stage = $('.gallery-roundup').find('.stage').attr("class");
		$('.gallery-roundup').find('.stage').attr("class", clickedClass);
		$(this).attr("class", stage).removeAttr("style");
	});
});