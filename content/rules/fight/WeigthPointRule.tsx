import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function WeigthPointRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-weigth-point</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Point de charge</SubjectKeyword>
      <SubjectTitle>Points de charge</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Une entitée possède autant de points de charge qu'elle à de points de
          force. Les points de charge représente la quantité d'objets que peut
          équiper et transporter l'entité avant de se voir attribuer des malus.
          Tous les deux points de charge non utilisé, l'entité peut rajouter un
          point de dégât supplémentaire à toute ses attaques au corps à corps et à
          son initiative. Tous les points de charge au dessus de la limite de
          l'entité implique la perte d'un point de dégât à toutes les attaques au
          corps à corps et la perte d'un point à son initiative.
        </p>
      </SubjectContent>
    </Subject>
  )
}
