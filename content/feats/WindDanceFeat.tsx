import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function WindDanceFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-wind-dance</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Danse des vents</SubjectKeyword>
      <SubjectTitle>Danse des vents</SubjectTitle>
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
              <td>Esquive</td>
              <td>20+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Avec cet atout le malus attribué à un enchaînement d'esquive durant un
          round est réduit à 5% cumulatif.
        </p>
      </SubjectContent>
    </Subject>
  )
}
