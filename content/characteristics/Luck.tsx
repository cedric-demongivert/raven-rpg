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

          <p className='text-justify'>
            La chan&shy;ce re&shy;pré&shy;sen&shy;te la ca&shy;pa&shy;ci&shy;té à se
            cré&shy;er des op&shy;por&shy;tu&shy;ni&shy;tés, elle me&shy;su&shy;re
            aus&shy;si le nom&shy;bre de point de des&shy;tin du per&shy;son&shy;na&shy;ge.
            Un bon ni&shy;veau de chan&shy;ce per&shy;met de trou&shy;ver plus fa&shy;ci&shy;le&shy;ment
            des biens pré&shy;cieux et de cré&shy;er des si&shy;tu&shy;a&shy;tions
            bé&shy;né&shy;fi&shy;ques aux al&shy;lu&shy;res de deus-&shy;ex-machina.
          </p>
      </SubjectContent>
    </Subject>
  )
}
