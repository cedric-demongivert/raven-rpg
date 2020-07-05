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
import { Water } from './Water'
import { LightAlcohool } from './LightAlcohool'
import { Liquor } from './Liquor'
import { NobleBlood } from './NobleBlood'
import { Oil } from './Oil'

export function Solvents () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectTitle>Solvants</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <LightAlcohool />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Liquor />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <NobleBlood />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Oil />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <Water />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
