var leftPath = new Path({
    strokeColor: 'red',
	opacity: 0.5
});

var rightPath = new Path({
	strokeColor: 'green',
	opacity: 0.5
});

// Create a raster item using the image tag with id='mona'
var raster = new Raster('ferg');

// Move the raster to the center of the view
raster.position = view.center;

// Scale the raster by 50%
raster.scale(0.5);

// Rotate the raster by 45 degrees:
raster.rotate(45);
