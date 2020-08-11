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

        <p className='text-justify'>
          La dex&shy;té&shy;ri&shy;té re&shy;pré&shy;sen&shy;te la pré&shy;ci&shy;sion
          des sens, elle me&shy;su&shy;re aus&shy;si l'ini&shy;tia&shy;ti&shy;ve
          d'un per&shy;son&shy;nage en com&shy;bat. Un bon ni&shy;veau de dex&shy;té&shy;ri&shy;té
          per&shy;met d'agir le pre&shy;mier, de se mou&shy;voir sans fai&shy;re de bruit, d'es&shy;qui&shy;ver
          et de maî&shy;tri&shy;ser les ar&shy;mes de jet et les ar&shy;mes lé&shy;gè&shy;res.
        </p>
      </SubjectContent>
    </Subject>
  )
}
