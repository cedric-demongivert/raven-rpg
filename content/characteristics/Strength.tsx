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

        <p className='text-justify'>
          La for&shy;ce re&shy;pré&shy;sen&shy;te la ca&shy;pa&shy;ci&shy;té à al&shy;té&shy;rer
          le réel par l'us&shy;age de moyens phy&shy;si&shy;ques, elle me&shy;su&shy;re aus&shy;si la
          ca&shy;pa&shy;ci&shy;té de cha&shy;rge. Un bon ni&shy;veau de for&shy;ce per&shy;met
          d'équi&shy;per plus de ma&shy;té&shy;riel, de maî&shy;tri&shy;ser les
          ar&shy;mu&shy;res et ar&shy;mes lou&shy;rdes et de fai&shy;re plus de dé&shy;gât
          phy&shy;si&shy;que.
        </p>
      </SubjectContent>
    </Subject>
  )
}
