import React from 'react'

import { Feat } from '../../feat/Feat'

export const Helpless : Feat = (
  Feat
    .builder()
    .setIdentifier('helpless')
    .setName('Sans défence [Arme\xa0à\xa0une\xa0main][Épée\xa0bâtarde]')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 15+ <br/> <br/>

        <p>
          Un personnage possèdant cet atout frappant un adversaire ne tentant
          ni d'esquiver, ni de parrer peut ignorer totalement l'armure physique
          de sa cible.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
