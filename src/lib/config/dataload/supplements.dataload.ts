import {conditionSupplementTreeData} from '../../data/conditionSupplementTree.js'
import {getMoMeta, Moid, MoMeta} from 'svelte-mos'
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
    category0.name = category0.displayName = catName
    const category: ConditionCategory = await categoriesMoMeta.dataSource.addMo(category0) as ConditionCategory
    for (let [conditionName, conditionData] of Object.entries(categoryData)) {
      const condition0 = new Condition()
      condition0.name = condition0.displayName = conditionName
      condition0.category = new Moid(categoriesMoMeta, category.getId(), category.getDisplayName())
      const condition: Condition = (await conditionsMoMeta.dataSource.addMo(condition0)) as Condition
      category.conditions.push(new Moid(conditionsMoMeta, condition.getId(), condition.getDisplayName()))
      conditions.push(condition)
      for (let supplementName of conditionData) {
        let supplement: Supplement = supplementsByName[supplementName]
        if (!supplement) {
          const supplement0 = new Supplement()
          supplement0.name = supplement0.displayName = supplementName
          supplement = await supplementsMoMeta.dataSource.addMo(supplement0) as Supplement
          supplementsByName[supplementName] = supplement
        }
        supplement.conditions.push(new Moid(conditionsMoMeta, condition.getId(), condition.getDisplayName()))
        condition.supplements.push(new Moid(supplementsMoMeta, condition.getId(), condition.getDisplayName()))
      }
    }
    await categoriesMoMeta.dataSource.saveMo(category)
    for (let condition of conditions) await conditionsMoMeta.dataSource.addMo(condition)
    for (let supplement of Object.values(supplementsByName)) await supplementsMoMeta.dataSource.saveMo(supplement)
  }
}