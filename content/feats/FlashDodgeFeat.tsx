import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function FlashDodgeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-flash-dodge</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectKeyword>Esquive instinctive</SubjectKeyword>
      <SubjectTitle>Esquive instinctive</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <div className="feat-iteration">
          <div className="feat-iteration-value">
            I
          </div>
        </div>

        <table className="feat-conditions">
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
              <td>14+</td>
            </tr>
            <tr>
              <td>Contrôle</td>
              <td>12-</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage peut tenter d'esquiver les flèches moyennant un malus de 30%
          sur son jet d'esquive.
        </p>
      </SubjectContent>
    </Subject>
  )
}
