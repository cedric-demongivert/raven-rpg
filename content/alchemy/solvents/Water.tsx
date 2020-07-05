import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Water () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents-water</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Eau</SubjectKeyword>
      <SubjectTitle>Eau</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'eau est un solvant neutre très commun et c'est bien par ce qu'il
          n'altère aucunement les propriété des matières dissoutes en son sein
          que les alchimistes l'utilisent si abondamment pour travailler les
          matières qu'ils possèdent avant d'en faire des produits finis.
        </p>

        <p>
          Une matière alchimique dissolue dans l'eau perd de sa qualité à
          hauteur d'un point de qualité tous les trois jours. L'eau est donc un
          excelent outil de travail mais plutôt un mauvais solvant pour
          conserver des produits dans le temps. Il est possible de considérer
          que la plupart des potions perdent de leur efficacité dans l'eau entre
          1 mois et demie et 2 mois de conservation.
        </p>

        <p>
          Tout produit alchimique dissolu dans l'eau est consommable en
          appliquant ses effets tels que décrit.
        </p>

        <p>
          La dissolution dans l'eau est d'un degré de difficulté de base nul.
        </p>
      </SubjectContent>
    </Subject>
  )
}
