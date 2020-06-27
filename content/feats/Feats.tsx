import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { AcrobaticDodgingFeat } from './AcrobaticDodgingFeat'
import { AcrobaticParryFeat } from './AcrobaticParryFeat'
import { AtlasBurdenFeat } from './AtlasBurdenFeat'
import { BloodBathFeat } from './BloodBathFeat'
import { BloodThirstFeat } from './BloodThirstFeat'
import { BullChargeFeat } from './BullChargeFeat'
import { CatGraceFeat } from './CatGraceFeat'
import { ChainAttackFeat } from './ChainAttackFeat'
import { ChainDodgeFeat } from './ChainDodgeFeat'
import { CounterAttackFeat } from './CounterAttackFeat'
import { DefensiveStyleFeat } from './DefensiveStyleFeat'
import { DiehardFeat } from './DiehardFeat'
import { DoubleSkinFeat } from './DoubleSkinFeat'
import { EagleChargeFeat } from './EagleChargeFeat'
import { FlashDodgeFeat } from './FlashDodgeFeat'
import { FullDodgeFeat } from './FullDodgeFeat'
import { HackerFeat } from './HackerFeat'
import { TwistedFeat } from './TwistedFeat'
import { VulcanStrikeFeat } from './VulcanStrikeFeat'
import { WindDanceFeat } from './WindDanceFeat'

export function Feats () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>feats</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectTitle>Atouts</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />
        
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <CatGraceFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <AcrobaticParryFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <AcrobaticDodgingFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <AtlasBurdenFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <BullChargeFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <DiehardFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <FullDodgeFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <ChainDodgeFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <WindDanceFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <FlashDodgeFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <BloodBathFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <BloodThirstFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <DefensiveStyleFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <ChainAttackFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <DoubleSkinFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <TwistedFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <CounterAttackFeat />
          </div>
          <div className="col-xs-12 col-md-6">
            <EagleChargeFeat />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <HackerFeat />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
