import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Greenleave () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-green-leave</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Verderelle</SubjectKeyword>
      <SubjectTitle>Verderelle</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La verderelle est une espèce de plante grimpante formant des petites
          feuilles rondes capable de retenir les goûtes de pluies. Extrêmement
          toxique elle est principalement utilisée dans la production d'élixir
          de verderelle, une solution de dernier recours pour drainer les
          toxines d'un corps malade.
        </p>
      </SubjectContent>
    </Subject>
  )
}
