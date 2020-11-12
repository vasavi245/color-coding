define([], function () {
  // Constants
  const _COLOR_MIN = 0; // Minimum possible color value
  const _COLOR_MAX = 255; // Maximum possible color value

  return {
    /**
     * Get all the RGB color combinations possible with each color separated
     * into given step count.
     *
     * @param stepCount {integer} number of steps for each color
     * @returns {Array[]} an array of arrays where each array represents a
     * discrete RGB value
     */
    getDiscreteRGBColors: function (stepCount) {
      let diff = Math.round((_COLOR_MAX - _COLOR_MIN + 1) / stepCount); // 8 for stepCount = 32
      let colors = [];

      // Fill possible colors
      for (let b = _COLOR_MIN; b <= _COLOR_MAX; b = b + diff) {
        for (let g = _COLOR_MIN; g <= _COLOR_MAX; g = g + diff) {
          for (let r = _COLOR_MIN; r <= _COLOR_MAX; r = r + diff) {
            colors.push([r, g, b]);
          }
        }
      }

      return colors;
    },
  };
});
