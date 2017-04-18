$('#loadBtn').click(function(){
	$.get("/gotochat", function(text){
		$text = $(text);
		$text.find('script').appendTo('body');
		console.dir('test');
	});
});