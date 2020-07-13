import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-introduction</SubjectIdentifier>
      <SubjectKeyword>Biomancie</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La biomancie est une branche de l'alchimie qui vise à améliorer le
          corps humain en lui attribuant des propriétés biologiques qui ne sont
          pas les siennes. La biomancie est une discipline qui n'est pas
          courante, voir même proscrite. Il est tout de même possible à
          n'importe quelle époque de profiter d'effets biomantique, mais celà
          requiert d'avoir accès à des experts qui se compte sur les doigts
          d'une main mais aussi de profiter d'une volonté de fer pour ne pas
          scéder à l'appel de la bestialité la plus barbare.
        </p>

        <p>
          A ceux qui emprunteront cette voie, prenez garde, la différence entre
          un homme, une bête et un monstre est bien floue pour ceux qui jouent 
          avec les cordes de l'évolution...
        </p>
      </SubjectContent>
    </Subject>
  )
}
