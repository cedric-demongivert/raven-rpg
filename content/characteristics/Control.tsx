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

        <p>
          Le contrôle représente la maîtrise consciente de soi et le recul vis-à-vis
          de ses sentiments, elle mesure aussi la volonté d'un personnage. Un bon
          niveau de contrôle permet de résister aux manipulations mentales et de
          garder son sang froid dans les situations difficiles.
        </p>
      </SubjectContent>
    </Subject>
  )
}
