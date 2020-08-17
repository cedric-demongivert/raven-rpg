import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Canvas } from './Canvas'

import { Particles } from './particles'
import { Stars } from './stars'

export function Runes () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Runes astrales</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Canvas />
        <Particles />
        <Stars />
      </SubjectContent>
    </Subject>
  )
}
