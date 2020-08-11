import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ActionRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-action</SubjectIdentifier>
      <SubjectTitle>Actions</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Action.</em> Quand une entitée prend l'action lors d'un tour,
          celle-ci doit alors décrire les décisions qu'elle souhaite prendre. Si
          le maître du jeu accepte la description proposée, l'entitée peut alors
          résoudre chaque décision en suivant les règles qui lui sont liée. Si
          la ou les décisions d'une entitée suivent un schéma pré-établi, il
          n'est pas utile de valider la décision.
        </p>

        <p>
          <em>Mouvement.</em> Une action dite de mouvement regroupe à la fois
          les déplacements plus ou moins complexe d'une entitée ainsi que les
          actions diverses consistant à consommer des potions, lire un
          parchemin, récupérer un objet ou recharger une arme complexe.
        </p>

        <p>
          <em>Attaque simple.</em> Une action d'attaque simple consiste en un
          mouvement et une unique tentative d'aggression avec l'arme équipée. La
          résolution de l'action suit alors les procédés usuels d'attaque avec
          l'arme choisie.
        </p>

        <p>
          <em>Attaque à outrance.</em> Une action d'attaque à outrance consiste
          en un mouvement extrêmement réduit et plusieurs tentatives
          d'aggression successives avec l'arme équipée. Un personnage ne peut
          frapper par défaut qu'une seule fois avec chaque arme qu'il équipe, la
          résolution des différentes attaques suit alors les procédés usuels
          d'attaque avec l'arme choisie. Lors d'une attaque à outrance, une
          entitée peut frapper autant d'adversaires qu'elle le souhaite pourvu
          que ceux-ci soient à sa portée et qu'elle ne dépasse pas le nombre de
          coups auxquels elle à droit.
        </p>

        <p>
          <em>Charge.</em> La charge est une action spéciale consistant en une
          prise suffisante de vitesse suivit d'un coup au corps à corps. Lors
          d'une charge, l'attaquant se voit attribuer un bonus de 2 points sur
          son jet d'attaque.
        </p>
      </SubjectContent>
    </Subject>
  )
}
