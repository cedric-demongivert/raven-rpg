import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Constitution () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-constitution</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Constitution</SubjectKeyword>
      <SubjectTitle>Constitution</SubjectTitle>
      <SubjectSummary>
        <p>
          La constitution est la caractéristique qui représente la résistance
          physique du corps. Cette caractéristique mesure notamment le nombre de
          point de vie d'un personnage.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/constitution.svg' width='200' />
        </p>

        <p>
          La constitution représente la résistance physique du corps, elle mesure
          notamment le nombre de point de vie. Un bon niveau de constitution permet
          d'encaisser plus de coups, de supporter des climats difficiles,
          de résister aux maladies et de fournir des efforts sur de plus longues
          périodes.
        </p>
      </SubjectContent>
    </Subject>
  )
}
