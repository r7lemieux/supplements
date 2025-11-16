import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';

const conditionsSupplementStr: string = readFileSync('./conditions-supplements.json', 'utf8')
// console.log(`==>linkBuilder.ts:4 conditionsSupplementStr`, conditionsSupplementStr)
const conditionsSupplementsData = JSON.parse(conditionsSupplementStr)

const categories: string[] = []
const conditionTree: {[k:string]:string[]} = {}
const conditionSupplementTree: {[k:string]:{[k:string]:string[]}} = {}
const conditions: string[] = []
const conditionSupplements:{[k:string]:string[]} = {}
const supplementConditions:{[k:string]:string[]} = {}

for (let categoryData of conditionsSupplementsData.health_condition_categories) {
  const categoryName = categoryData.category
  categories.push(categoryName)
  conditionTree[categoryName] = []
  conditionSupplementTree[categoryName] = {}
  for (let conditionData of categoryData.conditions) {
    const conditionName = conditionData.condition
    const supplements = conditionData.supplements
    conditionTree[categoryName].push(conditionName)
    conditionSupplementTree[categoryName][conditionName] = supplements
    conditions.push(conditionName)
    conditionSupplements[conditionName] = supplements
    for (let supplement of supplements) {
      supplementConditions[supplement] = supplementConditions[supplement] || []
      supplementConditions[supplement].push(conditionName)
    }
  }
}

writeFileSync('./categories.ts', `export const categoriesData = ${JSON.stringify(categories)}`)
writeFileSync('./conditionTree.ts', `export const conditionTreeData = ${JSON.stringify(conditionTree)}`)
writeFileSync('./conditionSupplementTree.ts', `export const conditionSupplementTreeData = ${JSON.stringify(conditionSupplementTree)}`)
writeFileSync('./conditions.ts', `export const conditionsData = ${JSON.stringify(conditions)}`)
writeFileSync('./conditionSupplements.ts', `export const conditionSupplementData = ${JSON.stringify(conditionSupplements)}`)
writeFileSync('./supplementConditions.ts', `export const supplementConditionData = ${JSON.stringify(supplementConditions)}`)

