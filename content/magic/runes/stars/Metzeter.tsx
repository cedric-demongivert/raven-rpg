import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Metzeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-metzeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mètzétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <p className='text-center'>
              <img src='./images/runic-metzeter.svg' width='200' />
            </p>

            <p className='text-center ipa'>
              [mɛt.ze.tɛʀ]
            </p>
          </div>
          <div className='col-xs-12 col-md-8'>

          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
