import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Distillation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-distillation</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Distillation</SubjectKeyword>
      <SubjectTitle>Distillation</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La distillation est une transformation qui permet de séparer les
          propriétés alchimiques d'une matière liquide en utilisant
          l'évaporation et la condensation. C'est une opération qui nécéssite
          l'accès à un laboratoire d'alchimie équipé d'un alambic, d'une source
          de chaleur et d'un système de refroidissement fonctionnel. Pour
          distiller il faut faire bouillir la matière à transformer à une
          température précise puis faire en sorte que le gaz formé puisse se
          condenser de nouveau pour former un nouveau liquide plus pur. Ce
          procédé peut prendre plusieurs heures. Le résultat d'une distillation
          est un distillat.
        </p>

        <p>
          Pour réaliser une distillation il faut réaliser un test d'opposition
          entre la connaissance de la distillation de l'alchimiste et le nombre
          et la qualité des produits à séparés.
        </p>
      </SubjectContent>
    </Subject>
  )
}
