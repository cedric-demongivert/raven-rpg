import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../components/subject/SubjectSummary'
import { SubjectContent } from '../components/subject/SubjectContent'
import { SubjectTitle } from '../components/subject/SubjectTitle'
import { SubjectKeyword } from '../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../components/subject/SubjectIdentifier'
import { Subject } from '../components/subject/Subject'

import { Map } from './Map'

export function MapSubject () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>map</SubjectIdentifier>
      <SubjectTitle>Carte du monde</SubjectTitle>
      <SubjectKeyword>Carte</SubjectKeyword>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Map />
      </SubjectContent>
    </Subject>
  )
}
