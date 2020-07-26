import React from 'react'

import { Feat } from '../../feat/Feat'

export const CounterAttackBastard : Feat = (
  Feat
    .builder()
    .setIdentifier('counter-attack-bastard')
    .setName('Contre attaque [Arme\xa0bâtarde]')
    .addKeyword('atout')
    .addKeyword('contre attaque')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+ <br/> <br/>

        <p>
          Par round, pour chaque groupe de 10 points dans la maîtrise de l'arme
          choisie, un personnage venant de parrer un coup avec la-dite arme et
          possédant cet atout peut toujours choisir de contre-attaquer
          gratuitement. Les rôles du défenseur et de l'attaquant sont alors
          inversé. Un personnage ne peut pas faire l'objet d'un nombre de
          contre-attaque par round qui soit supérieur à son modificateur de
          dextérité augmenté de 1 point.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
