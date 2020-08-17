import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Yemet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-yemet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Yémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <p className='text-center'>
              <img src='./images/runic-yemet.svg' width='200' />
            </p>

            <p className='text-center ipa'>
              [je.mɛt]
            </p>
          </div>
          <div className='col-xs-12 col-md-8'>

          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
