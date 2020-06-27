import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function DaggerMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-dagger</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Dague</SubjectKeyword>
      <SubjectTitle>Dagues</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La dague est une arme au corps à corps très précise mais souffrant d'une
          alonge faible et de dégâts réduit. Cette arme est associé à un style
          agressif dont l'objectif principal est d'aller chercher les points faibles
          de son adversaire pour infliger un maximum de dégât. La dague permet de
          bonifier les coups critiques et de se spécialiser dans l'application
          d'effets négatifs via des frappes chirugicales.
        </p>
      </SubjectContent>
    </Subject>
  )
}
