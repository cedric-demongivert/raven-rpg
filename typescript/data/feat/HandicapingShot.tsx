import React from 'react'

import { Feat } from '../../feat/Feat'

export const HandicapingShot : Feat = (
  Feat
    .builder()
    .setIdentifier('handicaping-shot')
    .setName('Tirs handicapants [Arc]')
    .addKeyword('atout')
    .addKeyword('dextérité')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 5+ <br/>
        Maîtrise de la chasse 5+ <br/> <br/>

        <p>
          Un personnage possédant cet atout peut ajouter 1D4 points de dégâts à
          l'initiative de son adversaire quand il réussi une attaque infligeant
          plus de 50% des dégâts totaux de son arme.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
