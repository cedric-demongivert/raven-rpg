import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function BastardSwordMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-bastard-sword</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Épée</SubjectKeyword>
      <SubjectKeyword>Épée bâtarde</SubjectKeyword>
      <SubjectTitle>Épées bâtardes</SubjectTitle>
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
          L'épée bâtarde, ou épée à une main et demie est une arme hybride située
          entre l'épée courte et l'épée longue pouvant donc être manié aussi bien à
          une main qu'à deux. C'est une arme associé à un style hybride de petits
          enchainement d'attaque suivi de coups plus lent mais plus puissant.
        </p>
      </SubjectContent>
    </Subject>
  )
}
