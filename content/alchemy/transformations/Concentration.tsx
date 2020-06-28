import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Concentration () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-concentration</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Concentration</SubjectKeyword>
      <SubjectTitle>Concentration</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La concentration est une transformation lente qui permet de sommer
          les effets de deux matière liquide ayant les mêmes propriétés
          alchimiques. La qualité d'une concentration est la moyenne des
          qualités des produits concentrés arrondie à l'inférieur. La
          concentration de deux produits somme aussi le niveau d'intoxication de
          celui-ci. Pour concentrer il faut uniquement une téhière et une source
          de chaleur suffisante pour réduire la quantité de solvant total. La
          concentration ne nécéssite aucune connaissance particulière.
        </p>
      </SubjectContent>
    </Subject>
  )
}
