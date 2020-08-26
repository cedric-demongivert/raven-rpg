import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

export function FireBreath () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-spells-fire-breath</SubjectIdentifier>
      <SubjectTitle>Vent de flamme</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col-xs-12 order-1 col-sm-6 order-sm-1 col-md-4 offset-md-2 col-lg-3 offset-lg-3 col-xl-3 order-xl-1 offset-xl-0'>
            <p className='text-center'>
              <img src='./images/runic-zet.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-3 col-sm-6 order-sm-2 col-md-4 col-lg-3 col-xl-3 order-xl-3'>
            <p className='text-center'>
              <img src='./images/runic-ket.svg' width='200' />
            </p>
          </div>

          <div className="w-100 d-none d-sm-block d-xl-none"></div>

          <div className='col-xs-12 order-2 col-sm-6 order-sm-3 col-md-4 offset-md-2 col-lg-3 offset-lg-3 col-xl-3 order-xl-2 offset-xl-0'>
            <p className='text-center'>
              <img src='./images/runic-semet.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-4 col-sm-6 order-sm-3 col-md-4 col-lg-3 col-xl-3 order-xl-4'>
            <p className='text-center'>
              <img src='./images/runic-yemet.svg' width='200' />
            </p>
          </div>
        </div>

        <p className='text-center ipa'>
          [zɛt se.mɛt kɛt je.mɛt]
        </p>

      </SubjectContent>
    </Subject>
  )
}
