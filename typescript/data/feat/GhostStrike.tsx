import React from 'react'

import { Feat } from '../../feat/Feat'

export const GhostStrike : Feat = (
  Feat
    .builder()
    .setIdentifier('ghost-strike')
    .setName('Frappe fantôme [Épée\xa0courte][Épée\xa0bâtarde][Lance]')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 12+<br/>
        Dextérité 12+ <br/> <br/>

        <p>
          Un personnage possédant cet atout et équipé de l'arme choisie peut,
          avant d'attaquer, décider de porter un coup provoquant la moitiée des
          dégâts usuels mais entraînant la perte d'une parrade ou d'une esquive.
        </p>

        <p>
          En cas de coup critique, les dégâts ne sont pas multipliés mais le
          nombre de parrade ou d'esquive perdue double.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
