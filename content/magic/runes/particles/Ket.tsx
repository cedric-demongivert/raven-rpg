import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Ket () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-ket</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Kèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-ket.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [kɛt]
        </p>
        
        <p>
          Kèt est le symbole qui précède tout <strong>adverbe</strong>,
          c'est à dire toute rune ayant pour nature de d'expliciter un
          verbe, une action. C'est la particule type pour moduler la vitesse
          d'un sort, ou compléter l'action décrite d'effets connexes. Kèt
          est donc une particule que l'on retrouve habituellement plutôt en
          fin de proposition.
        </p>
      </SubjectContent>
    </Subject>
  )
}
