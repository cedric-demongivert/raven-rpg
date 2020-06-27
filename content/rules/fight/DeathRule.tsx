import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function DeathRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-death</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Mort</SubjectKeyword>
      <SubjectTitle>Mort</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand un personnage accumule plus de 150% du nombre de ses points de vie
          en dégâts est alors considéré comme mort. Le décès est immédiat et le
          personnage n'est alors plus jouable.
        </p>

        <p className='text-center'>
          La mort est définitive, mais rassurez-vous, le deuil ne l'est pas.
        </p>
      </SubjectContent>
    </Subject>
  )
}
