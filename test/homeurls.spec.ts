import { test, expect } from "@playwright/test";

const numOfPages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const url =
  "https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=USERDEFINEDAREA%5E%7B%22id%22%3A7624740%7D&minBedrooms=2&maxPrice=220000&minPrice=125000&sortType=6&propertyTypes=detached%2Cflat%2Csemi-detached%2Cterraced&secondaryDisplayPropertyType=housesandflats&includeSSTC=false&mustHave=&dontShow=retirement%2CsharedOwnership&furnishTypes=&keywords=";

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
