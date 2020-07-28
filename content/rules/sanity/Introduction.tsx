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
      <SubjectIdentifier>rules-sanity-introduction</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectKeyword>introduction</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La perception est une chose bien subjective et il existe autant
          d'interprétation d'une situation qu'il y a d'individus qui l'observe.
          Quand il s'agit de se battre, ou de faire face aux horreurs du monde,
          tout est d'abord une question d'état d'esprit avant même de parler de
          muscles.
        </p>

        <p>
          La volonté est une valeur appréciée sur une échelle naturelle
          représentant de manière abstraite l'équilibre mental d'un personnage.
          En dehors de toute considération médicale, c'est d'abord une manière
          de représenter la motivation et la perception des évènements vécus par
          un individu. Cette valeur est initialement et au maximum égale au
          nombre de points de contrôle du personnage.
        </p>

        <p>
          Quand la volonté se rapproche de zéro, la logique, la mesure et le bon
          sens ne sont clairement plus des outils suffisants pour justifier le
          combat à mener. Dans de telles situations, tout amène logiquement à
          penser que tout est définitivement perdu d'avance, et pour persévérer
          fasse à une telle adversité, il ne reste alors plus qu'à puiser dans
          la folie.
        </p>
      </SubjectContent>
    </Subject>
  )
}
