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
      <SubjectIdentifier>alchemy-solvents-introduction</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Introduction</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les solvants sont des liquides ou des solides capablent de retenir les
          propriétés alchimiques de matières alchimiques principalement utilisés
          pour consommer ces propriétés. Les solvants sont principalement utiles
          dans la transformation de dissolution. Tous les solvants ne sont pas
          considérés comme stable, c'est-à-dire qu'utiliser un solvant plutôt
          qu'un autre peut avoir des effets globaux sur chaque propriété
          dissoutes dans celui-ci.
        </p>

        <p>
          Les solvants liquides comme l'eau, l'alcool ou la liqueur de lys sont
          utilisés pour produire des poisons ou potions liquides. Ces liquides
          doivent être ingérés pour faire effet. Les potions faites d'eau,
          d'alcool ou de liqueur de lys ne peuvent pas être seulement appliquées
          localement pour fonctionner. Il est possible, avec l'outillage
          adéquat, d'injecter de force un poison ou une liqueur dans un corps,
          dans de telles situations le liquide est alors considéré comme ingéré.
        </p>

        <p>
          Les solvants sous forme d'huiles végétales, animales ou minérales
          peuvent altérer drastiquement les propriétés d'un produit mais ont le
          mérite de pouvoir appliquer ceux-ci temporairement sur une surface.
          Une huile appliquée sur un objet qui provoque une blessure légère peut
          s'infiltrer dans le corps de la victime et provoquer des effets
          désastreux. Les huiles peuvent être appliquées, entre-autres, sur la
          peau, sur les fourrures, sur les armes, sur les griffes, ou sur les
          crocs pour provoquer des effets dévastateurs, certaines applications
          peuvent cependant provoquer des ingestions accidentelles.
        </p>
      </SubjectContent>
    </Subject>
  )
}
