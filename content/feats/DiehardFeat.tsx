import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function DiehardFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-diehard</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Dur à cuir</SubjectKeyword>
      <SubjectTitle>Dur à cuir</SubjectTitle>
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
              <td>Constitution</td>
              <td>14+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point de vie supplémentaire tous les 4 points de vie effectif.
          Vous mourrez toujours si vous accumulez plus de 150% de votre
          <strong>constitution</strong> en dégât.
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
              <td>Constitution</td>
              <td>18+</td>
            </tr>
            <tr>
              <td>Dur à cuir</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Gagnez 1 point de vie supplémentaire tous les 2 points de vie effectif.
          Vous mourrez toujours si vous accumulez plus de 150% de votre
          <strong>constitution</strong> en dégât.
        </p>
      </SubjectContent>
    </Subject>
  )
}
