import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Set () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-set</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Sèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-set.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [sɛt]
        </p>

        <p>
          Sèt est le symbole qui précède le ou les <strong>sujets</strong> d'une
          phrase, c'est à dire toute rune ayant pour nature de définir
          la personne ou la chose motivant la phrase. Sèt est donc une
          particule que l'on retrouve habituellement en début de
          phrase. (<strong>S</strong>OV)
        </p>
      </SubjectContent>
    </Subject>
  )
}
