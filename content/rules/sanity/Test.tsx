import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Test () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-test</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Test de volonté</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Plusieurs facteurs peuvent aboutir à une modification du score de
          volonté des personnages. La plupart d'entre eux nécéssitent de faire
          un test de volonté afin de savoir à quel point un individu est affecté
          par les évènements en cours.
        </p>

        <p>
          Un test de volonté est une simple résolution par opposition entre la
          volonté présente d'un personnage et le degré de difficulté associé à
          l'évènement traumatisant. Si le test de volonté est réussi, le
          personnage subira des dégâts réduits, si le test échoue, le personnage
          subira la totalité des dégâts initialements prévus.
        </p>
      </SubjectContent>
    </Subject>
  )
}
