import { Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface } from 'svelte-mos'
import { Unit, type UnitEnum } from './enums.ts'

export class Dose extends Mo {
  indication: MoidInterface
  supplement: MoidInterface
  indicationSupplementStudy: MoidInterface
  amount: number = 0
  unit: UnitEnum = Unit.g
  dailyFrequency: number = 1
  durationInDays: number = 7
  formulation: string = 'unknown' // FormulationEnum = Formulation.jelly
  
  constructor(indication: MoidInterface, supplement: MoidInterface, indicationSupplementStudy: MoidInterface) {
    super(Dose.moMeta)
    this.indication = indication
    this.supplement = supplement
    this.indicationSupplementStudy = indicationSupplementStudy
    this.displayName = supplement?.displayName
  }

  buildDisplayName = () => {
    this.displayName = `${this.supplement.displayName} ${this.durationInDays}x${this.dailyFrequency}x${this.amount}${this.unit}`
    return this
  }
  // hydrate = (props: Partial<Mo>) => {
  //   this.moMeta.moDef.objToMo(props)
  //   this.displayName = this.displayName || `${this.durationInDays}x${this.dailyFrequency}x${this.amount}${this.unit}`
  //   return this
  // }

  getDailyAmount = () => this.amount * this.dailyFrequency

  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: false,
      name: 'doses',
      gridFieldnames: ['name'],
    })
  ).setName()
  static {
    Dose.moMeta.moDef.addMoFieldDefFromName('indication')
    Dose.moMeta.moDef.addMoFieldDefFromName('supplement')
    Dose.moMeta.moDef.addMoFieldDefFromName('indicationSupplementStudy')
    const moDef = Dose.moMeta.moDef
    moDef.moClass = Dose
    moDef.createFieldDefs()
  }
}
