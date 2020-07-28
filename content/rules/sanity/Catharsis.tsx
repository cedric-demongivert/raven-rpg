import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Catharsis () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-catharsis</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Catharsis</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Tout personnage sortant d'une crise de désespoir profite alors d'une
          période de catharsis d'1D6 * 12h. Le personnage retrouve alors
          immédiatement la moitiée de ses points de volontés totaux, et le
          profond sentiment de paix et de calme retrouvé qui le submerge durant
          toute la période de catharsis le rend insensible à tous les évènements
          visant à affecter son score de volonté. Les soins liés au repos sont
          les seuls changement pouvant remonter la volonté du personnage.
        </p>
      </SubjectContent>
    </Subject>
  )
}
