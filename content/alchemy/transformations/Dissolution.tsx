import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Dissolution () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-dissolution</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Dissolution</SubjectKeyword>
      <SubjectTitle>Dissolution</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La dissolution est une transformation immédiate qui permet de produire
          un produit alchimique sous forme de liquide en mélangeant une matière
          dans un solvant. La dissolution ne nécéssite aucune connaissance
          particulière. Le résultat d'une dissolution est, en fonction de la
          matière et du solvant soit une potion, un poison ou une huile.
        </p>
      </SubjectContent>
    </Subject>
  )
}
