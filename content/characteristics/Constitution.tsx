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

        <p className='text-justify'>
          La con&shy;sti&shy;tu&shy;tion re&shy;pré&shy;sen&shy;te la ré&shy;si&shy;stan&shy;ce
          phy&shy;si&shy;que du corps, elle me&shy;sure no&shy;tam&shy;ment le
          nom&shy;bre de point de vie. Un bon ni&shy;veau de con&shy;sti&shy;tu&shy;tion per&shy;met
          d'en&shy;cais&shy;ser plus de coups, de sup&shy;por&shy;ter des cli&shy;mats dif&shy;fi&shy;ci&shy;les,
          de ré&shy;si&shy;ster aux ma&shy;la&shy;dies et de four&shy;nir des ef&shy;forts
          sur de plus lon&shy;gues pé&shy;rio&shy;des.
        </p>
      </SubjectContent>
    </Subject>
  )
}
