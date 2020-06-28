import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Infusion () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-infusion</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Infusion</SubjectKeyword>
      <SubjectTitle>Infusion</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'infusion est une transformation lente qui permet d'extraire des
          propriétés alchimiques d'éléments primitifs dans de l'eau. C'est une
          transformation simple qui nécéssite seulement une téhière en étain.
          Pour infuser il suffit de monter de l'eau à ébulition puis de laisser
          reposer les éléments primitifs à transformer dans le liquide pendant
          qu'il refroidit. Les résiduts de l'infusion doivent être jetés après
          opération. Par métonymie le résultat d'un processus d'infusion est une
          infusion.
        </p>

        <p>
          Pour infuser une matière il faut réaliser un test d'auto-résolution
          en utilisant son niveau de connaissance de l'infusion.
        </p>
      </SubjectContent>
    </Subject>
  )
}
