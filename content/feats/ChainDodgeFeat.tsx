import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function ChainDodgeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-chain-dodge</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectKeyword>Esquive en chaîne</SubjectKeyword>
      <SubjectTitle>Esquive en chaîne</SubjectTitle>
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
              <td>Esquive</td>
              <td>8+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne une esquive supplémentaire par round, chaque esquive
          supplémentaire jouée durant un round se voit attribuée un malus de 10%
          cumulatif.
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
              <td>Esquive</td>
              <td>12+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne deux esquives supplémentaires par round, chaque
          esquive supplémentaire jouée durant un round se voit attribuée un malus de
          10% cumulatif.
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
              <td>Esquive</td>
              <td>16+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>16+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le personnage gagne trois esquives supplémentaire par round, chaque
          esquive supplémentaire jouée durant un round se voit attribuée un malus de
          10% cumulatif.
        </p>
      </SubjectContent>
    </Subject>
  )
}
