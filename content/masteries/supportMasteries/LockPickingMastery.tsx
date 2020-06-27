import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LockPickingMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-lock-picking</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Crochetage</SubjectKeyword>
      <SubjectTitle>Crochetage</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg' /></td>
              <td><img src='./images/characteristics/luck.svg' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La compétence crochetage évalue la capacité d'un personnage à
          se jouer de toutes sortes de serrures et de mécanismes. Tenter
          d'ouvrir une porte ou un coffre sans sa clef, de désactiver une
          éventuelle alarme ou désamorcer un piège sont des exemples de
          situations ou un test de crochetage est nécéssaire.
        </p>

        <p>
          Une tentative de crochetage se joue toujours en opposition avec le
          niveau de difficulté du mécanisme à forcer.
        </p>
      </SubjectContent>
    </Subject>
  )
}
