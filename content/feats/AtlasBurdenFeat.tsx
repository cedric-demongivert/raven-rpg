import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function AtlasBurdenFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-atlas-burden</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Fardeau d'Atlas</SubjectKeyword>
      <SubjectTitle>Fardeau d'Atlas</SubjectTitle>
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
              <td>Constitution</td>
              <td>14+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point de charge supplémentaire tous les 4 point de charge
          effectif.
        </p>

        <div className='feat-iteration'>
          <div className='feat-iteration-value'>
            II
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
              <td>Constitution</td>
              <td>18+</td>
            </tr>
            <tr>
              <td>Fardeau d'Atlas</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point de charge supplémentaire tous les 2 point de charge
          effectif.
        </p>
      </SubjectContent>
    </Subject>
  )
}
