import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-introduction</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Introduction</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les scènes à interaction forte nécessitant des prises de décision simultanées
          sont résolues au tour par tour. Tout élément du récit pouvant
          agir de son propre chef lors d'une telle situation est appelé <strong>
          entité</strong>. Chaque <strong>tour</strong> ne concerne qu'une
          unique entité qui peut entreprendre un nombre limité d'<strong>actions
          </strong> avant de passer son tour à l'entité suivante.
        </p>

        <p>
          L'ensemble des tours nécessaires pour que toutes des entités d'une scène
          puissent agir est appelé une <strong>manche</strong>. Il peut arriver qu'une
          entité ait le droit de jouer plusieurs tours lors d'une manche. La quantité
          de tour joué pendant une manche et leur ordonnancement dépend des scores
          d'initiative de chaque entité.
        </p>
      </SubjectContent>
    </Subject>
  )
}
