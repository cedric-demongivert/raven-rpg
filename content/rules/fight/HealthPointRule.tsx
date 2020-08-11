import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function HealthPointRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-health-point</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectTitle>Vie, coma et mort</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Points de vie.</em> Les points de vie représentent l'état de santé
          global d'une entitée. Le nombre de points de vie d'une entitée est
          équivalent à son nombre de points de constitution sommée ou multiplié
          par les éventuels modificateurs dont elle peut faire l'objet.
        </p>

        <p>
          <em>Régénération naturelle.</em> Une entitée récupère naturellement un
          nombre fixe de points de vie des suites d'un sommeil réparateur d'au
          minimum huit heures. La régénération naturelle permet à toute entitée
          de récupérer ainsi un nombre de points de vie équivalent à sa
          constitution divisée par 5, le tout arrondit à l'entier inférieur, une
          entitée récupère toujours au minimum 1 point de vie par jour.
        </p>

        <p>
          <em>Régénération naturelle et fatigue.</em> Si une entitée ne peut pas
          dormir correctement ou est sujette à la fatigue à son réveil, elle
          récupère alors un nombre de points de vie équivalent à sa constitution
          divisée par 10, arrondie à l'entier inférieur. Si une entitée est
          épuisée à son réveil, elle ne récupère alors qu'un unique point de vie
          symbolique. Une entitée récupère toujours au minimum 1 point de vie
          par jour.
        </p>

        <p>
          <em>Coma.</em> Quand une entité accumule autant de dégâts qu'elle ne
          possède de points de vie, elle tombe alors immédiatement dans le coma.
          En plus du statut en tant que tel, celle-ci se voit alors
          immédiatement infligée d'une blessure grave dont la nature dépend de
          la source de dégâts ayant initié le statut de coma.
        </p>

        <p>
          <em>Mort.</em> Quand un personnage accumule une quantitée de dégâts
          supérieurs ou égaux à 150% de sa constitution il est alors considéré
          comme mort. Le décès est immédiat et le personnage n'est plus jouable.
        </p>

        <p className='text-center'>
          La mort est définitive, mais rassurez-vous, le deuil ne l'est pas.
        </p>
      </SubjectContent>
    </Subject>
  )
}
