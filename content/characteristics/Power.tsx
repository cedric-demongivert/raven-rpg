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

        <p className='text-justify'>
          Le pou&shy;voir re&shy;pré&shy;sen&shy;te la ca&shy;pa&shy;ci&shy;té à
          plier la ré&shy;a&shy;li&shy;té à sa vo&shy;lon&shy;té en
          usant de prou&shy;es&shy;ses men&shy;ta&shy;les, il me&shy;su&shy;re
          aus&shy;si l'af&shy;fi&shy;ni&shy;té à la ma&shy;gie. Un
          bon ni&shy;veau de pou&shy;voir per&shy;met de ré&shy;si&shy;ster aux
          ef&shy;fets ma&shy;gi&shy;ques et de lan&shy;cer des sorts plus puis&shy;sant.
        </p>
      </SubjectContent>
    </Subject>
  )
}
