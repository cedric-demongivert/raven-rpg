import React from 'react'

import { Feat } from '../../feat/Feat'

export const EagleCharge : Feat = (
  Feat
    .builder()
    .setIdentifier('eagle-charge')
    .setName('Charge de l\'aigle [Arme\xa0à\xa0une\xa0main]')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('charge de l\'aigle')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 8+ <br/> <br/>

        <p>
          Lors d'une charge un personnage possédant cet atout et ce pour chaque
          groupe de 8 points de maîtrise dans le maniement de l'arme à une main
          choisie peut toujours choisir d'échanger une parade ou une esquive
          contre une attaque supplémentaire de la-dite arme. Les attaques
          supplémentaires se résolvent comme des attaques standard avec un malus
          de 2 points par attaque déjà portée. Les bénefices de la charge
          s'appliquent à l'ensemble des coups portés. Un personnage ne peut pas
          faire l'objet d'un nombre d'attaque bonus par charge qui soit
          supérieur à son modificateur de dextérité augmenté de 1 point.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
