import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function DamageRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-coma</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Dégât</SubjectKeyword>
      <SubjectTitle>Dégâts</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Il existe plusieurs types de dégâts : les dégâts physiques, les dégâts
          magiques, les dégâts bruts, les dégâts de rupture et les dégâts mystiques.
        </p>

        <p>
          <em>Les dégâts physiques</em> affectent les points de vie de la cible, ils
          ignorent l'armure magique mais sont retranchés de l'armure physique de la
          cible.
        </p>

        <p>
          <em>Les dégâts magiques</em> affectent les points de vie de la cible, ils
          ignorent l'armure physique mais sont retranchés de l'armure magique de la
          cible.
        </p>

        <p>
          <em>Les dégâts bruts</em> affectent les points de vie de la cible et
          ignorent tout type d'armure.
        </p>

        <p>
          <em>Les dégâts de rupture</em> affectent l'armure physique de la cible.
          Si la cible ne possède plus d'armure les dégâts sont convertis en dégâts
          physiques.
        </p>

        <p>
          <em>Les dégâts mystiques</em> affectent l'armure magique de la cible.
          Si la cible ne possède plus d'armure les dégâts sont convertis en dégâts
          magiques.
        </p>

        <p>
          Ces grands types de dégâts peuvent être raffinés en y ajoutant des trais
          complémentaires comme pour les dégâts élémentaires de feu, de glace,
          de terre ou d'électricité. Ces traits sont cependant complémentaires, et
          les dégâts se comporteront comme ce comportent tous les dégâts de leur
          catégorie.
        </p>

        <p>
          Toute attaque peut porter une certaine quantité de dégâts exprimé en dés.
          Pour résoudre le nombre de dégâts affligés par une attaque il faut alors
          lancer autant de dés six que de points de dégâts infligeable. Tous les dés
          pairs sont alors considéré comme un point de dégât infligé. Le défenseur
          peut alors déduire ceux-ci de ses points de vie ou de son armure en
          fonction du type de dégât. Les dégâts visant l'armure sont toujours
          appliqués après les dégâts visant les points de vie.
        </p>
      </SubjectContent>
    </Subject>
  )
}
