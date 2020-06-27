import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function HackerFeat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats-hacker</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectKeyword>Hacker</SubjectKeyword>
      <SubjectTitle>Hacker (α)</SubjectTitle>
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
              <td>Maîtrise de la dague</td>
              <td>10+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Un fois par round, en guise d'attaque à outrance, un personnage armé
          d'une dague peut toujours choisir d'ignorer tout ou partie de l'armure de
          son adversaire. A cette fin le personnage doit réussir une attaque normale
          plus un jet d'opposition entre sa maîtrise de la dague et le nombre de
          point d'armure à ignorer multiplié par quatre. Si le second jet réussi
          l'assassin porte alors un coup ignorant tout ou partie de l'armure de son
          adversaire.
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
              <td>Maîtrise de la dague</td>
              <td>20+</td>
            </tr>
            <tr>
              <td>Dextérité</td>
              <td>14+</td>
            </tr>
          </tbody>
        </table>

        <p>
          Un fois par round, en guise d'attaque à outrance, un personnage armé
          d'une dague peut toujours choisir d'ignorer tout ou partie de l'armure de
          son adversaire. A cette fin le personnage doit réussir une attaque normale
          plus un jet d'opposition entre sa maîtrise de la dague et le nombre de
          point d'armure à ignorer multiplié par deux. Si le second jet réussi
          l'assassin porte alors un coup ignorant tout ou partie de l'armure de son
          adversaire.
        </p>
      </SubjectContent>
    </Subject>
  )
}
