import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function CatGraceFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-cat-grace</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Vol contrôlé</SubjectKeyword>
      <SubjectTitle>Vol contrôlé</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <div className='feat-iteration'>
          <div className='feat-iteration-value'>
            I
          </div>
        </div>

        <table className='feat-conditions'>
          <thead>
            <tr>
              <th colSpan={2}>
                Prérequis:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dextérité</td>
              <td>14+</td>
            </tr>
            <tr>
              <td>Acrobatie</td>
              <td>15+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Si une acrobatie visant un autre personnage échoue alors l'acteur de
          l'acrobatie peut tenter de se rattraper in-extremis en passant un test
          d'acrobatie de difficulté 18 afin d'annuler tous les effets de la parade
          ou de l'esquive de sa victime. Si l'acteur réussi son jet, la parade ou
          l'esquive de sa victime est annulée et décomptée de la quantité de parade
          ou d'esquive de son tour.
        </p>
      </SubjectContent>
    </Subject>
  )
}
