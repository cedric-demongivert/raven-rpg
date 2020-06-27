import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function HeavyCrossbowMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-heavy-crossbow</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Arbalète</SubjectKeyword>
      <SubjectKeyword>Arbalète lourde</SubjectKeyword>
      <SubjectTitle>Arbalètes lourdes</SubjectTitle>
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

        <p>
          L'arbalète lourde est une arme à distance précise infligeant de lourds
          dégâts avec une excelente pénétration des armures mais elle souffre
          cependant d'une cadence de tir très faible. C'est une arme associée à un
          style martial permettant d'éliminer des cibles importantes à très bonne
          distance.
        </p>
      </SubjectContent>
    </Subject>
  )
}
