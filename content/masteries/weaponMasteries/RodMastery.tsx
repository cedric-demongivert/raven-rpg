import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function RodMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-rod</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Bâton</SubjectKeyword>
      <SubjectTitle>Bâtons</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg'/></td>
            </tr>
          </tbody>
        </table>

        <p>
          Le bâton est une arme exotique à deux main permettant un excelent contrôle
          des foules grâce à son allonge.
        </p>
      </SubjectContent>
    </Subject>
  )
}
