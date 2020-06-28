import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function BloodyBells () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-bloody-bells</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Sanguine</SubjectKeyword>
      <SubjectTitle>Sanguine</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La sanguine est une forme de muguet beaucoup plus fourni aux cloches
          rouges virant au jaune que l'on retrouve dans certaines forêt. C'est
          une plante extrêmement toxique entraînant une augmentation de la
          pression artérielle. Elle peut être utilisée pour la fabrication de
          poisons hémoragiques.
        </p>
      </SubjectContent>
    </Subject>
  )
}
