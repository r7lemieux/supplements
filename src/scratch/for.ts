const value: any = {a:1, b:2, c:3}
for (let [k, v] of Object.entries(value)) {
  console.log(`==>for.ts:3 k: v`, k, v)
}