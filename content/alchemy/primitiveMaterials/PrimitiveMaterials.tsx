import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { BloodyBells } from './BloodyBells'
import { CeruleanLily } from './CeruleanLily'
import { Dreamstar } from './Dreamstar'
import { Greenleave } from './Greenleave'
import { Helenite } from './Helenite'
import { PandoraSkin } from './PandoraSkin'
import { PegasusFluff } from './PegasusFluff'
import { Skyhammer } from './Skyhammer'

export function PrimitiveMaterials () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-materials</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectTitle>Éléments primitifs</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <PandoraSkin />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Helenite />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <CeruleanLily />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Skyhammer />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <PegasusFluff />
          </div>
          <div className='col-xs-12 col-md-6'>
            <BloodyBells />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Dreamstar />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Greenleave />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
