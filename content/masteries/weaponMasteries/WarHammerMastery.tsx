import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function WarHammerMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-war-hammer</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Marteau de guerre</SubjectKeyword>
      <SubjectKeyword>Marteau</SubjectKeyword>
      <SubjectTitle>Marteaux de guerre</SubjectTitle>
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

        <p>
          Le marteau de guerre est une arme lourde de corps à corps manipulable 
          à deux main. C'est une arme extrêmement lente mais parfaite pour
          nullifier les parades par l'utilisation d'un effet de levier
          dévastateur. Le marteau de guerre n'offre pas d'option défensive et
          est associé a un style de combat blindé de première ligne visant à
          fracasser l'infanterie en appliquant de gros dégâts bruts.
        </p>
      </SubjectContent>
    </Subject>
  )
}
