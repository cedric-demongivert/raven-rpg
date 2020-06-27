import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Luck () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-luck</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Chance</SubjectKeyword>
      <SubjectTitle>Chance</SubjectTitle>
      <SubjectSummary>
        <p>
          Le chance est la caractéristique qui représente la capacité d'un
          personnage à se créer des opportunités. Cette caractéristique
          mesure notamment le nombre de point de destin du personnage.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/luck.svg' width='200' />
        </p>

        <p>
          La chance représente la capacité à se créer des opportunités, elle
          mesure aussi le nombre de point de destin du personnage. Un bon niveau
          de chance permet de trouver plus facilement des biens précieux et de
          créer des situations bénéfiques aux allures de deus ex machina.
        </p>
      </SubjectContent>
    </Subject>
  )
}
