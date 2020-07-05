import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Liquor () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents-liquor</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Alcool</SubjectKeyword>
      <SubjectKeyword>Alcool fort</SubjectKeyword>
      <SubjectTitle>Alcools forts</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les alcools forts sont la famille de solvant composés des boissons
          ayant ayant un degré d'alcool supérieur à 15%. Ceux-ci incluent donc
          notamment le rhum, le whisky, le calvados, l'absinthe ainsi que de
          nombreuses liqueurs de fruit. Les alcools fort sont d'abord utilisés
          pour conserver des matières très concentrées et pour embellir des
          produits de grande rareté ne trouvant pas prenneur dans les semaines
          suivant la conception du produit.
        </p>

        <p>
          Utiliser l'alcool comme solvant est une méthode permettant d'augmenter
          la durée de conservation des produits bien que les premiers
          alchimistes ait utilisé ce type de solvant d'abord pour le goût et
          ses effets récréatifs. Une matière dissoute dans un alcool fort
          perds 1 point de qualité toute les deux mois. Il est possible de
          considérer que la plupart des potions perdent de leur efficacité dans
          un alcool fort entre 2 ans et 3 ans de conservation.
        </p>

        <p>
          Il semblerait que les alcools forts réduisent le phénomène
          d'intoxication à l'éther et augmentent certaines propriétés. Tout
          produit alchimique dissolu dans un l'alcool fort est alors
          consommable en appliquant ses effets tels que décrit pour le standard
          dans l'eau mais en augmentant les effets sur les maîtrises de 1 point
          et les effets sur les caractéristiques de 1 point peut importe leur
          concentration, l'alcool fort réduit aussi la toxicité à l'éther du
          produit de deux points. Un score d'intoxication ne peut jamais être
          négatif.
        </p>

        <p>
          Tout personnage consommant une potion comprenant un alcool fort
          doit réussir un jet d'opposition entre son score de constitution et un
          degré de difficulté de 10 points plus 2 points par alcool faible
          consommé dans les dernières 24 heures et 4 points par alcool fort déjà
          consommé dans les dernières 24 heures. Un jet échoué applique au
          personnage le statut d'ivresse.
        </p>

        <p>
          La dissolution dans un alcool fort est d'un degré de difficulté de
          base de 8 points.
        </p>
      </SubjectContent>
    </Subject>
  )
}
