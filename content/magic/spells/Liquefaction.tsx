import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

export function Liquefaction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-spells-liquefaction</SubjectIdentifier>
      <SubjectTitle>Liquéfaction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col-xs-12 order-1 col-md-4 order-md-1'>
            <p className='text-center'>
              <img src='./images/runic-set.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-3 col-md-4 order-md-2'>
            <p className='text-center'>
              <img src='./images/runic-met.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-4 col-md-4 order-md-3'>
            <p className='text-center'>
              <img src='./images/runic-zet.svg' width='200' />
            </p>
          </div>

          <div className="w-100 d-none d-sm-block d-xl-none"></div>

          <div className='col-xs-12 order-2 col-md-4 order-md-4'>
            <p className='text-center'>
              <img src='./images/runic-kemet.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-3 col-md-4 order-md-5'>
            <p className='text-center'>
              <img src='./images/runic-zemet.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 order-4 col-md-4 order-md-6'>
            <p className='text-center'>
              <img src='./images/runic-metzeter.svg' width='200' />
            </p>
          </div>
        </div>

        <p className='text-center ipa'>
          [sɛt ke.mɛt mɛt ze.mɛt zɛt mɛt.ze.tɛʀ]
        </p>
      </SubjectContent>
    </Subject>
  )
}
