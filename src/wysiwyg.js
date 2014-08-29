$(window).load(function(){

	$.fn.wysiwyg = function ( options ) {

		var iframe = $('<iframe class="wysiwyg">');

		$(this).replaceWith(iframe);

		iframe[0].contentDocument.body.innerHTML = $(this).text();

		iframe[0].contentDocument.designMode = "On";

		if ( iframe[0].contentWindow )
		{

			iframe[0].contentWindow.document.open();
			// optionally write content here
			iframe[0].contentWindow.document.close();
			iframe[0].contentWindow.document.designMode = "on";
			iframe[0].contentWindow.document.body.innerHTML = $(this).text();

		}

		if (options.size.height)
		{
			iframe.height(options.size.height);
		}

		if (options.size.width)
		{
			iframe.width(options.size.width);
		}

// Click ready control object

		if ( options.controls.bold )
		{
			options.controls.bold.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('bold', false, null);
			});
		}

		if ( options.controls.italic )
		{
			options.controls.italic.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('italic', false, null);
			});
		}

		if ( options.controls.underline )
		{
			options.controls.underline.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('underline', false, null);
			});
		}

		if ( options.controls.orderedList )
		{
			options.controls.orderedList.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('insertOrderedList', false, null);
			});
		}

		if ( options.controls.unOrderedList )
		{
			options.controls.unOrderedList.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('insertUnorderedList', false, null);
			});
		}

		if ( options.controls.justifyCenter )
		{
			options.controls.justifyCenter.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('justifyCenter', false, null);
			});			
		}

		if ( options.controls.justifyLeft )
		{
			options.controls.justifyLeft.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('justifyLeft', false, null);
			});			
		}

		if ( options.controls.justifyRight )
		{
			options.controls.justifyRight.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('justifyRight', false, null);
			});			
		}

		if ( options.controls.justifyFull )
		{
			options.controls.justifyFull.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('justifyFull', false, null);
			});			
		}

		if ( options.controls.insertHorizontalRule )
		{
			options.controls.insertHorizontalRule.click(function(e){
				e.preventDefault();
				iframe[0].contentDocument.execCommand('insertHorizontalRule', false, null);
			});			
		}		

// input controls object

		if ( options.inputControls.fontName )
		{
			options.inputControls.fontName.change(function(e){
				e.preventDefault();
				var val = options.inputControls.fontName.val();
				iframe[0].contentDocument.execCommand('fontName', false, val);
				// console.log(val); 
			});
		}

		if ( options.inputControls.link )
		{
			options.inputControls.link.change(function(e){
				e.preventDefault();
				var val = options.inputControls.link.val();
				iframe[0].contentDocument.execCommand('createLink', false, val);
				// console.log(val); 
			});
		}

		if ( options.inputControls.fontSize )
		{
			options.inputControls.fontSize.change(function(e){
				e.preventDefault();
				var val = options.inputControls.fontSize.val();
				iframe[0].contentDocument.execCommand('fontSize', false, val);
				// console.log(val); 
			});
		}

		if ( options.inputControls.fontColor )
		{
			options.inputControls.fontColor.change(function(e){
				e.preventDefault();
				var val = options.inputControls.fontColor.val();
				iframe[0].contentDocument.execCommand('foreColor', false, val);
				// console.log(val); 
			});
		}

		if ( options.inputControls.insertImage )
		{
			options.inputControls.insertImage.change(function(e){
				e.preventDefault();
				var val = options.inputControls.insertImage.val();
				iframe[0].contentDocument.execCommand('insertImage', false, val);
				// console.log(val); 
			});
		}

// defaults object

		if ( options.defaults.fontFamily ) 
		{
			iframe[0].contentDocument.body.style.fontFamily = options.defaults.fontFamily;
		}

		if ( options.defaults.border ) 
		{
			iframe[0].style.border = options.defaults.border;
		}


// CSS Object

		if ( options.css )
		{
			iframe.css(options.css);
		}

		return iframe[0].contentDocument.body.innerHTML;

	};

});