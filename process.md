## Process

- Get Rightmove URL of list and remove "index" from the URL
- Run `yarn playwright test test/homeurls.spec.ts > output.txt`
- Run `cat output.txt | grep http` and copy the list to `test/urls.js`
- Also copy this list to `cleanup.ts`.
- Use regexp replace from `BUY'\n` to `BUY',\n`.
- Run `node cleanup.ts > urls.txt`.
- Run `yarn playwright test test/area.spec.ts --workers 4`
