import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Control () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics-control</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectKeyword>Contrôle</SubjectKeyword>
      <SubjectTitle>Contrôle</SubjectTitle>
      <SubjectSummary>
        <p>
          Le contrôle est la caractéristique qui représente la maîtrise consciente
          de soi et le recul vis-à-vis de ses sentiments. Cette caractéristique
          mesure notamment la volonté d'un personnage.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/characteristics/control.svg' width='200' />
        </p>

        <p className='text-justify'>
          Le con&shy;trô&shy;le re&shy;pré&shy;sen&shy;te la maî&shy;tri&shy;se
          con&shy;scien&shy;te de soi et le re&shy;cul vis-&shy;à-vis
          de ses sen&shy;ti&shy;ments, elle me&shy;su&shy;re aus&shy;si la
          vo&shy;lon&shy;té d'un per&shy;son&shy;nage. Un bon ni&shy;veau de con&shy;trô&shy;le
          per&shy;met de ré&shy;si&shy;ster aux ma&shy;ni&shy;pu&shy;la&shy;tions men&shy;ta&shy;les et de
          gar&shy;der son sang froid dans les si&shy;tu&shy;a&shy;tions dif&shy;fi&shy;ci&shy;les.
        </p>
      </SubjectContent>
    </Subject>
  )
}
