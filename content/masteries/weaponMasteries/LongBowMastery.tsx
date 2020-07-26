import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LongBowMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-long-bow</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Arc long</SubjectKeyword>
      <SubjectKeyword>Arc</SubjectKeyword>
      <SubjectTitle>Arcs longs</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
              <th>Mineure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg'/></td>
              <td><img src='./images/characteristics/strength.svg'/></td>
            </tr>
          </tbody>
        </table>

        <p>
          L'arc long est une arme à distance à moyenne et longue portée avec une
          recharge rapide. C'est une arme parfaite pour les personnage d'arrière
          ligne souhaitant appliquer une pression constante sur l'infanterie légère
          et intermédiaire. Malheureusement les arcs rencontrent rapidement leurs
          limite face aux armures les plus lourdes et leur épaisse couche d'acier.
        </p>
      </SubjectContent>
    </Subject>
  )
}
