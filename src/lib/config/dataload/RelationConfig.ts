import {IndicationSupplement} from '../../models/complex/IndicationSupplement.js'
import {DeleteCascade, type MoMetaInterface, addRelation, RelationMeta} from 'svelte-mos'
import {IndicationSupplementStudy} from '../../models/complex/IndicationSupplementStudy.js'
import {Category} from '../../models/complex/Category.ts'
import {Indication} from '../../models/complex/Indication.ts'
import {Supplement} from '../../models/complex/Supplement.ts'
import {Study} from '../../models/complex/Study.ts'
import {Dose} from '../../models/complex/Dose.ts'

const initRelations = () => {
    addRelation(
        Category.moMeta,
        Indication.moMeta,
        {
            min2: 1,
            max2: 1,
            deleteCascade2: DeleteCascade.cascade
        }
        )


    addRelation(
        Indication.moMeta,
        IndicationSupplement.moMeta,
        {
            min2: 1,
            max2: 1,
            deleteCascade2: DeleteCascade.cascade
        }
    )
    addRelation(
        Supplement.moMeta,
        IndicationSupplement.moMeta,
        {
            min2: 1,
            max2: 1,
            deleteCascade2: DeleteCascade.cascade
        }
    )
    addRelation(
        IndicationSupplement.moMeta,
        IndicationSupplementStudy.moMeta,
        {
            min2: 1,
            max2: 1,
            deleteCascade2: DeleteCascade.cascade
        }
    )
    addRelation(
        IndicationSupplementStudy.moMeta,
        Study.moMeta,
        {
            min2: 1,
            max2: 1,
            deleteCascade2: DeleteCascade.cascade
        }
    )
    addRelation(
        IndicationSupplementStudy.moMeta,
        Dose.moMeta,
    )
}