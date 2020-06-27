import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function TwoHandedWeaponFightingMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-martial-style-two-handed-weapon-fighting</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Style martial</SubjectKeyword>
      <SubjectKeyword>Combat à l'arme à deux mains</SubjectKeyword>
      <SubjectTitle>Combat à l'arme à deux mains</SubjectTitle>
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
              <td><img src='./images/characteristics/strength.svg'/></td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
