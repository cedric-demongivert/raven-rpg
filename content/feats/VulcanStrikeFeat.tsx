import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function VulcanStrikeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-vulcan-strike</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Frappe vulcain</SubjectKeyword>
      <SubjectTitle>Frappe vulcain</SubjectTitle>
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
              <td>Maîtrise du marteau</td>
              <td>15+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Un personnage équipé d'une hache d'arme, d'un marteau de guerre ou d'une
          épée longue peut toujours au prix de deux point d'action frapper violament
          son adversaire en maximisant la puissance du coup porté. Une frappe
          vulcain ne peut pas être parré et ajoute un bonus de dégât brut égal au
          poid de l'arme utilisé divisé par 2.
        </p>
      </SubjectContent>
    </Subject>
  )
}
