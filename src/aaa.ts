class ccc {
  name: string
  details?: any
  friends?: Set<string>
  constructor (name: string) {
    this.name = name
  }
}

const originalObject = new ccc('Alice')
originalObject.details = {
    age: 30,
    hobbies: ["reading", "hiking"],
    birthDate: new Date(),
  }
originalObject.friends =  new Set(["Bob", "Charlie"])
const originalValue = new Map()
originalValue.set("Bob", 1)
originalValue.set("Rob", 2)
// Create a deep copy using structuredClone()
// const clonedObject = structuredClone(originalObject);
const clonedObject = structuredClone(originalValue);

// Verify independence
// clonedObject.name = "Betty";
// clonedObject.details.age = 35;
// clonedObject.details.hobbies.push("painting");
// clonedObject.friends.add("David");

console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);
console.log("Original Object:", originalObject.constructor.name);
console.log("Cloned Object:", clonedObject.constructor.name);

const d1: Date = new Date()
const d2 = structuredClone(d1)
console.log(`==>aaa.ts:36 d1`, d1)
d2.setFullYear(1992)
console.log(`==>aaa.ts:38 d1`, d1)