import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Power () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-power</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Pouvoir</SubjectKeyword>
      <SubjectTitle>Pouvoir</SubjectTitle>
      <SubjectSummary>
        <p>
          Le pouvoir est la caractéristique qui représente la capacité d'un
          personnage à plier la réalité à sa volonté en usant de prouesses
          mentales. Cette caractéristique mesure notamment l'affinité à la magie.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/power.svg' width='200' />
        </p>

        <p>
          Le pouvoir représente la capacité à plier la réalité à sa volonté en
          usant de prouesses mentales, il mesure aussi l'affinité à la magie. Un
          bon niveau de pouvoir permet de résister aux effets magiques et de
          lancer des sorts plus puissant.
        </p>
      </SubjectContent>
    </Subject>
  )
}
