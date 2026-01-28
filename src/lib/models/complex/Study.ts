import type {Moid} from 'svelte-mos'
import {Mo, MoDefinition, type MoidInterface, MoMeta, type MoMetaInterface} from 'svelte-mos'
import { StudyDesign, type StudyDesignEnum } from './enums.ts'

export class Study extends Mo {
  pmid: number = 0
  year: number = 0
  title: string = ''
  studyDesign: StudyDesignEnum = StudyDesign.unknown
  indicationSupplementStudies: MoidInterface[] = []

  constructor() {
    super(Study.moMeta)
  }
  init = () => {
      this.displayName = this.displayName || this.title || `pmid ${this.pmid}`
    return this
  }
  // hydrate = (props: Partial<Study>) => {
  //   Object.assign(this, props)
  //   this.displayName = this.displayName || this.title || `pmid ${this.pmid}`
  //   return this
  // }

  getDisplayName = () => this.displayName || this.title || `pmid ${this.pmid}`
  setDisplayName = (displayName?: string) => {
    this.displayName = displayName || this.title || `pmid ${this.pmid}`
  }
  getId: () => number = () => this.id as number
  setId = (id: number) => this.id = id

  static moMeta: MoMetaInterface = new MoMeta(MoDefinition.fromProps({
      hasId: true,
      name: 'studies',
      gridFieldnames: ['pmid', 'year', 'title', 'studyDesign' ],
    })
  ).setName()
  static {
    const moDef = Study.moMeta.moDef
    moDef.moClass = Study
    moDef.createFieldDefs()
    moDef.addMoArrayFieldDefFromName('indicationSupplementStudies')
  }
}

