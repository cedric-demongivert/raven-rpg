import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { AxeMastery } from './AxeMastery'
import { BastardSwordMastery } from './BastardSwordMastery'
import { DaggerMastery } from './DaggerMastery'
import { HammerMastery } from './HammerMastery'
import { HeavyCrossbowMastery } from './HeavyCrossbowMastery'
import { LightCrossbowMastery } from './LightCrossbowMastery'
import { LongBowMastery } from './LongBowMastery'
import { LongSwordMastery } from './LongSwordMastery'
import { RodMastery } from './RodMastery'
import { ShieldMastery } from './ShieldMastery'
import { ShortBowMastery } from './ShortBowMastery'
import { ShortSwordMastery } from './ShortSwordMastery'
import { SpearMastery } from './SpearMastery'
import { WarAxeMastery } from './WarAxeMastery'
import { WarHammerMastery } from './WarHammerMastery'

export function WeaponMasteries () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Arme</SubjectKeyword>
      <SubjectTitle>Maîtrises d'arme</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <p>
              Les maîtrises d'arme apprécient l'aisance avec laquelle un
              personnage manie une famille d'armes particulière ainsi que
              l'étendue de sa connaissance de l'art martial associé.
              Ce type de maîtrise est utile pour résoudre les attaques portées
              par un assaillant et les parrades exécutées par un défenseur via
              des <strong>résolutions par opposition</strong>. Toutes les armes
              sont associées à un ou plusieurs styles de combat, et une bonne
              spécialisation permet de débloquer de nouveaux atouts.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <LightCrossbowMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <HeavyCrossbowMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <ShortBowMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <LongBowMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <RodMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <ShieldMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <DaggerMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <BastardSwordMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <ShortSwordMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <LongSwordMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <AxeMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <WarAxeMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <SpearMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <HammerMastery />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <WarHammerMastery />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
