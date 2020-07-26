import React from 'react'

import { Feat } from '../../feat/Feat'

export const CounterAttack : Feat = (
  Feat
    .builder()
    .setIdentifier('counter-attack')
    .setName('Contre attaque [Arme\xa0à\xa0une\xa0main]')
    .addKeyword('atout')
    .addKeyword('contre attaque')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 6+ <br/> <br/>

        <p>
          Par round, pour chaque groupe de 6 points dans la maîtrise de l'arme
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
