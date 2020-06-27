import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function EagleChargeFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-eagle-charge</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Charge</SubjectKeyword>
      <SubjectKeyword>Charge de l'aigle</SubjectKeyword>
      <SubjectTitle>Charge de l'aigle</SubjectTitle>
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
              <td>10+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lors d'une charge un personnage possédant cet atout peut toujours choisir
          d'échanger une parade à l'épée courte contre une attaque supplémentaire.
          Les attaques supplémentaires se résolvent comme des attaques standard avec
          un malus de 10% par attaque déjà portée. Les bénefices de la charge
          s'appliquent à l'ensemble des coups portés.
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
              <td>20+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>14+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lors d'une charge un personnage possédant cet atout peut toujours choisir
          d'échanger jusqu'à deux parades à l'épée courte contre une attaque
          supplémentaire. Les attaques supplémentaires se résolvent comme des
          attaques standard avec un malus de 10% par attaque déjà portée. Les
          bénefices de la charge s'appliquent à l'ensemble des coups portés.
        </p>
      </SubjectContent>
    </Subject>
  )
}
