import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function HammerMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-hammer</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Marteau</SubjectKeyword>
      <SubjectTitle>Marteau</SubjectTitle>
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
          Le marteau est une arme à une main légère parfaite pour infliger des
          dégâts contondant ignorant l'armure, c'est cependant une arme très vite
          limitée en présence d'un bouclier pour la parrer.
        </p>
      </SubjectContent>
    </Subject>
  )
}
