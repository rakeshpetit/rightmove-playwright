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
  "https://www.rightmove.co.uk/properties/124267436#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/55768881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124461842#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121925237#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/120316967#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/123967754#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/85343571#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/115987286#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121925237#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124461842#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124300433#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124267436#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124241543#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124221173#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124179470#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124106546#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124099799#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123379451#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123967754#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85343571#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124267436#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121925237#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124461842#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124300433#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124241543#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124221173#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124179470#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124106546#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/121876892#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123379451#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123967754#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85343571#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85718856#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85701315#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85521384#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/119115437#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124685390#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124658156#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/124631327#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123596792#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/85495881#/?channel=RES_BUY",
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
  "https://www.rightmove.co.uk/properties/118637600#/?channel=RES_BUY",
  "https://www.rightmove.co.uk/properties/123761969#/?channel=RES_BUY",
];

const uniqeUrls = [...new Set(urls)];

console.log(JSON.stringify(uniqeUrls));