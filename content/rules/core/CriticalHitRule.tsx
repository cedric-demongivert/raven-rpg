
import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function CriticalHitRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-critical-hit</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Critique</SubjectKeyword>
      <SubjectTitle>Critiques</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Lors d'un test, un score supérieur égal à 1 est un échec critique aux
          répercussions désastreuses. À l'inverse, un score égal à 20 est un
          succès critique aux conséquences bénéfiques. Les critiques priment sur
          les chances de succès réelles d'un personnage. Ainsi, un personnage
          qui devrait réussir systématiquement une action à toujours 5% de
          chance de l'échouer, et un personnage qui devrait échouer
          systématiquement une action à toujours 5% de chance de la réussir.
        </p>

        <p>
          Les conséquences d'un critique sont déterminées par le maître du
          jeu et peuvent avoir lieu immédiatement comme dans un avenir proche.
          Certaines règles supplémentaires peuvent s'appliquer. Les conséquences
          d'un critique lors d'un test d'auto-résolution sont laissés à la
          discrétion du maître du jeu.
        </p>
      </SubjectContent>
    </Subject>
  )
}
