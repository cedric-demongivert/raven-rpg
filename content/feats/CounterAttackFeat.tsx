import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function CounterAttackFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-counter-attack</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Contre attaque</SubjectKeyword>
      <SubjectTitle>Contre attaque</SubjectTitle>
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
              <td>Maîtrise d'arme légère</td>
              <td>6+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Une fois par round, un personnage équipé d'une arme légère possédant cet
          atout et venant de parer un coup peut toujours choisir de contre attaquer
          gratuitement. Les rôles du défenseur et de l'attaquant sont alors inversé.
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
              <td>Maîtrise d'arme légère</td>
              <td>12+</td>
            </tr>
            <tr>
              <td>Contre attaque</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Deux fois par round, un personnage équipé d'une arme légère possédant cet
          atout et venant de parer un coup peut toujours choisir de contre attaquer
          gratuitement. Les rôles du défenseur et de l'attaquant sont alors inversé.
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
              <td>Maîtrise d'arme légère</td>
              <td>20+</td>
            </tr>
            <tr>
              <td>Contre attaque</td>
              <td>II</td>
            </tr>
          </tbody>
        </table>

        <p>
          Trois fois par round, un personnage équipé d'une arme légère possédant cet
          atout et venant de parer un coup peut toujours choisir de contre attaquer
          gratuitement. Les rôles du défenseur et de l'attaquant sont alors inversé.
        </p>
      </SubjectContent>
    </Subject>
  )
}
