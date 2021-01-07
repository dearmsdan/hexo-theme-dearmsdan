var _$paletteElement = $('.palette_color');
function _colorizePaletteItems() {
    $.each(_$paletteElement, function(i) {
        $(this).css('background-color', $(this).data('color'));
    })
}
function _togglePalette() {
    $('.palette_color__main').on('click', function() {
        $('.palette').toggleClass('palette__opened');
    })
}
function _initSetColor() {
    $('.palette_color').on('click', function() {
        var color = $(this).data('color');
        _setColor(color);
    })
}
function _setColor(color) {
    $('.palette_color__main').css('background', color);
    $('.wrapper').css('background', color);
}
_colorizePaletteItems();
_togglePalette();
_initSetColor();



