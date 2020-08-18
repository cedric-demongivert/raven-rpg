import React from 'react'

import { Feat } from '../../feat/Feat'

export const WoundedTiger : Feat = (
  Feat
    .builder()
    .setIdentifier('wounded-tiger')
    .setName('Posture de l\'échassier')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de la lance 10+ <br/>
        Dextérité 12+ <br/> <br/>

        <p>
          En guise d'action, un personnage équipé d'une lance peut adopter la
          posture de l'échassier. Cette posture reste active jusqu'à ce que le
          personnage décide de bouger ou de l'annuler au prix d'une action
          libre. Quand un lancier adopte la posture de l'échassier, toute
          nouvelle intrusion dans sa zone de contrôle provoque automatiquement
          une attaque d'opportunité. Les tentatives de touche du lancier se
          voient affublé d'un malus de deux points par attaque déjà portée au
          cours du tour. En cas de succès, une attaque d'opportunité en posture
          de l'échassier provoque l'interruption de l'action entreprise par la
          victime de l'attaque.
        </p>
      </>
    )
    .build()
)
