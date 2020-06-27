import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function SpearMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-spear</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Lance</SubjectKeyword>
      <SubjectTitle>Lances</SubjectTitle>
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
          La lance est une arme à une main mortelle avec une excelente allonge
          permettant un très bon contrôle du champ de bataille. Cette arme est
          associé à un style martial plutôt statique permettant d'imposer une
          présence constante sur un champ de bataille en réduisant grandement la
          mobilité des autres personnages.
        </p>
      </SubjectContent>
    </Subject>
  )
}
