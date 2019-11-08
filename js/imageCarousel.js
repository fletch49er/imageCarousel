//set number of images to be used
var num_images = 6;

// initialize slide_index variable
var slide_index = 1;

/*
 * ===================================================================
 * Script		: create_data_array()
 * Purpose	: function to create data array for carousel images
 * Author		: Mark Fletcher
 * Date			: 17.10.2019
 * 
 * Input :			
 * 	num	- number of items in array
 * 
 * Output :		
 * 
 * 
 * Notes :
 *
 * ==================================================================
*/
var carousel_data = new Array(num_images);
function create_data_array(num) {
  for(var x = 0; x < num; x++) {
  	carousel_data[x] = 'image0'+(x+1)+'.jpg';
  }  
}

/*
 * ===================================================================
 * Script		: create image counter()
 * Purpose	: function to create carousel image counter 
 * Author		: Mark Fletcher
 * Date			: 04.11.2019
 * 
 * Input :			
 * 	num	- length of carousel data array
 *			- default = 1
 * 
 * Output :		
 * 	carousel image counter text
 * 
 * Notes :
 *
 * ==================================================================
*/
function create_image_counter(num, num_images) {
	document.write(num+' to '+ num_images);
}

/*
 * ===================================================================
 * Script:	plus_divs()
 * Purpose:	function to display images in a carousel
 * Author:	Mark Fletcher
 * Date:		19.04.2019
 * 
 * Input:			
 * 	num - value from controls - (left), 1, 2, 3, 4, 5, + (right)
 *  
 * Output:		
 *	calls background image in main content <div>
 *  and updates slide counter
 * 
 * Notes:
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
 * Script		: create_icons()
 * Purpose	: function to create carousel controls using selected 
 *						icons
 * Author		: Mark Fletcher
 * Date			: 17.10.2019
 * 
 * Input :			
 * num	- between 1 and length of carousel data array
 *			- default = 1
 * 
 * Output :		
 * 	Carousel control icons
 * 
 * Notes :
 *
 * ==================================================================
*/
function create_icons(num, array_length) {
	var count = '';
  var dot_class = '';
  var controls = '<i class="fas c_arrows" onclick="plus_divs(\'-\')">&#xf104;</i>';
	for(count = 1; count <= array_length; count++) {
  	if(count == num) {
    	dot_class = 'fas';
    } else {
    	dot_class = 'far';
    }
  	controls = controls+'\r<i class="'+dot_class+' c_dots" onclick="plus_divs('+count+')">&#xf111;</i>';
	}
	controls = controls+'\r<i class="fas c_arrows" onclick="plus_divs(\'+\')">&#xf105;</i>';
  return controls;
}

/*
 * ===================================================================
 * Script:	image_carousel()
 * Purpose:	function to display images ina carousel
 * Author:	Mark Fletcher
 * Date:		19.04.2019
 * 
 * Input:			
 * 	num		- between 1 and length of carousel data array
 *				- default = 1
 * 	data	- carousel data array
 * 
 * Output:		
 * 	Dynamically changes carousel image in the carousel <div>
 *  and updates slide counter
 * 
 * Notes:
 *
 * ==================================================================
*/
function image_carousel(num, data) {
	//set image carousel folder
	var img_folder = 'images/';
  //set nodes
  var image = document.getElementById('c_images');
  var icons = document.getElementById('c_icons');
  var controls = icons.getElementsByTagName('script');
  var count = document.getElementById('c_count');
  //control carousel index
  if (num > data.length) {
  	slide_index = 1;
  } 
  if (num < 1) {
  	slide_index = data.length;
  }
  var display = slide_index - 1;
  var new_icons = create_icons(slide_index, data.length);
  image.innerHTML = '<a href="'+img_folder+data[display]+'" target="_blank"><img src="'+img_folder+carousel_data[display]+'" alt="'+data[display]+'"></a>';
  icons.innerHTML = new_icons;
  count.innerHTML = slide_index+' of '+data.length;
}

//create array of images for carousel
create_data_array(num_images);

