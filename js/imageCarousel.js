// data array for carousel images
var carousel_data = [
    'image001.jpg',
    'image002.jpg',
    'image003.jpg',
    'image004.jpg',
    'image005.jpg'
];

// initialize slide_index variable
var slide_index = 1;

/*
 * ===================================================================
 * Script		: create_icons()
 * Purpose	: function to display images ina carousel
 * Author		: Mark Fletcher
 * Date			: 17.10.2019
 * 
 * Input :			
 * num	- between 1 and length of carousel data array
 *				- default = 1
 * carousel_data- data array
 * 
 * Output :		
 * 	Dynamically changes background image in main content <div>
 *  and updates slide counter
 * 
 * Notes :
 *
 * ==================================================================
*/
function create_icons(num) {
	var count = ''
  var dot_class = 'far';
  document.write('<i class="fas c_arrows" onclick="plus_divs(\'-\')">&#xf104;</i>');
	for(count = 1; count <= 5; count++) {
  	document.write('<i class="'+dot_class+' c_dots" onclick="plus_divs('+count+')">&#xf111;</i>');
	}
	document.write('<i class="fas c_arrows" onclick="plus_divs(\'+\')">&#xf105;</i>');
}

/*
 * ===================================================================
 * Script		: plus_divs()
 * Purpose	: function to display images in a carousel
 * Author		: Mark Fletcher
 * Date			: 19.04.2019
 *
 * Calls
 * 
 * Input :			
 * num - value from controls -1 (left), 1, 2, 3, 4, 5, +1 (right)
 *  
 * Output :		
 * 	calls  background image in main content <div>
 *  and updates slide counter
 * 
 * Notes :
 *
 * ==================================================================
*/
function plus_divs(num) {
	if(num == '+' || num == '-') {
  	if(num == '+') {
  		image_carousel((slide_index += 1), carousel_data);
    } else {
    	image_carousel((slide_index -= 1), carousel_data);
    }
 	} else {
  	image_carousel((slide_index = num), carousel_data);
  }
}

/*
 * ===================================================================
 * Script		: image_carousel()
 * Purpose	: function to display images ina carousel
 * Author		: Mark Fletcher
 * Date			: 19.04.2019
 * 
 * Input :			
 * num	- between 1 and length of carousel data array
 *			- default = 1
 * data	- carousel data array
 * 
 * Output :		
 * 	Dynamically changes carousel image in the carousel <div>
 *  and updates slide counter
 * 
 * Notes :
 *
 * ==================================================================
*/
function image_carousel(num, data) {
	var img_folder = 'images/';
  var image = document.getElementById('c_images');
  var icons = document.getElementById('c_icons');
  var controls = icons.getElementsByTagName('script');
  var count = document.getElementById('c_count');
  if (num > data.length) {
  	slide_index = 1;
  } 
  if (num < 1) {
  	slide_index = data.length;
  }
  var display = slide_index - 1;
  //var new_icons = create_icons(slide_index);
  image.innerHTML = '<a href="'+img_folder+data[display]+'" target="_blank"><img src="'+img_folder+carousel_data[display]+'" alt="'+data[display]+'"></a>';
  //icons.innerHTML = new_icons;
  count.innerHTML = slide_index+' of '+data.length;
}

/*
 * ===================================================================
 * Script	: showPopup() & hidePopup()
 * Purpose	: function to display and hide popup navigation menu
 * Author	: Mark Fletcher
 * Date		: 19.04.2019
 * 
 * Input :			
 * 
 * Output :		
 * 	Dynamically changes the display style
 *	show = block, hide = none
 * 
 * Notes :
 *
 * ==================================================================
*/
//showPopup function
function show_popup() {
	document.getElementById("popup").style.display="block";
}
	
//hidePopup function
function hide_popup() {
	document.getElementById("popup").style.display="none";
}
