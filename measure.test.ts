import {
  findRoomInfo,
  findRoomName,
  getDimensions,
  getDimensionsInMetres,
  removeSymbol,
  roomSquareFoot,
} from "./measure";

describe("findRoomName", () => {
  it("Works for single words", () => {
    const expectedOutput = ["Lounge"];
    const testDescription = "Lounge 18' 6\" x 19' 7\" ( 5.64m x 4.45m )";

    const receivedOutput = findRoomName(testDescription);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Works for more than 1 word", () => {
    const expectedOutput = ["Bath room", "Shower room"];
    const testDescription =
      "Bath room/ Shower room 18' 6\" x 19' 7\" ( 5.64m x 4.45m )";

    const receivedOutput = findRoomName(testDescription);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Works if the room name contains x", () => {
    const expectedOutput = ["Lounge xroom"];
    const testDescription = "Lounge xroom 18' 6\" x 19' 7\" ( 5.64m x 4.45m )";

    const receivedOutput = findRoomName(testDescription);
    expect(receivedOutput).toEqual(expectedOutput);
  });
});

describe("findRoomLength", () => {
  it("Gets the Length", () => {
    const expectedOutput = [`18'`, `6"`, `19'`, `7"`, `5.64m`, `4.45m`];
    const testDescription = `Lounge 18' 6" x 19' 7" ( 5.64m x 4.45m )`;

    const receivedOutput = findRoomInfo(testDescription);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Works if data is mixed", () => {
    const expectedOutput = [`8.36m`, `27'`, `3.48m`, `11'`];
    const testDescription = `8.36m (27'5) x 3.48m (11'5)`;

    const receivedOutput = findRoomInfo(testDescription);
    expect(receivedOutput).toEqual(expectedOutput);
  });
});

describe("removeSymbol", () => {
  it("It works", () => {
    const dimension = `18"`;
    const expectedOutput = 18;

    const receivedOutput = removeSymbol(dimension, `"`);
    expect(receivedOutput).toEqual(expectedOutput);
  });
});

describe("getDimensions", () => {
  it("Gets the values for all 4 data", () => {
    const dimension = [`18'`, `6"`, `19'`, `7"`, `5.64m`, `4.45m`];
    const expectedOutput = {
      length: 222,
      width: 235,
    };

    const receivedOutput = getDimensions(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Gets the values if inches is missing in length", () => {
    const dimension = [`18'`, `19'`, `7"`, `5.64m`, `4.45m`];
    const expectedOutput = {
      length: 216,
      width: 235,
    };

    const receivedOutput = getDimensions(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Gets the values if inches is missing for both length and width", () => {
    const dimension = [`18'`, `19'`, `5.64m`, `4.45m`];
    const expectedOutput = {
      length: 216,
      width: 228,
    };

    const receivedOutput = getDimensions(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  // it("Gets the values if feet is missing for both length and width", () => {
  //   const dimension = [`18"`, `19"`, `5.64m`, `4.45m`];
  //   const expectedOutput = {
  //     length: 18,
  //     width: 19,
  //   };

  //   const receivedOutput = getDimensions(dimension);
  //   expect(receivedOutput).toEqual(expectedOutput);
  // });
});

describe("getDimensionsInMetres", () => {
  it("Gets the values for metres", () => {
    const dimension = [`18'`, `6"`, `19'`, `7"`, `5.64m`, `4.45m`];
    const expectedOutput = {
      length: 222.047364,
      width: 175.196945,
    };

    const receivedOutput = getDimensionsInMetres(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Outputs 0 if one of width/length is missing", () => {
    const dimension = [`18'`, `19'`, `5.64m`];
    const expectedOutput = {
      length: 222.047364,
      width: 0,
    };

    const receivedOutput = getDimensionsInMetres(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
  it("Outputs if data is mixed", () => {
    const dimension = [`8.36m`, `27'`, `3.48m`, `11'`];
    const expectedOutput = {
      length: 329.134036,
      width: 137.007948,
    };

    const receivedOutput = getDimensionsInMetres(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
});

describe("roomSquareFoot", () => {
  it("It works", () => {
    const dimension = {
      length: 216,
      width: 228,
    };
    const expectedOutput = 342;

    const receivedOutput = roomSquareFoot(dimension);
    expect(receivedOutput).toEqual(expectedOutput);
  });
});
