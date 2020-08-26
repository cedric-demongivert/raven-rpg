import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-introduction</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          L'astral est une langue parlée qui peut être transcrite par l'usage
          de symboles peints ou gravés appelés runes. C'est une langue qui se
          lit de haut en bas puis de gauche à droite. Les runes quand à elles
          peuvent être réalisées sur plusieurs supports que cela soit des pages
          de papier, de papyrus ou de parchemin, de la soie, de la cire, du
          bois, du métal, de la pierre voir même parfois à même le sol dans la
          terre ou la poussière.
        </p>

        <p>
          Pour ce qui est des formats, la plupart des évocations sont transcites
          sous formes de pages comprenant une matrice finie de symboles formant
          un tout cohérent. A certaines occasions ou époques il peut être plus
          commun de voir s'échanger des volumens sous forme d'une unique rangée
          de symbole ou des rotulus sous forme d'une unique colone de symboles.
          Le rotulus restera le format privilégié des sceaux astraux.
        </p>
      </SubjectContent>
    </Subject>
  )
}
