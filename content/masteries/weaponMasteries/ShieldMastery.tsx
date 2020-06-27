import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ShieldMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-shield</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Bouclier</SubjectKeyword>
      <SubjectTitle>Boucliers</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg'/></td>
            </tr>
          </tbody>
        </table>

        <p>
          Le bouclier est un outil parfait arrêter les projectiles, parrer les coups
          et réduire la pression exercée par les armes contondentes. C'est aussi en
          soit une arme capable de faire de gros dégât quand elle est projetée sur
          ses adversaire lors d'une charge. Le bouclier est l'outil parfait pour
          dessiner et maintenir une ligne de front sur le long terme.
        </p>
      </SubjectContent>
    </Subject>
  )
}
