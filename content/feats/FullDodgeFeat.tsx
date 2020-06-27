import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function FullDodgeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-full-dodge</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectKeyword>Esquive totale</SubjectKeyword>
      <SubjectTitle>Esquive totale</SubjectTitle>
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
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Au prix d'une action de mouvement, le personnage peut toujours choisir de
          jouer en dernier et de gagner une esquive supplémentaire lors du round en
          cours.
        </p>
      </SubjectContent>
    </Subject>
  )
}
