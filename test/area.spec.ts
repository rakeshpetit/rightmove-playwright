import { test, expect } from "@playwright/test";
import {
  findRoomInfo,
  findRoomName,
  getDimensions,
  getDimensionsInMetres,
  roomSquareFoot,
} from "../measure";

function textMatcher(myString) {
  return /\d/.test(myString) && /x/.test(myString);
}

function exceptionWords(myString) {
  let exists = false;
  for (var i = 0; i < exceptionList.length; i++) {
    if (myString.includes(exceptionList[i])) {
      exists = true;
      break;
    }
  }
  return exists;
}

const exceptionList = ["25%", "shared", "auction", "cash", "CASH"];

const urls = [
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121925237#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124461842#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124300433#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124267436#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124241543#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124221173#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124179470#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124106546#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124099799#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121876892#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123379451#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123967754#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85343571#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/55768881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123699347#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/122677529#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123395636#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/65112442#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123154604#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/115987286#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/122920898#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/120316967#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/84823767#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/120872492#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/84068700#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/122313683#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/119338991#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/119115443#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/119115437#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118957199#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/115660502#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/115229792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/112583720#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/78998290#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/100920731#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/100920728#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/100920722#/?channel=RES_BUY",
];

for (const url of urls) {
  Promise.resolve(
    test(`basic test ${url}`, async ({ page }) => {
      await page.goto(url);
      const title = page.locator(".navbar__inner .navbar__title");
      // const html = await page.content();
      // const pageText = await page.locator("h2", {
      //   hasText: "Property description",
      // });
      const parent = await page.locator(
        "xpath=/html/body/div[2]/main/div/div[2]/div/article[3]/div[3]/div"
      );
      const description = await parent.innerText();
      let exceptionWordsPresent = false;
      const modified = description.split("\n").filter((line) => {
        if (!exceptionWordsPresent && exceptionWords(line)) {
          exceptionWordsPresent = true;
        }
        if (textMatcher(line)) {
          return line;
        }
      });
      let totalArea = 0;
      let totalAreaInMetres = 0;
      modified.forEach((room) => {
        try {
          const roomInfo = findRoomInfo(room);
          const dimension = getDimensions(roomInfo);
          const dimensionInMetres = getDimensionsInMetres(roomInfo);
          const total = roomSquareFoot(dimension);
          const totalInMetres = roomSquareFoot(dimensionInMetres);
          totalArea = total + totalArea;
          totalAreaInMetres = totalInMetres + totalAreaInMetres;
        } catch (e) {}
      });
      if (
        !exceptionWordsPresent &&
        (totalArea > 550 || totalAreaInMetres > 550)
      ) {
        console.log(url);
        console.log("Total Area", totalArea);
        console.log("Total Area based on Metres", totalAreaInMetres);
      }
      // await expect(modified.length).toBeGreaterThanOrEqual(1);
    })
  );
}
