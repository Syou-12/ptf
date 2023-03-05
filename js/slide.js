$(function(){
	function sliderSetting(){
	    var width = $(window).width();
	    {
	        $('.intro').not('.slick-initialized').slick({
	            autoplay: true,
	            centerMode: false,
	            arrows:true,
	            infinite: true,
	            dots:true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            centerPadding: '0px',
	        });
	    } 
	}
	sliderSetting();
	$(window).resize(function(){
	    sliderSetting();
	});
});
  