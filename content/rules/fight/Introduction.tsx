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
      <SubjectIdentifier>rules-fight-introduction</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Introduction</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Scène d'action.</em> Les scènes qui nécessitent que plusieurs
          joueurs et éléments du récit prennent des décisions de manière
          simultanée et potentiellement contradictoire sont appellées des scènes
          d'actions. Les scènes d'action sont résolues au tour par tour.
        </p>

        <p>
          <em>Entitée.</em> Une entitée est un élément du récit pouvant agir de
          son propre chef lors d'une scène d'action. Une entitée peut être
          contrôlée par un joueur, par le maître du jeu ou par un ensemble de
          règles strictes.
        </p>

        <p>
          <em>Action.</em> Une action est une prise de décision unilatérale
          effectuée par une entitée à un instant donné d'une scène d'action. Une
          fois l'action résolue, une autre entitée peut alors à son tour
          réaliser une action et ainsi de suite.
        </p>

        <p>
          <em>Tour.</em> Un tour représente la durée nécéssaire pour que toutes
          les entitées d'une scène d'action puissent réaliser l'ensemble des
          actions auxquelles elles ont droit. Il peut arriver qu'une entité ait
          le droit de jouer plusieurs actions lors d'un tour.
        </p>

        <p>
          <em>Ordonnancement.</em> Un ordonnancement est un ensemble de règle
          permettant de définir clairement l'ordre des actions durant un tour.
        </p>
      </SubjectContent>
    </Subject>
  )
}
