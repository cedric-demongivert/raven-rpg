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
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Introduction</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les scènes à interaction forte nécessitant des prises de décision
          simultanées sont résolues au tour par tour.
        </p>

        <p>
          <em>Entitée.</em> Une entitée est un élément du récit pouvant agir de
          son propre chef lors d'une scène à forte interaction.
        </p>

        <p>
          <em>Action.</em> Une action est une prise de décision unilatérale
          d'une entitée à un instant donné de la scène d'action. Une fois que la
          ou les décisions d'une entitée sont résolue, une autre peut alors à
          son tour réaliser une action et ainsi de suite.
        </p>

        <p>
          <em>Round.</em> Un round est la durée nécéssaire pour que toutes les
          entitées d'une scène puissent réaliser l'ensemble des actions
          auxquelles elles ont droit. Il peut arriver qu'une entité ait le droit
          de jouer plusieurs actions lors d'un round.
        </p>

        <p>
          <em>Ordonnancement.</em> Un ordonnancement est un ensemble de règle
          permettant de définir clairement l'ordre des actions dans un round.
        </p>
      </SubjectContent>
    </Subject>
  )
}
