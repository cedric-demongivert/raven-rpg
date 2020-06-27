import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ShortSwordMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-short-sword</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Épée courte</SubjectKeyword>
      <SubjectKeyword>Épée</SubjectKeyword>
      <SubjectTitle>Épées courtes</SubjectTitle>
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
          L'épée courte est une arme légère de corp à corp manipulable à une
          main. C'est une arme permettant à la fois d'enchaîner rapidement les
          coups ou les parades. Contrairement à sa version lourde, l'épée courte
          est l'outil parfait pour les amateurs d'un style martial mobile
          permettant d'éxécuter rapidement les cibles les plus vulnérables.
        </p>
      </SubjectContent>
    </Subject>
  )
}
