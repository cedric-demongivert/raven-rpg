import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function BullChargeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-bull-charge</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Charge</SubjectKeyword>
      <SubjectKeyword>Charge du taureau</SubjectKeyword>
      <SubjectTitle>Charge du taureau</SubjectTitle>
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
              <td>Force</td>
              <td>12+</td>
            </tr>
            <tr>
              <td>Armures lourdes</td>
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lors d'une charge, ajouter autant de dégât physique que la totalité des
          points de charge utilisé divisé par 4.
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
              <td>Force</td>
              <td>14+</td>
            </tr>
            <tr>
              <td>Armures lourdes</td>
              <td>10+</td>
            </tr>
            <tr>
              <td>Charge du taureau</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lors d'une charge, ajouter autant de dégât physique que la totalité des
          points de charge utilisé divisé par 2.
        </p>

        <div className='feat-iteration'>
          <div className='feat-iteration-value'>
            III
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
              <td>Force</td>
              <td>18+</td>
            </tr>
            <tr>
              <td>Armures lourdes</td>
              <td>18+</td>
            </tr>
            <tr>
              <td>Charge du taureau</td>
              <td>II</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lors d'une charge, ajouter autant de dégât physique que la totalité des
          points de charge utilisé.
        </p>
      </SubjectContent>
    </Subject>
  )
}
