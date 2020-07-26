import React from 'react'

import { Feat } from '../../feat/Feat'

export const Twisted : Feat = (
  Feat
    .builder()
    .setIdentifier('twisted')
    .setName('Coup retord [Arme\xa0à\xa0une\xa0main]')
    .addKeyword('atout')
    .addKeyword('dague')
    .addKeyword('coup retord')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+ <br/>
        Dextérité 16+ <br/> <br/>

        <p>
          Une fois par round et pour chaque groupe de 10 points de maîtrise de
          l'arme choisie, quand le personnage échoue une tentative d'attaque
          avec la-dite arme il peut retenter sa chance moyennant un malus
          de 8 points sur son jet de touche.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
