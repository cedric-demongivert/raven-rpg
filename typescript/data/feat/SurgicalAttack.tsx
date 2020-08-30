import React from 'react'

import { Feat } from '../../feat/Feat'

export const SurgicalAttack : Feat = (
  Feat
    .builder()
    .setIdentifier('surgical-attack')
    .setName('Attaque chirurgicale')
    .addKeyword('atout')
    .addKeyword('dextérité')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Dextérité 12+ <br/>
        Maîtrise de la dague 5+ <br/>
        Maîtrise de la chirurgie 10+ <br/> <br/>

        <p>
          Le personnage frappe exactement là où ça fait mal. En cas de critique
          les dégâts sont doublés une nouvelle fois. Ainsi, un personnage
          faisant le double de dégâts en cas de critique en fera le quadruple.
        </p>
      </>
    )
    .build()
)
