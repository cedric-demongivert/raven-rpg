import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Skyhammer () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-skyhammer</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Marterage</SubjectKeyword>
      <SubjectTitle>Marterage</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La marterage est une forme de houx que l'ont dit ne fleurire qu'après
          le passage d'un orage. Les fruits de marterage sont des espèces de
          cône formée de pétales satinés assez épaisses de couleur mauve veiné
          de canaux cyan. C'est une plante fortifiante mais qui mal utilisée
          peut provoquer des épisodes de rage furieuse ou des crises de spasmes
          douloureux. 	
        </p>
      </SubjectContent>
    </Subject>
  )
}
