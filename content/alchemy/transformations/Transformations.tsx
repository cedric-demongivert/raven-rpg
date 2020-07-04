import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { Concentration } from './Concentration'
import { Decoction } from './Decoction'
import { Dilution } from './Dilution'
import { Dissolution } from './Dissolution'
import { Distillation } from './Distillation'
import { Infusion } from './Infusion'
import { Maceration } from './Maceration'
import { Percolation } from './Percolation'
import { Reduction } from './Reduction'

export function Transformations () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformations</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectTitle>Transformations</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Concentration />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Decoction />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Dilution />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Dissolution />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Distillation />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Infusion />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Maceration />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Percolation />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <Reduction />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
