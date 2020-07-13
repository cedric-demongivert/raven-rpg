import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Nature () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>knowledges-survival-nature</SubjectIdentifier>
      <SubjectKeyword>Connaissance</SubjectKeyword>
      <SubjectKeyword>Nature</SubjectKeyword>
      <SubjectTitle>Nature</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          La connaissance de la nature évalue la capacité d'un individu à
          reconnaître les espèces endémiques de certains milieux et à s'en
          prémunir. La connaissance de la nature est une compétence importante
          pour distinguer l'origine d'un cri ou identifier certaines espèces de
          plantes.
        </p>
      </SubjectContent>
    </Subject>
  )
}
