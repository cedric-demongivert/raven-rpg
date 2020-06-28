import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Percolation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-percolation</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Percolation</SubjectKeyword>
      <SubjectTitle>Percolation</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La percolation est une transformation lente qui permet d'extraire des
          propriétés alchimiques en faisant traverser un liquide dans une
          couche de matière perméable à une certaine pression. C'est
          une transformation complexe qui nécéssite l'accès à un laboratoire
          comprenant un système de percolation. Le résultat d'une percolation
          est un filtrat.
        </p>

        <p>
          Pour réaliser une percolation il faut réaliser un test
          d'auto-résolution en utilisant son niveau de connaissance de la
          percolation.
        </p>
      </SubjectContent>
    </Subject>
  )
}
