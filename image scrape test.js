javascript:(function() {  
	var images = document.getElementsByTagName('img');  
	var urls = '';  var nameRegex = /name=([0-9]+x[0-9]+)/i;
	var namePriority = ['large', 'medium'];  
	for (var i = 0; i < images.length; i++) { 
		var src = images[i].src;    
			if (src.match(/https:\/\/pbs\.twimg\.com\/media\/.*\?format=.*&name=/gi)) { 
				var nameMatch = src.match(nameRegex);
				var name = nameMatch ? nameMatch[1] : %27%27;
				if (name.match(/[0-9]+x[0-9]+/)) {
					urls += src + %27\n%27;
				} else if (namePriority.indexOf(name) !== -1) {
					urls += src + %27\n%27;
				}
			}  
	}  if (urls === %27%27) {
				alert(%27No matching image links found.%27);
			} 
			else {
				alert(%27Matching image links found:\n%27 + urls);
			}
})();
