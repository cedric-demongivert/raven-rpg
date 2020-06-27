import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function AcrobaticParryFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-accrobatic-parry</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Parade</SubjectKeyword>
      <SubjectKeyword>Parade acrobatique</SubjectKeyword>
      <SubjectTitle>Parade acrobatique</SubjectTitle>
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
              <td>Acrobatie</td>
              <td>15+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne une parade supplémentaire par round, cette parade est
          résolue comme une acrobatie dont le succès aboutit aux effets d'une parade
          standard avec l'arme choisie. Lors d'une parade acrobatique le personnage
          subit un malus de 20% sur sa tentative.
        </p>
      </SubjectContent>
    </Subject>
  )
}
