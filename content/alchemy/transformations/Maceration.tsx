import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Maceration () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-maceration</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Macération</SubjectKeyword>
      <SubjectTitle>Macération</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La macération est une transformation lente qui permet d'extraire des
          propriétés alchimiques en laissant se décomposer de la matière dans un
          solvant. C'est une opération qui nécéssite surtout d'avoir du temps et
          un espace clos relativement sécuritaire afin d'éviter toute
          contamination extérieure. La macération se réalise dans un chaudron et
          requiert de laisser la matière se décomposer dans un solvant à
          température ambiante. Ce procédé peut prendre entre un et plusieurs
          jours. Le résultat d'une macération est un macérat.
        </p>

        <p>
          Pour réaliser une macération il faut réaliser un test
          d'auto-résolution en utilisant son niveau de connaissance de la
          macération.
        </p>
      </SubjectContent>
    </Subject>
  )
}
