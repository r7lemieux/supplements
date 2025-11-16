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

// console.log("Original Object:", originalObject);
// console.log("Cloned Object:", clonedObject);
// console.log("Original Object:", originalObject.constructor.name);
// console.log("Cloned Object:", clonedObject.constructor.name);
//
// const d1: Date = new Date()
// const d2 = structuredClone(d1)
// console.log(`==>aaa.ts:36 d1`, d1)
// d2.setFullYear(1992)
// console.log(`==>aaa.ts:38 d1`, d1)
//

export const EvidenceTier  = {
  unknown: 'unknown',
  low: 'low evidence',
  tier1: 'tier 1',
  tier2: 'tier 2',
  tier3: 'tier 3'
} as const
export type EvidenceTierEnum = (typeof EvidenceTier)[keyof typeof EvidenceTier]

export const SourceType  = {
  manual: 'manual pair',
} as const
export type SourceTypeEnum = (typeof SourceType)[keyof typeof SourceType]

export const parseEvidenceTier = (raw: string) => {
  switch (raw) {
    case 'low evidence': return EvidenceTier.low
    case 'tier 1': return EvidenceTier.tier1
    case 'tier 2': return EvidenceTier.tier2
    case 'tier 3': return EvidenceTier.tier3
    default: return EvidenceTier.unknown
  }
}
console.log('low >', parseEvidenceTier('low evidence'))
