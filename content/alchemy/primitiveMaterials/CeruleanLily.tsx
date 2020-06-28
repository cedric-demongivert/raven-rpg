import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function CeruleanLily () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-cerulean-lily</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Lys azuré</SubjectKeyword>
      <SubjectTitle>Lys azuré</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Le lys azuré est une plante à bulbe qui ne s'ouvre que la nuit. Elle
          est connue pour sa teinte azuré et sa faible fluorescence. C'est une
          plante magnifique mais à manipuler avec précotion : elle est connue
          pour contenir une quantitée concentrée d'ether. La pousse du lys azuré
          est assez ératique et il n'est jamais garantie que la terre choisie
          pour le planter lui convienne. Il est utilisé dans la production de
          liqueur de lys aussi appellée sang des rois.
        </p>
      </SubjectContent>
    </Subject>
  )
}
