import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function WeaponAndShieldFightingMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-martial-style-weapon-and-shield-fighting</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Style martial</SubjectKeyword>
      <SubjectKeyword>Combat à l'arme et au bouclier</SubjectKeyword>
      <SubjectTitle>Combat à l'arme et au bouclier</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg'/></td>
              <td><img src='./images/characteristics/strength.svg'/></td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
