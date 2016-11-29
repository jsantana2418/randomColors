// var declarations
var html = '';
var red;
var green;
var blue;
var rgbColor;

//for loop will iterate 20 random colors from the Math method from RGB
for (i = 0; i <= 20; i += 1) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}
//write content into html body
document.write(html);
