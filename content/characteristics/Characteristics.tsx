import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { Constitution } from './Constitution'
import { Control } from './Control'
import { Dexterity } from './Dexterity'
import { Luck } from './Luck'
import { Power } from './Power'
import { Strength } from './Strength'

export function Characteristics () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>characteristics</SubjectIdentifier>
      <SubjectKeyword>Caractéristique</SubjectKeyword>
      <SubjectTitle>Charactéristiques</SubjectTitle>
      <SubjectSummary>
        <p>
          Les caractéristiques dépeignent les capacités innées d'un personnage et
          influencent de nombreuses ressources connexes. Chaque caractéristique
          est appréciée par un entier relatif.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <LocalSummary />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>
              Les caractéristiques dépeignent les capacités innées d'un
              personnage et influencent de nombreuses ressources connexes.
              Chaque caractéristique est appréciée par un entier relatif. Les
              caractéristiques d'un personnage humain sont initialement évaluées
              à -9 et il est possible d'y répartir un total de 62 points. Une
              caractéristique humaine ne peut pas être supérieure à 10 points.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Luck />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Constitution />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Control />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Dexterity />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Strength />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Power />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}