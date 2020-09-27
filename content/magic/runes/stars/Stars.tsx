import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Kemet } from './Kemet'
import { Mege } from './Mege'
import { Memet } from './Memet'
import { Metzeret } from './Metzeret'
import { Metzeter } from './Metzeter'
import { Semet } from './Semet'
import { Setmeter } from './Setmeter'
import { Temeter } from './Temeter'
import { Xemeret } from './Xemeret'
import { Yegeter } from './Yegeter'
import { Xemet } from './Xemet'
import { Xemeter } from './Xemeter'
import { Yemet } from './Yemet'
import { Yetzeter } from './Yetzeter'
import { Zege } from './Zege'
import { Zemet } from './Zemet'

export function Stars () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Étoiles</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Kemet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Mege />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Memet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Metzeret />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Metzeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Semet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Setmeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Temeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Xemeret />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Xemet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Xemeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Yegeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Yemet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Yetzeter />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Zege />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Zemet />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
