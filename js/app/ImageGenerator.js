define([
    'app/ColorsGenerator',
    'app/DOMManipulator'
], function (
    ColorsGenerator,
    DOMManipulator
) {
    return {
        run: function () {
             $('.linear').append(this._createLinearImage());
     
           
        },

        _createLinearImage: function () {
            let nRows = 256, nColumns = 128;
            let discreteColors = ColorsGenerator.getDiscreteRGBColors(32);
            let imgWrapper = DOMManipulator.createImageDiv('linear-wrap');
            let nColors = discreteColors.length - 1;

            for (let column = 0; column < nColumns; column++) {
                let rowContainer = DOMManipulator.createRowContainerDiv();
                imgWrapper.append(rowContainer);
                for (let row = 0; row < nRows; row++) {
                    let color = discreteColors[nColors];
                    let pixelDiv = DOMManipulator.createPixelDiv(color[0], color[1], color[2]);
                    rowContainer.append(pixelDiv);
                    nColors --;
                }
            }

            return imgWrapper;
        }
    };
});