import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function AttackRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-attack</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Attaque</SubjectKeyword>
      <SubjectTitle>Attaque</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Une attaque est une action simple qui nécéssite d'être à porté de sa
          cible. Les attaques ne peuvent pas faire l'objet d'une quelconque
          coopération mais leur succès peuvent être influencé par l'environnement.
          Une attaque se déroule toujours en deux temps : la touche et la
          résolution des dégâts.
        </p>

        <p>
          Lors de la phase de touche, le défenseur peut s'il en a la capacité
          choisir d'esquiver, de parer ou de ne rien faire. La touche est un test
          d'opposition standard entre la maîtrise de l'arme de l'attaquant et la
          maîtrise choisie par le défenseur. Si le défenseur ne fait rien ou ne peut
          ni esquiver le coup ni le parer, l'attaquant touche automatiquement.
        </p>

        <p>
          Une entitée à le droit à une esquive par tour. Lors d'une esquive, le
          défenseur oppose sa maîtrise de l'esquive à la maîtrise de l'arme de
          l'attaquant et choisi une direction dans laquelle esquiver. Si l'esquive
          est réussie, le défenseur peut alors réaliser un pas de placement dans la
          direction qu'il a choisie et l'attaquant échoue son action. Le nombre
          d'esquive par tour peut varier en fonction des atouts et autres effets. Le
          défenseur doit toujours equiver dans une direction qui est libre d'accès.
        </p>

        <p>
          Une entitée à le droit à une parade par tour. Lors d'une parade, le
          défenseur oppose la maîtrise de sa propre arme, ou de son bouclier à la
          maîtrise de l'attaquant. Si la parade réussie, l'attaquant échoue son
          action. Le nombre de parade par tour peut varier en fonction des atouts et
          des effets.
        </p>

        <p>
          Certaines situations sont à l'avantage de l'attaquant. Si le défenseur
          esquive pour sortir de la zone de contrôle de son adversaire il se voit
          alors attribuer un malus de 2 points sur sa maîtrise de l'esquive. Pour
          chaque entitée hostile autour de lui dont le défenseur est l'objet de
          l'attention, le défenseur se voit en plus attribuer un malus de 2 points
          supplémentaire sur la maîtrise qu'il utilise pour se défendre.
        </p>

        <p>
          Certaines situations sont à l'avantage du défenseur. Pour chaque entitée
          hostile autour de lui dont l'attaquant est l'objet de l'attention, le
          défenseur se voit en plus attribuer un bonus de 2 points supplémtaire sur
          la maîtrise qu'il utilise pour se défendre. Si l'attaquant doit réaliser
          un pas de placement pour attaquer le défenseur, celui-ci gagne 2 points
          supplémentaire sur la maîtrise qu'il utilise pour se défendre.
        </p>

        <p>
          Certaines règles supplémentaire peuvent encore modifier le niveau de
          maîtrise de l'attaquant ou du défenseur en fonction du type d'action
          entrepris ou des effets actifs.
        </p>

        <p>
          Si l'attaquant réussi sa touche, il peut alors calculer les dégâts qu'il
          va infliger au défenseur.
        </p>
      </SubjectContent>
    </Subject>
  )
}
