// Create a raster item using the image tag with id='mona'
var raster_1 = new Raster('1');
var raster_2 = new Raster('2');
var raster_3 = new Raster('3');

const rasters = [raster_1, raster_2, raster_3];

// Move the raster to the center of the view

rasters.forEach((raster, ndx) => {
    const image_scale = 1 / (raster.width / view.size._width)
    raster.scale(image_scale * 0.2);
    raster.position = view.center;
    raster.position._x = raster.position._x + 400;
    debugger;
});

// // Rotate the raster by 45 degrees:
// raster.rotate(45);
