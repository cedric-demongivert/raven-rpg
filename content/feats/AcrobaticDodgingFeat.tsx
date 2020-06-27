import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function AcrobaticDodgingFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-accrobatic-dodging</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectKeyword>Esquive acrobatique</SubjectKeyword>
      <SubjectTitle>Esquive acrobatique</SubjectTitle>
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
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne une esquive acrobatique supplémentaire par round, une
          esquive acrobatique est résolue comme une acrobatie dont le succès aboutit
          aux effets d'une esquive standard. Lors d'une esquive acrobatique le
          personnage subit un malus de 20% sur sa tentative d'esquive.
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
              <td>Acrobatie</td>
              <td>10+</td>
            </tr>
            <tr>
              <td>Esquive</td>
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne deux esquives acrobatiques supplémentaires par round,
          une esquive acrobatique est résolue comme une acrobatie dont le succès
          aboutit aux effets d'une esquive standard. Lors d'une esquive acrobatique
          le personnage subit un malus de 20% sur sa tentative d'esquive.
        </p>
      </SubjectContent>
    </Subject>
  )
}
