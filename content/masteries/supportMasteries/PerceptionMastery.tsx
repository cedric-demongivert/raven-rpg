import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function PerceptionMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-perception</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Perception</SubjectKeyword>
      <SubjectTitle>Perception</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg' width='100' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La perception représente la capacité d'un personnage à utiliser ses
          sens pour analyser son environnement. Tenter d'écouter des
          conversations lointaines, de trouver un autre personnage cherchant
          à se faire discret ou chercher des mécanismes cachés dans le sol et
          les murs sont des actions nécéssitant un jet de perception.
        </p>

        <p>
          Si la perception se fait à l'encontre d'un autre personnage elle se
          joue contre la compétence qu'il utilise au moment où la perception
          est joué. Un test de perception contre discrétion est un cas
          d'école. Dans le cas où la perception se joue contre l'environnement
          elle se fera contre son degré de difficulté.
        </p>
      </SubjectContent>
    </Subject>
  )
}
