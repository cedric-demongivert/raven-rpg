import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function NobleBlood () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents-noble-blood</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Alcool</SubjectKeyword>
      <SubjectKeyword>Liqueur de lys</SubjectKeyword>
      <SubjectTitle>Liqueur de lys</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La liqueur de lys, ou sang des rois, est une liqueur fabriqué en
          concentrant et en laissant reposé du lys azurée pendant plusieurs
          mois. C'est le solvant liquide le plus noble. On dit que son goût
          s'adapte à la personnalité de celui qui le consume en lui donnant une
          sensation de libertée inégalée. La liqueur de lys est un liquide bleu
          azurée pur légèrement luminescent.
        </p>

        <p>
          Utiliser la liqueur de lys comme solvant est une méthode permettant de
          conserver des matières alchimiques ad vitam eternam. La liqueur de lys
          est un produit qui ne bouge pas et qui conserve parfaitement les
          propriétés des effets qui y sont dissous.
        </p>

        <p>
          Tout produit alchimique dissolu dans la liqueur de lys voit ses
          effets multipliés par 3, si les effets ne sont pas des bonus mais des
          status leur durée est multipliée par 3. La consommation d'un produit
          dans la liqueur de lys provoque une intoxication doublée à laquelle
          s'ajoute une intoxication de base de 2 points. Certaines matières
          peuvent provoquer des effets supplémentaires dans la liqueur de lys,
          ces effets ne subissent aucune modification.
        </p>

        <p>
          La dissolution dans la liqueur de lys est d'un degré de difficulté de
          base de 12 points.
        </p>
      </SubjectContent>
    </Subject>
  )
}
