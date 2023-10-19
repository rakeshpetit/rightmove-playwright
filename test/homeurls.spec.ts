import { test, expect } from "@playwright/test";

const numOfPages = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  // 34, 35, 36, 37, 38, 39, 40,
];

const url =
  "https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E200&minBedrooms=3&maxPrice=325000&minPrice=200000&radius=15.0&propertyTypes=detached%2Csemi-detached&includeSSTC=false&mustHave=garden&dontShow=retirement&furnishTypes=&keywords=";

for (const pageIndex of numOfPages) {
  test(`List of URLs page ${pageIndex + 1}`, async ({ page }) => {
    await page.goto(`${url}&index=${pageIndex * 24}`);
    const hrefs = await page.evaluate(() => {
      return Array.from(document.links).map((item) => item.href);
    });
    const filteredHrefs = hrefs.filter((url) => {
      return (
        url.includes("channel=RES_BUY") && !url.includes("channel=RES_BUY#")
      );
    });
    const uniqeHrefs = [...new Set(filteredHrefs)];
    console.log(uniqeHrefs);
  });
}
