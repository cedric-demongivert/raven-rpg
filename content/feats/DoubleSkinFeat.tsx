import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function DoubleSkinFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-double-skin</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Seconde peau</SubjectKeyword>
      <SubjectTitle>Seconde peau</SubjectTitle>
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
              <td>Armures légères</td>
              <td>8+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Toutes les armures légères voient leur malus de charge réduit de 1 point.
        </p>

        <div className="feat-iteration">
          <div className="feat-iteration-value">
            II
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
              <td>Armures légères</td>
              <td>16+</td>
            </tr>
            <tr>
              <td>Seconde peau</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Toutes les armures légères voient leur malus de charge réduit de 2 point.
        </p>
      </SubjectContent>
    </Subject>
  )
}
