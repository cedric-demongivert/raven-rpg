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
      <SubjectTitle>Caractéristiques</SubjectTitle>
      <SubjectSummary>
        <p>
          Les ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;ques dé&shy;pei&shy;gnent les
          ca&shy;pa&shy;ci&shy;tés in&shy;nées d'un per&shy;son&shy;nage
          et in&shy;flu&shy;en&shy;cent de nom&shy;breux as&shy;pects du jeu.
          Cha&shy;que ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;que est ap&shy;pré&shy;ciée
          par un en&shy;tier re&shy;la&shy;tif.
        </p>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <LocalSummary />
          </div>
        </div>
        <div className='row'>
          <div className='col text-justify'>
            <p>
              Les ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;ques dé&shy;pei&shy;gnent
              les ca&shy;pa&shy;ci&shy;tés in&shy;nées d'un per&shy;son&shy;nage
              et in&shy;flu&shy;en&shy;cent de nom&shy;breux as&shy;pects du
              jeu. Cha&shy;que ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;que est
              ap&shy;pré&shy;ciée par un en&shy;tier re&shy;la&shy;tif. Les
              ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;ques d'un per&shy;son&shy;na&shy;ge
              hu&shy;main sont ini&shy;tia&shy;le&shy;ment éva&shy;luées à 0 et
              il est pos&shy;si&shy;ble d'y ré&shy;par&shy;tir un to&shy;tal de
              68 points. Une ca&shy;ra&shy;cté&shy;ris&shy;ti&shy;que hu&shy;maine
              ne peut pas être su&shy;pé&shy;rieu&shy;re à 20 points. Jou&shy;er
              un per&shy;son&shy;nage avec une ca&shy;ra&shy;cté&shy;ri&shy;sti&shy;que
              in&shy;fé&shy;rieu&shy;re à 4 points re&shy;quiert l'aval du maî&shy;tre
              du jeu.
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
