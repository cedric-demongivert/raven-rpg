import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function DefensiveStyleFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-defensive-style</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Style défensif</SubjectKeyword>
      <SubjectTitle>Style défensif</SubjectTitle>
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
              <td>Épées courtes</td>
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagne une parade supplémentaire à l'épée courte par round.
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
              <td>Épées courtes</td>
              <td>10+</td>
            </tr>
            <tr>
              <td>Style défensif</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagne deux parades supplémentaires à l'épée courte par round.
        </p>

        <div className="feat-iteration">
          <div className="feat-iteration-value">
            III
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
              <td>Épées courtes</td>
              <td>17+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>12+</td>
            </tr>
            <tr>
              <td>Style défensif</td>
              <td>II</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagne trois parades supplémentaires à l'épée courte par round.
        </p>
      </SubjectContent>
    </Subject>
  )
}
