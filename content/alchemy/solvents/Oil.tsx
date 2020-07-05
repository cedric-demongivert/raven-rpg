import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Oil () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-solvents-oil</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Solvant</SubjectKeyword>
      <SubjectKeyword>Huîle végétale</SubjectKeyword>
      <SubjectTitle>Huîles végétales</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les huîles végétales comme l'huîle d'olive sont des solvants neutre
          communs permettant d'appliquer des effets sur des surfaces.
        </p>

        <p>
          Une matière alchimique dissolue dans une huîle végétale perd de sa
          qualité à hauteur d'un point de qualité tous les mois. Il est possible
          de considérer que la plupart des potions perdent de leur efficacité
          dans l'huîle entre 1 an et 1 an et demie de conservation.
        </p>

        <p>
          Tout produit alchimique dissolu dans l'huîle est appliquable sur des
          surfaces en suivant les effets décrit. Les effets ne pouvant être
          appliqués à des objets peuvent être tout de même appliqués à une
          tierce personne lorsque celle-ci subit une blessure.
        </p>

        <p>
          Quand un individu est exposé aux effets d'une huile par une blessure
          il peut alors réaliser un test d'opposition entre sa constitution et
          un degré de difficulté équivalent à 5 points additionné de la qualité
          moyenne de l'huile. Si le test échoue, l'individu subit alors
          l'ensemble des effets de l'huile et l'intoxication à l'éther qui va
          avec.
        </p>

        <p>
          La dissolution dans l'huile est d'un degré de difficulté de base de 8
          points.
        </p>
      </SubjectContent>
    </Subject>
  )
}
