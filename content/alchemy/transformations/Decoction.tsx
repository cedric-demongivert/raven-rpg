import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Decoction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-decoction</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Décoction</SubjectKeyword>
      <SubjectTitle>Décoction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La décoction est une transformation qui permet d'extraire des
          propriétés alchimiques en disolvant de la matière dans l'eau. C'est
          une transformation un peut plus complexe que l'infusion qui nécéssite
          un kit d'alchimiste comprenant mortier et pilon afin de pré-traiter la
          matière à transformer. La décoction se réalise dans un chaudron et
          requiert de laisser la matière se dissoudre complètement avant de
          laisser le résultat refroidir. Le résultat d'une décoction peut
          nécéssiter l'utilisation de certains substrats supplémentaire afin
          d'éviter une sédimentation des particules de matière entraînant ainsi
          la perte du substrat obtenu. Le résultat d'une décoction est par
          métonymie une décoction.
        </p>

        <p>
          Pour réaliser une décoction il faut réaliser un test d'auto-résolution
          en utilisant son niveau de connaissance de la décoction. La qualité
          d'une décoction équivaut à la moyenne entre la qualité de la matière
          première utilisée et la qualité de la décoction elle même.
        </p>
      </SubjectContent>
    </Subject>
  )
}
