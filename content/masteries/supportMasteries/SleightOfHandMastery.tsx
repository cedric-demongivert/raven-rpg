import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function SleightOfHandMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-sleight-of-hand</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Vol à la tire</SubjectKeyword>
      <SubjectTitle>Vol à la tire</SubjectTitle>
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
          La compétence vol à la tire évalue la capacité d'un personnage
          à subtiliser les biens d'un portées par un autre sans éveiller son
          attention. Une tentative de vol à la tire s'effectue toujours en
          opposition avec la compétence de perception de la victime. Tout
          comme la compétence discrétion, un test de vol à la tire n'a lieu
          que si la victime est capable de percevoir le voleur d'une
          quelconque manière.
        </p>
      </SubjectContent>
    </Subject>
  )
}
