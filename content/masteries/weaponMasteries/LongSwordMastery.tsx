import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LongSwordMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-long-sword</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Épée longue</SubjectKeyword>
      <SubjectKeyword>Épée</SubjectKeyword>
      <SubjectTitle>Épées longues</SubjectTitle>
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
          L'épée longue, ou épée à deux main est une arme au corps à corps
          dévastatrice permettant d'appliquer de gros dégâts de zone au détriment
          du nombre de coup porté par round. C'est une arme associé à un style
          martial de première ligne particulièrement dangereux pour l'infanterie
          légère.
        </p>
      </SubjectContent>
    </Subject>
  )
}
