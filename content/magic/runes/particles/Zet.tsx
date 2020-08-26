import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Zet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-zet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Zèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-zet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [zɛt]
        </p>
        
        <p>
          Zèt est le symbole qui précède le <strong>verbe</strong> d'une
          phrase, c'est à dire toute rune ayant pour nature de détailler la
          nature de l'action décrite. Zèt est donc une particule que l'on
          retrouve plutôt en fin de phrase. (SO<strong>V</strong>)
        </p>
      </SubjectContent>
    </Subject>
  )
}
