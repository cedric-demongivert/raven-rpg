import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const NobleBlood : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Liqueur de lys')
    .setIdentifier('noble-blood')
    .setDescription(
      <p>
        La macération de la liqueur de lys pendant un mois et sa concentration
        en quantitée suffisante permet de fabriquer de la liqueur de lys ou sang
        des rois. La liqueur de lys est un solvant sans niveau de qualité, pour
        produire de la liqueur de lys il suffit de passer un test d'opposition
        entre sa connaissance de la macération et un degré de difficulté de
        16 points. Si le test passe, le résultat de la macération sera du
        solvant fonctionnel, sinon celui-ci perdra tous ses effets à
        l'exception près de sa capacitée à doubler l'empoisonnement des
        propriétés qui y sont dissoutes. Pour plus d'information sur la liqueur
        de lys se référé à la <a href='#alchemy-solvents'>section de ce chapitre
        traitant des solvants.</a>
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Intoxication à l'éther +2</>)
        .setCost(0)
        .setDuration(<>~</>)
        .build()
    )
    .build()
)
