import React from 'react'

import { Feat } from '../../feat/Feat'

export const VulcanStrike : Feat = (
  Feat
    .builder()
    .setIdentifier('vulcan-strike')
    .setName('Frappe vulcain [Arme\xa0lourde]')
    .addKeyword('atout')
    .addKeyword('frappe vulcain')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+ <br/>
        Force 14+ <br/>

        <p>
          Un personnage équipé de l'arme choisie peut toujours choisir, en guise
          d'attaque à outrance, de frapper violament son adversaire en
          maximisant la puissance du coup porté. Une frappe vulcain ne peut pas
          être parré et ajoute un bonus de dégât brut égal au poid de l'arme
          utilisé.
        </p>
      </>
    )
    .build()
)
