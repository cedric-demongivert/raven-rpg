import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function BloodBathFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-blood-bath</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Bain de sang</SubjectKeyword>
      <SubjectTitle>Bain de sang (α)</SubjectTitle>
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
              <td>Haches ou Dagues</td>
              <td>8+</td>
            </tr>
            <tr>
              <td>Contrôle</td>
              <td>14-</td>
            </tr>
          </tbody>
        </table>

        <p>
          Infligez 1 point de dégât supplémentaire tous les 4 points de vie
          perdus.
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
              <td>Haches ou Dagues</td>
              <td>16+</td>
            </tr>
            <tr>
              <td>Contrôle</td>
              <td>10-</td>
            </tr>
            <tr>
              <td>Bain de sang</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Infligez 1 point de dégât supplémentaire tous les 2 points de vie
          perdus.
        </p>
      </SubjectContent>
    </Subject>
  )
}
