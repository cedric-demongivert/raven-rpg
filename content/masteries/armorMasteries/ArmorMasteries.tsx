import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { HeavyArmorMastery } from './HeavyArmorMastery'
import { LightArmorMastery } from './LightArmorMastery'
import { MediumArmorMastery } from './MediumArmorMastery'

export function ArmorMasteries () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-armor</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Armure</SubjectKeyword>
      <SubjectTitle>Maîtrises d'armure</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <p>
              Une maîtrise d'armure apprécie l'aisance d'un personnage vis-à-vis
              d'une certaine classe d'armure ainsi que des manoeuvres qui lui sont
              associé. Tous les 5 points investi dans la maîtrise d'une certaine
              classe d'armure permet de profiter d'un bonus d'un point d'armure
              supplémentaire quand une armure du type considéré est équipée par le
              personnage.
            </p>

            <p>
              En outre, une bonne spécialisation est essentielle pour débloquer des
              effets uniques liés au style martial associé à la classe d'armure que
              la maîtrise représente.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <MediumArmorMastery />
          </div>
          <div className='col-xs-12 col-md-6'>
            <LightArmorMastery />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-md-6'>
            <HeavyArmorMastery />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
