import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function AxeMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-axe</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Hache</SubjectKeyword>
      <SubjectTitle>Haches</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
              <th>Mineure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/strength.svg' /></td>
              <td><img src='./images/characteristics/dexterity.svg' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La hache est une arme à une main légère parfaite pour découper les armures
          et les boucliers des adversaire tout en affligeant des blessures
          dangereuse. C'est une arme associé à un style agressif visant d'abord à
          réduire la présence des blindés sur le champ de bataille.
        </p>
      </SubjectContent>
    </Subject>
  )
}
