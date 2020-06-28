import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Dreamstar () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-dreamstar</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Songétoile</SubjectKeyword>
      <SubjectTitle>Songétoile</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La songétoile, aussi appellée sauge étoilée est une espèce de sauge
          formant des petites fleures blanches de forme étoilée. Elle pousse
          particulièrement proche des cours d'eau et peut être trouvée même en
          plein hiver. Infusée c'est une plante aux vertues appaisante
          augmentant à la fois la concentration et facilitant le sommeil.	
        </p>
      </SubjectContent>
    </Subject>
  )
}
