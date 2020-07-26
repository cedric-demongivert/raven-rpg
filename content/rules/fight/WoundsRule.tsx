import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function WoundsRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-wounds</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Blessure</SubjectKeyword>
      <SubjectTitle>Blessures</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Un personnage perdant un important nombre de points de vie d'un coup
          ou subissant les conséquences de certaines techniques peut se voir
          infliger des blessures. Les blessures sont des effets permanents qui
          ne peuvent être soignés qu'avec le temps et des soins minutieux, elles
          sont classés en deux catégories : les blessures légères et les
          blessures graves.
        </p>

        <p>
          Toutes les armes peuvent provoquer des types de blessures légères ou
          graves différentes. Pour qu'une blessure soit infligée il faut que le
          nombre de dégâts effectués par l'arme d'une seule traite soit
          supérieur ou égal à son seuil de blessure légère ou à son seuil de
          blessure grave.
        </p>
      </SubjectContent>
    </Subject>
  )
}
