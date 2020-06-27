import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function BloodThirstFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-blood-thirst</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Soif de sang</SubjectKeyword>
      <SubjectTitle>Soif de sang (α)</SubjectTitle>
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
            <tr>
              <td>Contrôle</td>
              <td>14-</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point d'initiative supplémentaire tous les 4 points de vie
          perdus.
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
              <td>Contrôle</td>
              <td>10-</td>
            </tr>
            <tr>
              <td>Soif de sang</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point d'initiative supplémentaire tous les 2 points de vie
          perdus.
        </p>
      </SubjectContent>
    </Subject>
  )
}
