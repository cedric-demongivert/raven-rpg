import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Dilution () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-dilution</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Dilution</SubjectKeyword>
      <SubjectTitle>Dilution</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La dilution est une transformation qui permet de réduire les effets
          d'une matière liquide. La qualité d'une dilution est équivalente à la
          qualité du produit dilué. Il n'est pas possible de diluer un produit à
          un degré tel qu'on ne puisse diviser chacune de ses propriétés
          alchimiques par le degré de dilution choisi. Pour diluer il faut
          uniquement un contenant libre et du solvant. La dilution ne
          nécéssite aucune connaissance particulière.
        </p>
      </SubjectContent>
    </Subject>
  )
}
