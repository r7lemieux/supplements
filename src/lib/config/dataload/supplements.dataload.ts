import {conditionSupplementTreeData} from '../../data/conditionSupplementTree.js'
import {getMoMeta, MoMeta} from 'svelte-mos'
import {ConditionCategory} from '../../models/ConditionCategory.js'
import {Condition} from '../../models/Condition.js'
import {Supplement} from '../../models/Supplement.js'

const supplementsByName: { [name: string]: Supplement } = {}
const conditions: Condition[] = []

export const loadSupplementTreeData = async () => {
  const categoriesMoMeta: MoMeta = getMoMeta('conditionCategories')
  const conditionsMoMeta: MoMeta = getMoMeta('conditions')
  const supplementsMoMeta: MoMeta = getMoMeta('supplements')
  for (let [catName, categoryData] of Object.entries(conditionSupplementTreeData)) {
    const category0 = new ConditionCategory()
    category0.name = catName
    const category: ConditionCategory = await categoriesMoMeta.dataSource.addMo(category0) as ConditionCategory
    for (let [conditionName, conditionData] of Object.entries(categoryData)) {
      const condition0 = new Condition()
      condition0.name = conditionName
      condition0.categoryId = category.getId()
      const condition: Condition = (await conditionsMoMeta.dataSource.addMo(condition0)) as Condition
      category.conditionIds.push(condition.getId())
      conditions.push(condition)
      for (let supplementName of conditionData) {
        let supplement: Supplement = supplementsByName[supplementName]
        if (!supplement) {
          const supplement0 = new Supplement()
          supplement0.name = supplementName
          supplement = await supplementsMoMeta.dataSource.addMo(supplement0) as Supplement
          supplementsByName[supplementName] = supplement
        }
        supplement.conditionIds.push(condition.getId())
        condition.supplementIds.push(supplement.getId())
      }
    }
    await categoriesMoMeta.dataSource.saveMo(category)
    for (let condition of conditions) await conditionsMoMeta.dataSource.addMo(condition)
    for (let supplement of Object.values(supplementsByName)) await supplementsMoMeta.dataSource.saveMo(supplement)
  }
}