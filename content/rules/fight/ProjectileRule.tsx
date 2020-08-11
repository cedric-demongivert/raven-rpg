import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ProjectileRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-attack</SubjectIdentifier>
      <SubjectTitle>Attaque à distance</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Attaque à distance.</em> Une attaque à distance est une action qui
          nécéssite de pouvoir voir sa cible. Les attaques à distance ne peuvent
          pas faire l'objet d'une quelconque coopération mais leur succès peut
          être influencé par l'environnement. Une attaque à distance se déroule
          toujours en deux temps : la touche et la résolution des dégâts.
        </p>

        <p>
          <em>Touche.</em> Lors de la phase de touche d'une attaque à distance
          seul l'attaquant doit réaliser un jet pour savoir si le défenseur
          subit ou non des dégâts. Le degré de difficulté de la tentative de
          touche dépend de plusieurs facteurs.
        </p>

        <p>
          <em>Tir hors de portée.</em> Il existe plusieurs distances de tir,
          chaque arme est associée à une ou plusieurs distance de prédilection.
          Quand un attaquant tente de toucher un défenseur qui est soit trop
          près, soit trop éloignée, il doit alors ajouter 5 points au degré de
          difficulté du tir.
        </p>

        <p>
          <em>Tir en flux tendu.</em> La difficulté du tir augmente de 3 points
          quand une entitée recharge et tir lors d'une même prise d'action.
        </p>

        <p>
          <em>Bouclier.</em> La difficulté du tir augmente de 5 points
          si la cible de l'attaque possède un bouclier ou un effet équivalent à
          celui d'un bouclier.
        </p>

        <p>
          <em>Mouvement.</em> Pour chaque mouvement effectué par la cible avant
          la tentative de tir, la difficulté de la touche augmente de 3 points.
        </p>

        <p>
          <em>Chaos.</em> Pour chaque personnage adjacent à la cible du tir,
          la difficulté de la touche augmente de 3 points.
        </p>

        <p>
          <em>Tir en mouvement.</em> Si l'attaquant se déplace en tirant il doit
          augmenter le degré de difficulté de son tir de 5 points
          supplémentaires.
        </p>

        <p>
          <em>Dégâts.</em> Si l'attaquant réussi sa touche, il peut alors
          calculer les dégâts qu'il va infliger au défenseur en utilisant les
          indications de son arme et le nombre de points d'armure possédés par
          le défenseur.
        </p>
      </SubjectContent>
    </Subject>
  )
}
