import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Met () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-met</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-met.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [mɛt]
        </p>

        <p>
          Mèt est le symbole qui précède le ou les <strong>objets</strong> d'une
          phrase, c'est à dire toute rune ayant pour nature de définir les
          différents arguments d'un verbe, une action. Mèt est donc une
          particule que l'on retrouve en milieu de phrase.
          (S<strong>O</strong>V)
        </p>
      </SubjectContent>
    </Subject>
  )
}
