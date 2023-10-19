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
  "https://www.rightmove.co.uk/properties/138817853#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138135671#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140875655#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137507621#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/130718657#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141030548#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140629946#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140567930#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141008606#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139272998#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139264772#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140421767#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140481803#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136728734#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138861185#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/131424968#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/131424977#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138446879#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140004779#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140462663#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136895492#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134140826#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139959008#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140095376#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132869150#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138936545#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/133763876#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140056175#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140109710#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138201395#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139006286#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140514710#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135491072#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138976259#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135315668#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140813066#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138529286#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86227728#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134865140#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/133371131#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139618472#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140020766#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139060109#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137142725#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139267319#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136522208#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86353383#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138380078#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137524916#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140952965#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/129524666#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135199784#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/131274104#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136522679#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140504021#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139693568#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138805739#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137018720#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86492238#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138750869#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134161616#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138598670#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136450379#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136504298#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/126631886#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140716727#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137232068#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140868680#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/128666954#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138433031#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140442740#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138239984#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137306642#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137971478#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139996496#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140687768#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86338686#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86517726#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137217611#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/128843669#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135122906#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136065875#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86340939#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138059333#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/129497987#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137063234#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139673255#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140996537#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140967992#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134619185#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/133813853#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139234403#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86651829#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136785953#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138450791#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139276256#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136448810#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139973381#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140980436#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137089661#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139907702#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132453746#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86496684#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140907335#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137927384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140640719#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86601144#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137988695#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139715360#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86520417#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140312363#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139809623#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86654193#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138303632#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140376896#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140823077#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139766066#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140975888#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138117761#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86114004#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139451024#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140549765#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/125890535#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86242050#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138804845#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140911481#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123797168#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134709101#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86447808#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137965442#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140516189#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139242578#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138914129#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139877213#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136521047#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137522801#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86341122#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136641998#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139683635#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139877615#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138950651#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86637465#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134938778#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140139077#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137042480#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138212321#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86177973#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141039545#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86515758#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138796775#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132603332#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86155767#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138917804#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140710178#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137498609#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139662515#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139060592#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138648677#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136426925#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140458229#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140719937#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/129399251#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140767367#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139561493#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140520734#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138392045#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138363143#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/133865744#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136253870#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140953355#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134771711#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137637386#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136381100#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139983779#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138537512#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134061821#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139911161#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138434876#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139453199#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141039374#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137834894#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138913268#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138873371#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140908604#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86589504#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/126069512#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140503364#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134442860#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/133706054#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/130535603#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141076661#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141076655#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137172038#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141076664#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139904378#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137650865#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86567322#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136021523#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138426056#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132032825#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/141068933#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/86380899#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137387729#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138990923#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140935871#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135022352#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136443428#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136427543#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/135618008#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139237946#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140104724#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136324334#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132428666#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136426886#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138682466#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134755955#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139764881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140874998#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139768400#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137252576#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134753576#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140996036#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/137969270#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139572857#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140606519#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140633045#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/139085594#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/138286553#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140032046#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140376959#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/134860565#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140321675#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140961926#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140961911#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/140961923#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/136024337#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/132104555#/?channel=RES_BUY",
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
        (totalArea > 900 || totalAreaInMetres > 900)
      ) {
        // const priceLocator = page.locator(
        //   "xpath=/html/body/div[2]/main/div/div[2]/div/article[1]/div[2]/div/div[1]/span[1]"
        // );

        // let price = 0;
        // if (priceLocator) {
        //   const priceInPounds = await priceLocator.innerText({
        //     timeout: 500,
        //   });
        //   if (priceInPounds)
        //     price = Number(priceInPounds.replace(/[^0-9.-]+/g, ""));
        // }
        console.log(url);
        // console.log("Price", price);
        console.log(
          "Total Area",
          totalArea
          // Math.round(price / totalArea)
        );
        console.log(
          "Total Area based on Metres",
          totalAreaInMetres
          // Math.round(price / totalAreaInMetres)
        );
      }
      // await expect(modified.length).toBeGreaterThanOrEqual(1);
    })
  );
}
