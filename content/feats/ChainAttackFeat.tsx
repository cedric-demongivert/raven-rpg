import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function ChainAttackFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-chain-attack</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Attaque en chaîne</SubjectKeyword>
      <SubjectTitle>Attaque en chaîne</SubjectTitle>
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
              <td>Épées courtes ou Épées batardes</td>
              <td>5+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Peut échanger lors d'une attaque à outrance une parade à l'épée courte ou
          à l'épée batarde contre une attaque supplémentaire. Les attaques
          supplémentaires se résolvent comme des attaques standards avec un malus de
          10% par attaque déjà portée.
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
              <td>Épées courtes</td>
              <td>10+</td>
            </tr>
            <tr>
              <td>Attaque en chaîne</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Peut échanger lors d'une attaque à outrance jusqu'à deux parades à l'épée
          courte contre une attaque supplémentaire. Les attaques supplémentaires se
          résolvent comme des attaques standards avec un malus de 10% par attaque
          déjà portée. Il est toujours possible d'échanger une seule parade à l'épée
          batarde contre une attaque supplémentaire.
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
              <td>Épées courtes</td>
              <td>15+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>12+</td>
            </tr>
            <tr>
              <td>Attaque en chaîne</td>
              <td>II</td>
            </tr>
          </tbody>
        </table>

        <p>
          Peut échanger lors d'une attaque à outrance jusqu'à trois parades à l'épée
          courte contre une attaque supplémentaire. Les attaques supplémentaires se
          résolvent comme des attaques standard avec un malus de 10% par attaque
          déjà portée. Il est toujours possible d'échanger une seule parade à l'épée
          batarde contre une attaque supplémentaire.
        </p>

        <div className='feat-iteration'>
          <div className='feat-iteration-value'>
            IV
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
              <td>Épées courtes</td>
              <td>20+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>20+</td>
            </tr>
            <tr>
              <td>Attaque en chaîne</td>
              <td>III</td>
            </tr>
          </tbody>
        </table>

        <p>
          Peut échanger lors d'une attaque à outrance jusqu'à quatre parades à l'épée
          courte contre une attaque supplémentaire. Les attaques supplémentaires se
          résolvent comme des attaques standard avec un malus de 10% par attaque
          déjà portée. Il est toujours possible d'échanger une seule parade à l'épée
          batarde contre une attaque supplémentaire.
        </p>
      </SubjectContent>
    </Subject>
  )
}
