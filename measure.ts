type Dimension = {
  length: number;
  width: number;
};
const metresToInchesFactor = 39.3701;

const findRoomName = (myString) => {
  const regexp = /\b[a-z\s]+[a-wy-z]+\b/gi;
  return myString.match(regexp);
};

const findRoomInfo = (myString) => {
  const regexp = /[\d.\d]+['|"|m]/gi;
  return myString.match(regexp);
};

const removeSymbol = (dimension, symbol) => {
  if (dimension.includes(symbol)) {
    return Number(dimension.split(symbol).join(""));
  }
  return 0;
};

const getDimensions = (dimension): Dimension => {
  const length = {
    feet: 0,
    inch: 0,
  };
  const width = {
    feet: 0,
    inch: 0,
  };
  dimension.forEach((dim) => {
    const feet = removeSymbol(dim, `'`);
    const inch = removeSymbol(dim, `"`);
    if (feet && !length.feet) {
      length.feet = feet;
    } else if (feet && length.feet) {
      width.feet = feet;
    }
    if (inch && !width.feet) {
      length.inch = inch;
    } else if (inch && (length.feet || length.inch)) {
      width.inch = inch;
    }
  });
  return {
    length: length.feet * 12 + length.inch,
    width: width.feet * 12 + width.inch,
  };
};

const getDimensionsInMetres = (dimension): Dimension => {
  let length = 0;
  let width = 0;
  dimension.forEach((dim) => {
    const distanceM = removeSymbol(dim, `m`);
    if (distanceM && !length) {
      length = distanceM;
    } else if (distanceM && length) {
      width = distanceM;
    }
  });
  return {
    length: length * metresToInchesFactor,
    width: width * metresToInchesFactor,
  };
};

const roomSquareFoot = (dimension: Dimension) => {
  const squared = dimension.length * dimension.width;
  return Math.round(squared / 144);
};

export {
  roomSquareFoot,
  removeSymbol,
  getDimensions,
  getDimensionsInMetres,
  findRoomInfo,
  findRoomName,
};
