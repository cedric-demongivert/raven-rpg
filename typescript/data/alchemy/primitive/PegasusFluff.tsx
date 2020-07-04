import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

import { PegasusInfusion } from '../processed/PegasusInfusion'
import { HunterBlessing } from '../processed/HunterBlessing'
import { WindSyrup } from '../processed/WindSyrup'

export const PegasusFluff : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Plumeau de pégase')
    .setIdentifier('pegasus-fluff')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Plumeau de pégase')
    .setDescription(
      <p>
        Le plumeau de pégase est une forme de céréale sauvage que l'on
        retrouve principalement dans les grandes plaines rocailleuses. Cette
        plante est constituée d'une grande tige terminée de deux à trois épis
        ressemblant à des plumes. La tige du plumeau de pégase se raidifie au
        fur et a mesure de sa croissance, à maturité le plumeau se détache en
        cas de vents violents pour éssémer plus loin.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Dextérité +2</>)
        .addEffect(<>Force -2</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addTransformation(AlchemicTransformation.INFUSION, PegasusInfusion)
    .addTransformation(AlchemicTransformation.DECOCTION, HunterBlessing)
    .addTransformation(AlchemicTransformation.MACERATION, WindSyrup)
    .build()
)
