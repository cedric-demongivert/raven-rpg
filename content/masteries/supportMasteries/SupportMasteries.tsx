import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { AcrobaticsMastery } from './AcrobaticsMastery'
import { ClimbingMastery } from './ClimbingMastery'
import { DiscretionMastery } from './DiscretionMastery'
import { DodgeMastery } from './DodgeMastery'
import { HorseRidingMastery } from './HorseRidingMastery'
import { LockPickingMastery } from './LockPickingMastery'
import { PerceptionMastery } from './PerceptionMastery'
import { SearchMastery } from './SearchMastery'
import { SleightOfHandMastery } from './SleightOfHandMastery'
import { SwimingMastery } from './SwimingMastery'

export function SupportMasteries () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectTitle>Maîtrises utilitaires</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className="row">
          <div className="col">
            <p>
              Les maîtrises utilitaires sont divers champs disciplinaire permettant de
              garantir le succès d'action spécifique en jeu comme l'escalade d'une muraille
              ou une tentative de larcin. Ce sont principalement des maîtrises visant à être
              l'objet de résolution par opposition ou pour certaines de test
              d'auto-résolution.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <AcrobaticsMastery />
          </div>
          <div className="col-xs-12 col-lg-6">
            <LockPickingMastery />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-6">
            <DiscretionMastery />
          </div>
          <div className="col-xs-12 col-lg-6">
            <HorseRidingMastery />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-6">
            <ClimbingMastery />
          </div>
          <div className="col-xs-12 col-lg-6">
            <DodgeMastery />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-6">
            <SearchMastery />
          </div>
          <div className="col-xs-12 col-lg-6">
            <SwimingMastery />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-6">
            <PerceptionMastery />
          </div>
          <div className="col-xs-12 col-lg-6">
            <SleightOfHandMastery />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
