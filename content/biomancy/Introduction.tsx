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
          La biomancie est une branche de l'alchimie qui vise à maîtriser
          l'évolution du corps humain. La biomancie n'est pas une transformation
          alchimique, et elle n'a rien à voir avec la production de consomables,
          la biomancie c'est d'abord l'art de la mutation. Cette discipline
          n'est cependant pas courante, voir même proscrite. Il est possible à
          n'importe quelle époque de profiter d'effets biomantique, mais celà
          requiert d'avoir accès à des experts qui se compte sur les doigts
          d'une main et d'une volonté de fer pour ne pas scéder à l'appel
          langoureux de la bestialité la plus barbare.
        </p>

        <p>
          A ceux qui emprunteront cette voie, prenez garde, la différence entre
          un homme, une bête et un monstre est bien floue pour ceux qui
          s'éloignent du destin qui leur est tracé par la fatalité, et briser
          ainsi les chaînes de l'évolution, c'est d'abord creuser la tombe de
          son âme...
        </p>
      </SubjectContent>
    </Subject>
  )
}
