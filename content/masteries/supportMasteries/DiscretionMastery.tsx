import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function DiscretionMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-discretion</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Discrétion</SubjectKeyword>
      <SubjectTitle>Discrétion</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg' width='100' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La maîtrise de la discrétion apprécie la capacité d'un personnage à ne
          pas se faire voir ni entendre. Un jet de discrétion se fait toujours
          en opposition avec la perception des éventuels adversaires. Un test de
          discrétion n'est joué que dans le cas où l'individu cherchant à ce faire
          discret est observable, aussi, si la vision de l'observateur est obstruée
          ou que son audition est extrêmement mauvaise aucun jet de perception ne
          peut être opposé à une tentative de discrétion.
        </p>
      </SubjectContent>
    </Subject>
  )
}
