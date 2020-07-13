import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { Orientation } from './Orientation'
import { Tracking } from './Tracking'
import { Nature } from './Nature'

export function Survival () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>knowledges-survival</SubjectIdentifier>
      <SubjectKeyword>Connaissances</SubjectKeyword>
      <SubjectKeyword>Survie</SubjectKeyword>
      <SubjectTitle>Survie</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <p>
              Les connaissances relative à la survie mesure le savoir d'un
              personnage quand aux techniques permettant de garantir sa
              sécurité et sa bonne santé au sein d'un environnement hostile.
              Tout personnage dont le métier consiste à rester longtemps isolé
              en pleine nature devrait faire de ce domaine sa spécialité.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Nature />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Orientation />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Tracking />
          </div>
          <div className='col-xs-12 col-lg-6'>
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
