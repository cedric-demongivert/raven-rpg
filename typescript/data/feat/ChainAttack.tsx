import React from 'react'

import { Feat } from '../../feat/Feat'

export const ChainAttack : Feat = (
  Feat
    .builder()
    .setIdentifier('chain-attack')
    .setName('Attaque en chaîne [Arme\xa0à\xa0une\xa0main]')
    .addKeyword('atout')
    .addKeyword('dextérité')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Dextérité 12+ <br/>
        Maîtrise de l'arme choisie 6+ <br/> <br/>

        <p>
          Le personnage peut échanger une parade ou une esquive contre une
          attaque supplémentaire lors d'une attaque à outrance réalisée avec
          l'arme choisie par groupe de 6 points de maîtrise de la-dite arme. Un
          personnage ne peut pas faire l'objet d'un nombre d'échange par round
          qui soit supérieur à son modificateur de dextérité augmenté de 1
          point. Les attaques supplémentaires se résolvent comme des attaques
          normales avec un malus de 2 points par attaque déjà portée.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
