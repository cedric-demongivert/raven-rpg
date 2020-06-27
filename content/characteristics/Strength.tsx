import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Strength () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-strength</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Force</SubjectKeyword>
      <SubjectTitle>Force</SubjectTitle>
      <SubjectSummary>
        <p>
          La force est la caractéristique qui représente la capacité d'un
          personnage à altérer le réel par l'usage de moyens physiques. Cette
          caractéristique mesure notamment la capacité de charge.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/strength.svg' width='200' />
        </p>

        <p>
          La force représente la capacité à altérer le réel par l'usage
          de moyens physiques, elle mesure aussi la capacité de charge. Un bon
          niveau de force permet d'équiper plus de matériel, de maîtriser les
          armures et armes lourdes et de faire plus de dégât physique.
        </p>
      </SubjectContent>
    </Subject>
  )
}
