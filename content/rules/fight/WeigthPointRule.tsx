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
          <em>Points de charge.</em> Une entitée possède autant de points de
          charge qu'elle ne possède de points de force. Les points de charge
          représente la quantité d'objets que peut équiper et transporter
          l'entité avant de se voir attribuer des malus.
        </p>

        <p>
          <em>Sous-charge.</em> Une entitée est considéré en sous-charge quand
          elle possède plus de points de charge qu'il n'en faut pour supporter
          l'entièreté de son équipement. Dans cette situation, tous les deux
          points de charge non utilisé sont convertis à la fois en points
          d'initiative bonus et en points de dégâts supplémentaires ajoutable
          aux attaques au corps à corps.
        </p>

        <p>
          <em>Sur-charge.</em> Tous les points de charge au dessus de la limite
          de l'entité implique la perte d'un point de dégât à toutes les
          attaques au corps à corps et la perte d'un point à son initiative.
        </p>
      </SubjectContent>
    </Subject>
  )
}
