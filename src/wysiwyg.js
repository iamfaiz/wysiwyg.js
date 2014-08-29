$(window).load(function(){

	$.fn.wysiwyg = function ( options ) {

		var iframe = $("<iframe>");

		$(this).replaceWith(iframe);

		iframe[0].contentDocument.body.innerHTML = $(this).text();



	};

});