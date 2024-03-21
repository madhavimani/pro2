
// Create canvas variable
var canvas = new fabric.canvas('mycanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.image.fromUrl(getimage, function (img) {
		block_image_object = img;

		block_image_object.scaletowidth(block_image_width);
		block_image_object.scaletoheight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
	}
});

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		// upload red range
		new_image('rr1.png')
		console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png')
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png')
		console.log("y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png')
		console.log("p")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.png')
		console.log("b")
	}
	
}

