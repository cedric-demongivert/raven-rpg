import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function WarAxeMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-war-axe</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Hache de guerre</SubjectKeyword>
      <SubjectKeyword>Hache</SubjectKeyword>
      <SubjectTitle>Haches de guerre</SubjectTitle>
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
              <td><img src='./images/characteristics/strength.svg' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La hache de guerre est une arme lourde à deux main dévastatrice pour
          l'équipement adverse. C'est une arme associé à un style extrêmement
          agressif visant d'abord à réduire la présence des blindés sur le champ
          de bataille.
        </p>
      </SubjectContent>
    </Subject>
  )
}
