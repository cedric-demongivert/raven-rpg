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
      <SubjectTitle>Attaque au corps à corps</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Attaque au corps à corps.</em> Une attaque au corps à corps est
          une action qui nécéssite d'être à porté de sa cible. Les attaques au
          corps à corps ne peuvent pas faire l'objet d'une quelconque
          coopération mais leur succès peut être influencé par l'environnement.
          Une attaque au corps à corps se déroule toujours en deux temps : la
          touche et la résolution des dégâts.
        </p>

        <p>
          <em>Touche.</em> Lors de la phase de touche, le défenseur peut s'il en
          a la capacité choisir d'esquiver, de parer ou de ne rien faire. La
          touche est un test d'opposition standard entre la maîtrise de l'arme
          de l'attaquant et la maîtrise choisie par le défenseur. Dans le cas où
          le défenseur ne fait rien, ne peut pas esquiver ou ne peut pas parer,
          l'attaquant touche automatiquement.
        </p>

        <p>
          <em>Esquive.</em> Une entitée à le droit à une esquive par tour. Lors
          d'une esquive, le défenseur oppose sa maîtrise de l'esquive à la
          maîtrise de l'arme de l'attaquant et choisi une direction dans
          laquelle esquiver. Si l'esquive est réussie, le défenseur peut alors
          réaliser un pas de placement dans la direction qu'il a choisie et
          l'attaquant échoue son action. Le nombre d'esquive par tour peut
          varier en fonction des atouts et autres effets. Le défenseur doit
          toujours equiver dans une direction qui est libre d'accès. Une esquive
          ne peut pas faire l'objet d'une coopération de quelque nature que ce
          soit.
        </p>

        <p>
          <em>Parade.</em> Une entitée à le droit à une parade par tour. Lors
          d'une parade, le défenseur oppose la maîtrise de sa propre arme, ou de
          son bouclier à la maîtrise de l'attaquant. Si la parade réussie,
          l'attaquant échoue son action. Le nombre de parade par tour peut
          varier en fonction des atouts et des effets. Une parade ne peut pas
          faire l'objet d'une coopération de quelque nature que ce soit.
        </p>

        <p>
          <em>Surnombre.</em> Si le défenseur est à portée de trois adversaire
          ou plus, il subit alors un malus de deux points sur ses éventuels jets
          d'esquive ou de parrade. Ce nombre est augmentée d'un point pour
          chaque adversaire supplémentaire au delà de trois.
        </p>

        <p>
          <em>Tenaille.</em> Si le défenseur est à portée de deux adversaires
          opposés l'un de l'autre il est alors considéré comme pris en tenaille
          et subit alors un malus de deux points sur ses éventuels jets
          d'esquive ou de parrade.
        </p>

        <p>
          <em>Dégâts.</em> Si l'attaquant réussi sa touche, il peut alors
          calculer les dégâts qu'il va infliger au défenseur en utilisant les
          indications de son arme et le nombre de points d'armure possédés par
          le défenseur.
        </p>
      </SubjectContent>
    </Subject>
  )
}
