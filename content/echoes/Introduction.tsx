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
      <SubjectIdentifier>echoes-introduction</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les <strong>Échos</strong> sont la plus naturelle des formes d'ésotérisme. Un
          Écho est une créature consciente et indépendante de forme inconnue qui
          représente une idée, un concept, un évènement ou une personnalité dans sa plus
          cristalline des formes. Il existe une quantité infinie d'Échos catégorisés
          par leur rôle dans la géopolitique particulière de leur société.
        </p>

        <p>
          Chaque individu faisant preuve de libre arbitre est forcément lié à un Écho
          à la naissance, on dit alors de la créature qu'elle est <strong>hôte</strong>
          de son Écho. La nature de la relation entre un hôte et un Écho est appelé
          une <strong>manifestation</strong>. Bien que le phénomène soit excessivement
          commun, rares sont les individus ayant une connaissance pointue de la nature
          profonde des Échos. Aussi, les individus ayant la capacité de manifester leur
          Écho, même dans la plus simple des formes, sont largement minoritaires.
        </p>

        <p>
          Les Échos sont un moyen unique d'avoir un accès illimité à une forme
          primitive de magie. Contrairement à l'arcane, utiliser une magie Écho ne
          requiert aucune prédisposition biologique et n'implique aucune forme
          d'empoisonnement à l'éther. Cependant abuser d'un tel pouvoir n'est pas sans
          conséquences sur le long terme.
        </p>
      </SubjectContent>
    </Subject>
  )
}
