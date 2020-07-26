import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Regeneration () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-regeneration</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Régénération naturelle</SubjectKeyword>
      <SubjectTitle>Régénération naturelle</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Une entitée récupère naturellement un nombre fixe de points de vie
          tous les jours. Des suites d'une bonne nuit de sommeil une entitée
          regagne un nombre de points de vie équivalent à sa constitution divisé
          par 5 arrondie à l'entier inférieur, une entitée récupère toujours au
          moins 1 point de vie par jour.
        </p>

        <p>
          <em>Fatigue.</em> Si une entitée ne peut pas dormir correctement ou
          est sujette à la fatigue à son réveille, celle-ci ne récupère alors
          qu'un nombre de points de vie équivalent à sa constitution divisé
          par 10 arrondie à l'entier inférieur, une entitée récupère toujours
          au moins 1 point de vie par jour.
        </p>

        <p>
          <em>Épuisement.</em> Si une entitée est épuisée, elle ne récupère
          alors qu'un unique point de vie symbolique.
        </p>
      </SubjectContent>
    </Subject>
  )
}
