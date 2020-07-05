import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LightAlcohool () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents-light-alcohool</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Alcool</SubjectKeyword>
      <SubjectKeyword>Alcool faible</SubjectKeyword>
      <SubjectTitle>Alcools faibles</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les alcools faibles sont la famille de solvant composés des boissons
          ayant ayant un degré d'alcool inférieur à 15%. Ceux-ci incluent donc
          une majeure partie des cidres, bières, hydromels et champagnes ainsi
          que certains vins. Les boissons ayant un degré d'alcool entre 5% et
          8% sont ceux les plus utilisées comprenant notamment la bière et le
          cidre pour leur facilité d'accès et leur faible coût, mais cela
          n'empêche pas certains hurluberlu de dissoudre dans du champagne ou
          d'autres alcools plus "nobles" pour satisfaire les désirs des plus
          riches.
        </p>

        <p>
          Utiliser l'alcool comme solvant est une méthode permettant d'augmenter
          la durée de conservation des produits bien que les premiers
          alchimistes ait utilisé ce type de solvant d'abord pour le goût et
          ses effets récréatifs. Une matière dissoute dans un alcool faible
          perds 1 point de qualité toute les deux semaines. Il est possible de
          considérer que la plupart des potions perdent de leur efficacité dans
          un alcool faible entre 6 mois et 8 mois de conservation.
        </p>

        <p>
          Il semblerait que les alcools faibles réduisent légèrement le
          phénomène d'intoxication à l'éther. Tout produit alchimique dissolu
          dans l'alcool est alors consommable en appliquant ses effets tels que
          décrit pour le standard dans l'eau en réduisant la toxicité à l'éther
          du produit d'un point. Un score d'intoxication ne peut jamais être
          négatif.
        </p>

        <p>
          Tout personnage consommant une potion comprenant un l'alcool faible
          doit réussir un jet d'opposition entre son score de constitution et un
          degré de difficulté de 5 points plus 2 points par alcool faible
          consommé dans les dernières 24 heures et 4 points par alcool fort déjà
          consommé dans les dernières 24 heures. Un jet échoué applique au
          personnage le statut d'ivresse.
        </p>

        <p>
          La dissolution dans un alcool faible est d'un degré de difficulté de
          base de 4 points.
        </p>
      </SubjectContent>
    </Subject>
  )
}
