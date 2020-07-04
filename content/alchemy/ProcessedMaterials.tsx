import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { AlchemicMaterialSubjects } from '../../components/alchemy/AlchemicMaterialSubjects'
import { AlchemicMaterial } from '../../typescript/alchemy/AlchemicMaterial'

import { ALL } from '../../typescript/data/alchemy/processed'

export function ProcessedMaterials () : ReactElement {
  const all : AlchemicMaterial[] = [].concat(ALL)

  all.sort(function (a : AlchemicMaterial, b : AlchemicMaterial) : number {
    return a.name.localeCompare(b.name)
  })

  return (
    <Subject>
      <SubjectIdentifier>alchemy-processed-materials</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Transformé</SubjectKeyword>
      <SubjectTitle>Transformés</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <AlchemicMaterialSubjects>{ all }</AlchemicMaterialSubjects>
      </SubjectContent>
    </Subject>
  )
}
