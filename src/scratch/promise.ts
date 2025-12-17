const fctSucceed = () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}
const fctFails = () => {
  return new Promise((resolve, reject) => {
    return reject(2)
  })
}

const promises = [fctSucceed(), fctFails(), fctSucceed(), fctSucceed(), fctFails()]
// const promises: Promise<any>[] = []

Promise.allSettled(promises)
  .then(results => {
    console.log(`==>promise.ts:16 then results`, results)
  })
.catch(results => {
  console.log(`==>promise.ts:19 catch results`, results)
})


