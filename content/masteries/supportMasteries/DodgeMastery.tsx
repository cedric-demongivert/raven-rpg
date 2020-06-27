import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function DodgeMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-dodge</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectTitle>Esquive</SubjectTitle>
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
          La maîtrise de l'esquive apprécie la capacité d'un personnage à se mouvoir
          dans l'objectif d'échapper à une menace. L'esquive est une maîtrise
          importante pour les combats car elle permet d'éviter un coup par tour tout
          en se repositionnant. Elle est aussi la seule compétence permettant
          d'échapper à certains pièges ou sortilèges.
        </p>

        <p>
          L'esquive se joue toujours en opposition avec le degré de difficulté de la
          menace. Esquiver une attaque influera les chances de succès de l'attaquant
          vis-à-vis de sa propre maîtrise de son arme. Esquiver un sort ou un piège
          influera ses chances de succès vis-à-vis de son propre degré de
          difficulté. Le succès d'une esquive peut être mitigé dans certaines
          situations.
        </p>
      </SubjectContent>
    </Subject>
  )
}



/**
    <table class='table'>
      <thead>
        <tr>
          <th colspan='2'>Atouts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Esquive totale</strong></td>
          <td>Esquive: 4+</td>
        </tr>
        <tr>
          <td colspan='2'>
            Le personnage peut toujours choisir de jouer en dernier et de gagner une
            esquive supplémentaire lors du round en cours en échange d'une action
            de mouvement.
          </td>
        </tr>
        <tr>
          <td><strong>Esquive en chaîne I</strong></td>
          <td>Esquive: 8+</td>
        </tr>
        <tr>
          <td colspan='2'>
            Le personnage gagne une esquive supplémentaire par round, chaque esquive
            supplémentaire jouée durant un round se voit attribuée un malus de 10%
            cumulatif.
          </td>
        </tr>
        <tr>
          <td><strong>Esquive en chaîne II</strong></td>
          <td>Esquive: 12+</td>
        </tr>
        <tr>
          <td colspan='2'>
            Le personnage gagne une esquive supplémentaire par round, chaque esquive
            supplémentaire jouée durant un round se voit attribuée un malus de 10%
            cumulatif.
          </td>
        </tr>
        <tr>
          <td><strong>Esquive instinctive</strong></td>
          <td>Esquive: 14+</td>
        </tr>
        <tr>
          <td colspan='2'>
            Le personnage peut tenter d'esquiver les flèches avec un malus de 25%
            sur son jet d'esquive.
          </td>
        </tr>
        <tr>
          <td><strong>Danse des vents</strong></td>
          <td>Esquive: 16+</td>
        </tr>
        <tr>
          <td colspan='2'>
            Le personnage gagne une esquive supplémentaire par round. Avec cet atout
            le malus attribué à un enchaînement d'esquive durant un round est réduit
            à 5% cumulatif.
          </td>
        </tr>
      </tbody>
    </table>
*/
