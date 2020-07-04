import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { OneHandedWeaponFightingMastery } from './OneHandedWeaponFightingMastery'
import { TwoHandedWeaponFightingMastery } from './TwoHandedWeaponFightingMastery'
import { TwoWeaponFightingMastery } from './TwoWeaponFightingMastery'
import { UnarmedFightingMastery } from './UnarmedFightingMastery'
import { WeaponAndShieldFightingMastery } from './WeaponAndShieldFightingMastery'

export function MartialStyleMasteries () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-martial-style</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Style martial</SubjectKeyword>
      <SubjectTitle>Maîtrises de style martial</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col'>
            <p>
              Les maîtrises de style martial apprécient la capacité d'un personnage à ce
              battre en combinant des classes d'arme spécifiques. Ce sont des maîtrises qui
              permettent d'améliorer les chances de touche d'une famille d'arme au complet,
              cependant, a contrario des maîtrises d'arme l'augmentation des chances est
              bien moins importante.
            </p>

            <p>
              Une maîtrise de style martial peut toujours remplacer la maîtrise d'une
              certaine arme en combat lors d'un test par opposition d'attaque, dans ce cas
              le niveau de maîtrise de l'arme de l'attaquant est égal à sa maîtrise du style
              martial considéré divisé par 2.
            </p>

            <p>
              La seule exception concerne la maîtrise du combat à mains nues qui se comporte
              comme une maîtrise d'arme standard.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <TwoHandedWeaponFightingMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <OneHandedWeaponFightingMastery />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <WeaponAndShieldFightingMastery />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <TwoWeaponFightingMastery />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <UnarmedFightingMastery />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
