import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Tet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-tet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Tèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-tet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [tɛt]
        </p>

        <p>
          Tèt est le symbole qui précède le ou les <strong>adjectifs</strong> d'un
          sujet ou d'un objet, c'est à dire toute rune ayant pour nature de
          détailler un nom. Tèt est donc une particule que l'on peut donc
          retrouver un peut partout dans une évocation complexe.
        </p>
      </SubjectContent>
    </Subject>
  )
}
