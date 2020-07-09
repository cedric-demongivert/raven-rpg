import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const VulcanStrike : Feat = (
  Feat
    .builder()
    .setIdentifier('vulcan-strike')
    .setName('Frappe vulcain')
    .addKeyword('atout')
    .addKeyword('marteau de guerre')
    .addKeyword('frappe vulcain')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise du marteau de guerre 15+</>)
        .setDescription(
          <p>
            Un personnage équipé d'une hache d'arme, d'un marteau de guerre ou
            d'une épée longue peut toujours au prix de deux point d'action
            frapper violament son adversaire en maximisant la puissance du coup
            porté. Une frappe vulcain ne peut pas être parré et ajoute un bonus
            de dégât brut égal au poid de l'arme utilisé divisé par 2.
          </p>
        )
        .build()
    )
    .build()
)
