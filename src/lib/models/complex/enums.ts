import { registerMoMeta } from 'svelte-mos'
import { Indication } from '$lib/models/complex/Indication.ts'

// IndicationSupplement
export const EvidenceTier  = {
  unknown: 'unknown',
  low: 'low evidence',
  tier1: 'tier 1',
  tier2: 'tier 2',
  tier3: 'tier 3'
} as const
export type EvidenceTierEnum = (typeof EvidenceTier)[keyof typeof EvidenceTier]

export const SourceType  = {
  unknown: 'unknown',
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

export const parseSourceEntryType = (raw: string) => {
  switch (raw) {
    case 'manual pair': return SourceType.manual
    default: return SourceType.unknown
  }
}

// IndicationSupplementStudy
export const OutcomeDirection  = {
  unknown: 'unknown',
  benefit: 'benefit',
  mixed_unclear: 'mixed_unclear',
} as const
export type OutcomeDirectionEnum = (typeof OutcomeDirection)[keyof typeof OutcomeDirection]
const OutcomeDirectionKeys = Object.keys(OutcomeDirection)
export const lookupOutcomeDirection = (key: string): OutcomeDirectionEnum => {
  if (OutcomeDirectionKeys.includes(key)) {
    return OutcomeDirection[key as keyof typeof OutcomeDirection]
  }
  console.log(`==> enums.ts:49 Fail to load outcomeDirection`, key);
  return OutcomeDirection.unknown
}

// Study

export const StudyDesign  = {
  unknown: 'unknown',
  randomized_controlled_trial: 'randomized_controlled_trial',
  clinical_trial: 'clinical_trial',
} as const
export type StudyDesignEnum = (typeof StudyDesign)[keyof typeof StudyDesign]

export const parseStudyDesign = (raw: string) => {
  switch (raw) {
    case 'randomized_control_trial': return StudyDesign.randomized_controlled_trial
    case 'clinical_trial': return StudyDesign.clinical_trial
    default: return StudyDesign.unknown
  }
}
const studyDesignKeys = Object.keys(StudyDesign)
export const lookupStudyDesign = (key: string): StudyDesignEnum => {
  if (studyDesignKeys.includes(key)) {
    return StudyDesign[key as keyof typeof StudyDesign]
  }
  console.log(`==> enums.ts:58 Fail to load study design `, key);
  return StudyDesign.unknown
}

// Dose
export const Unit = {
  unknown: 'unkknown',
  g: 'g',
  mg: 'mg',
  μg: 'μg',
} as const
export type UnitEnum = (typeof Unit)[keyof typeof Unit]
const unitKeys = Object.keys(Unit)
export const lookupUnit: (key:string) => UnitEnum = (key: string): UnitEnum => {
  if (key.charCodeAt(0) === 181 && key[1] === 'g' ) return Unit.μg
  if (unitKeys.includes(key)) {
    return Unit[key as keyof typeof Unit]
  }
  //console.log(`==> enums.ts:90 Fail to load unit`, key);
  return Unit.unknown
}
export const Formulation = {
  unknown: 'unknown',
  intravenous: 'intravenous',
  intramuscular: 'intramuscular',
  oral: 'oral',
  standardisedExtract: 'standardised extract',
  essentialOil: 'essential oil',
  jelly: 'jelly',
  placebo: 'placebo',
} as const
export type FormulationEnum = (typeof Formulation)[keyof typeof Formulation]
const formulationKeys = Object.keys(Formulation)
export const lookupFormulation = (key: string): FormulationEnum => {
  if (formulationKeys.includes(key)) {
    return Formulation[key as keyof typeof Formulation]
  }
  console.log(`==> enum.ts:58 Fail to load formulation`, key);
  return Formulation.unknown
}

