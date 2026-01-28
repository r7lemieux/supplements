import * as data from '../../data/evidence.by_indication.json'
import { getMoMeta, HeapDataSource, Moid, MoMeta } from 'svelte-mos'
import { Supplement } from '../../models/complex/Supplement.ts'
import { Indication } from '../../models/complex/Indication.ts'
import { Study } from '../../models/complex/Study.ts'
import { Category } from '../../models/complex/Category.ts'
import { Dose } from '../../models/complex/Dose.ts'
import {
  parseEvidenceTier,
  parseSourceEntryType,
  lookupOutcomeDirection,
  lookupStudyDesign,
  lookupUnit,
} from '../../models/complex/enums.ts'
import { IndicationSupplement} from '../../models/complex/IndicationSupplement.ts'
import ConditionSupplementTree from '../../components/conditionSupplementTree/ConditionSupplementTree.svelte'
import { IndicationSupplementStudy } from '../../models/complex/IndicationSupplementStudy.ts'

const supplementsByName: { [name: string]: Supplement } = {}
const studiesByPmid: { [pim: number]: Study } = {}
const categoriesByName: { [name: string]: Category } = {}

export const loadEvidenceData = async () => {
  for (let indicationRaw of data.indications) {
    const indication0 = new Indication()
    indication0.name = indicationRaw.indication
    indication0.displayName = indicationRaw.indication
    const categoryName = indicationRaw.category
    let category = categoriesByName[categoryName]
    if (!category) {
      const category0 = new Category()
      category0.name = categoryName
      category0.displayName = categoryName
      category = await Category.moMeta.dataSource.addMo(category0) as Category
      categoriesByName[categoryName] = category
    }
    indication0.category = new Moid(Category.moMeta, category.id, category.name)
    const indication = await Indication.moMeta.dataSource.addMo(indication0) as Indication
    category.indications.push(new Moid(Indication.moMeta, indication.id, indication.name))
    if (indicationRaw.supplements) {
      for (let supplementRaw of indicationRaw.supplements) {
        const supplementName = supplementRaw.supplement
        let supplement = supplementsByName[supplementName]
        if (!supplement) {
          const supplement0 = new Supplement()
          supplement0.name = supplementName
          supplement0.displayName = supplementName
          supplement = await Supplement.moMeta.dataSource.addMo(supplement0) as Supplement
          supplementsByName[supplementName] = supplement
        }
        const indicationSupplement0 = new IndicationSupplement(indication, supplement)
        indicationSupplement0.evidenceTier = parseEvidenceTier(supplementRaw.evidence_tier)
        indicationSupplement0.sourceEntryType = parseSourceEntryType(supplementRaw.category_source)
        indicationSupplement0.displayName = `${indication.name} - ${supplement.name}`
        const indicationSupplement = (await IndicationSupplement.moMeta.dataSource.addMo(indicationSupplement0)) as IndicationSupplement
        supplement.indicationSupplements.push(new Moid(IndicationSupplement.moMeta, indicationSupplement.id, indication.name))
        if (supplementRaw.studies) {
          for (let studyRaw of supplementRaw.studies) {
            const pmid = Number.parseInt(studyRaw.pmid)
            const studyDesign = lookupStudyDesign(studyRaw.study_design)
            let study = studiesByPmid[pmid]
            if (study) {
              if (study.year !== studyRaw.year) {
                console.log(`==> evidence.dataload.ts:108  `, study.title, study.year, studyRaw.year)
              }
              if (study.title !== studyRaw.title) {
                console.log(`==> evidence.dataload.ts:110  `, study.title, study.year, studyRaw.title)
              }
              if (study.studyDesign !== studyDesign) {
                console.log('==> evidence.dataload.ts:112  ', study.title, study.studyDesign, studyDesign)
              }
            } else {
              const study0 = new Study()
              study0.pmid = pmid
              study0.year = studyRaw.year
              study0.title = studyRaw.title
              study0.studyDesign = studyDesign
              study0.setDisplayName()
              study = await Study.moMeta.dataSource.addMo(study0) as Study
              studiesByPmid[pmid] = study
            }
            const indicationSupplementStudy0 = new IndicationSupplementStudy(indicationSupplement, study)
            indicationSupplementStudy0.outcomeDirection = lookupOutcomeDirection(studyRaw.outcome_direction)
            indicationSupplementStudy0.displayName = `${indication.name} - ${supplementName} - ${study.title}`
            if (studyRaw.doses) {
              for (let doseRaw of studyRaw.doses) {
                const dose0 = new Dose(indication, supplement, study)
                dose0.dailyFrequency = Number.parseInt(doseRaw.frequency || '0')
                dose0.formulation = doseRaw.formulation || 'unknown'
                dose0.amount = Number.parseInt(doseRaw.amount || '0')
                dose0.unit = lookupUnit(doseRaw.unit || 'unknown')
                dose0.durationInDays = Number.parseInt(doseRaw.duration || '0')
                dose0.buildDisplayName()
                const dose = await Dose.moMeta.dataSource.addMo(dose0)
                indicationSupplementStudy0.doses.push(dose)
              }
            }
            const indicationSupplementStudy = await IndicationSupplementStudy.moMeta.dataSource.addMo(indicationSupplementStudy0) as IndicationSupplementStudy
              indicationSupplement.indicationSupplementStudies.push(new Moid(IndicationSupplementStudy.moMeta, indicationSupplementStudy.id, study.title))
            study.indicationSupplementStudies.push(new Moid(IndicationSupplementStudy.moMeta, indicationSupplementStudy.id, indicationSupplement.getDisplayName()))
          }
        }
        await IndicationSupplement.moMeta.dataSource.saveMo(indicationSupplement, {datafill: true})
        indication.indicationSupplements.push(indicationSupplement)
      }
    }
    await Indication.moMeta.dataSource.saveMo(indication, {datafill: true})
  }
  for (let mo of Object.values(categoriesByName)) await Category.moMeta.dataSource.saveMo(mo, {datafill: true})
  // console.log(`==> evidence.dataload.ts:103 Supplement._moMeta.dataSource.records `, (Supplement._moMeta.dataSource as HeapDataSource<any>).records);
  for (let mo of Object.values(supplementsByName)) await Supplement.moMeta.dataSource.saveMo(mo, {datafill: true})
  // console.log(`==> evidence.dataload.ts:105 Supplement._moMeta.dataSource.records `, (Supplement._moMeta.dataSource as HeapDataSource<any>).records);
  for (let mo of Object.values(studiesByPmid)) await Study.moMeta.dataSource.saveMo(mo, {datafill: true})

}
// const category0 = new ConditionCategory()
// category0.name = category0.displayName = catName
// const category: ConditionCategory = await categoriesMoMeta.dataSource.addMo(category0) as ConditionCategory
// for (let [conditionName, conditionData] of Object.entries(categoryData)) {
//   const condition0 = new Condition()
//   condition0.name = condition0.displayName = conditionName
//   condition0.category = new Moid(categoriesMoMeta, category.getId(), category.getDisplayName())
//   const condition: Condition = (await conditionsMoMeta.dataSource.addMo(condition0)) as Condition
//   category.conditions.push(new Moid(conditionsMoMeta, condition.getId(), condition.getDisplayName()))
//   conditions.push(condition)
//   for (let supplementName of conditionData) {
//     let supplement: Supplement = supplementsByName[supplementName]
//     if (!supplement) {
//       const supplement0 = new Supplement()
//       supplement0.name = supplement0.displayName = supplementName
//       supplement = await supplementsMoMeta.dataSource.addMo(supplement0) as Supplement
//       supplementsByName[supplementName] = supplement
//     }
//     supplement.conditions.push(new Moid(conditionsMoMeta, condition.getId(), condition.getDisplayName()))
//     condition.supplements.push(new Moid(supplementsMoMeta, condition.getId(), condition.getDisplayName()))
//   }
// }
// await categoriesMoMeta.dataSource.saveMo(category, {datafill: true})
// for (let condition of conditions) await conditionsMoMeta.dataSource.addMo(condition)
// for (let supplement of Object.values(supplementsByName)) await supplementsMoMeta.dataSource.saveMo(supplement, {datafill: true})

