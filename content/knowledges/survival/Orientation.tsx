import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Orientation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>knowledges-survival-orientation</SubjectIdentifier>
      <SubjectKeyword>Connaissance</SubjectKeyword>
      <SubjectKeyword>Orientation</SubjectKeyword>
      <SubjectTitle>Orientation</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          La connaissance de l'orientation permet au personnage de connaître sa
          position et sa direction dans des milieux complexes grâce à des
          repères comme les étoiles où certains lieux remarquables.
          Une bonne connaissance de l'orientation est indispensable pour
          naviguer au sein de vastes forêts, au travers de réseaux de cavernes
          ou le long d'un col de montagne enneigé.
        </p>
      </SubjectContent>
    </Subject>
  )
}
