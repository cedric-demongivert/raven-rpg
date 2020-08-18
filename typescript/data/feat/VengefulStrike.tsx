import React from 'react'

import { Feat } from '../../feat/Feat'

export const VengefulStrike : Feat = (
  Feat
    .builder()
    .setIdentifier('vengeful-strike')
    .setName('Coup vengeur [Arme\xa0de\xa0corps\xa0à\xa0corps][Mains\xa0nues]')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+<br/>
        Dextérité 12+ <br/> <br/>

        <p>
          Un personnage possédant cet atout esquivant ou parrant un coup dont
          il est la cible réduit le seuil de coup critique de sa prochaine
          attaque d'un point. Ce bonus retombe à zéro à chaque nouveau début de
          tour.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
