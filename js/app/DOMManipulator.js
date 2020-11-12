define([
], function (
) {
    return {

        /**
         * Create a div element representing an image
         *
         * @param b {String} positioning type
         * @returns {Element} a div element with represting image
         */
        createImageDiv: function (positioningType) {
            return $('<div/>').addClass('img-wrapper').addClass(positioningType);
        },

        /**
         * Create a div element representing a pixel
         *
         * @param r {integer} red color value
         * @param g {integer} green color value
         * @param b {integer} blue color value
         * @returns {Element} a div element with the css color of given RGB values
         */
        createPixelDiv: function (r, g, b) {
            // Pixel DOM element template
            return $('<div/>').addClass('pixel').css('background-color', `rgba(${r}, ${g}, ${b}, 1)`);
        },

        /**
         * Create a div element representing a row in the image
         *
         * @returns {Element} a div element with represting image row
         */
        createRowContainerDiv: function () {
            return $('<div/>').addClass('row-container');
        }
    };
});