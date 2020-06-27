import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Dexterity () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-dexterity</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Dextérité</SubjectKeyword>
      <SubjectTitle>Dextérité</SubjectTitle>
      <SubjectSummary>
        <p>
          Le dextérité est la caractéristique qui représente la précision des sens
          d'un personnage. Cette caractéristique mesure notamment l'initiative
          d'un personnage en combat.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/dexterity.svg' width='200' />
        </p>

        <p>
          La dextérité représente la précision des sens, elle mesure aussi
          l'initiative d'un personnage en combat. Un bon niveau de dextérité
          permet d'agir le premier, de se mouvoir sans faire de bruit, d'esquiver
          et de maîtriser les armes de jet et les armes légères.
        </p>
      </SubjectContent>
    </Subject>
  )
}
