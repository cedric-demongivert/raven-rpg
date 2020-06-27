import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function TwistedFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-twisted</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Coup retord</SubjectKeyword>
      <SubjectTitle>Coup retord</SubjectTitle>
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
              <td>Maîtrise d'arme</td>
              <td>15+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Une fois par round quand le personnage échoue une tentative d'attaque il
          peut retenter sa chance moyennant un malus supplémentaire de 40% sur le
          jet de touche. Si le second coup porte les dégâts sont divisés par deux et
          arrondi à l'entier inférieur, minimum un point de dégât de chaque type
          proposé par l'arme.
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
              <td>Maîtrise d'arme</td>
              <td>20+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>16+</td>
            </tr>
            <tr>
              <td>Coup retord</td>
              <td>I</td>
            </tr>
          </tbody>
        </table>

        <p>
          Deux fois par round quand le personnage échoue une tentative d'attaque il
          peut retenter sa chance moyennant un malus supplémentaire de 40% sur le
          jet de touche. Si le second coup porte les dégâts sont divisés par deux et
          arrondi à l'entier inférieur, minimum un point de dégât de chaque type
          proposé par l'arme.
        </p>
      </SubjectContent>
    </Subject>
  )
}
