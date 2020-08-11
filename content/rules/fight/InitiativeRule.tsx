import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function InitiativeRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-initiative</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Initiative</SubjectKeyword>
      <SubjectTitle>Initiative</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Score d'initiative.</em> Le score d'initiative est une quantité
          relative qui mesure la capacité d'agir d'une entitée lors d'un tour
          Ce score est équivalent à la <strong>valeur de la caractéristique de
          dextérité d'une entitée</strong> sommée de l'ensemble des
          modificateurs d'initiative dont elle peut faire l'objet. L'initiative
          représente à la fois la priorité potentielle d'une entité sur les
          autres tout comme le nombre d'action qu'elle peut entreprendre lors
          d'un tour.
        </p>

        <p>
          <em>Déclarer des actions.</em> Au début d'un tour, une entitée peut
          déclarer une action par tranche de 20 points d'initiative qu'elle
          possède. Une entitée doit toujours déclarer au moins une action lors
          d'un round mais elle peut ne pas déclarer toutes les actions
          auxquelles elle a théoriquement droit. A la fin de sa déclaration, une
          entitée doit alors répartir l'entièreté des points d'initiative
          qu'elle possède parmi l'ensemble des actions qu'elle a déclarée
          vouloir jouer.
        </p>

        <p>
          <em>Prise d'action.</em> Une fois déclarées, les actions d'un tour
          sont jouées d'un commun accord entre les joueurs et le maître du jeu.
          On dit d'une entitée qui se voit attribuer le droit d'effectuer une
          action de cette manière qu'elle prend l'action.
        </p>

        <p>
          <em>Contestation.</em> Quand il n'est pas possible d'établir l'action
          à jouer à l'unanimité l'on dit alors qu'il y a contestation de
          l'ordonnancement. Dans une telle situation, l'on garde alors la paire
          d'action ayant les plus fortes initiatives parmis les actions
          candidates. L'action à réaliser est alors décidée par un test
          d'opposition entre l'initiative respective des deux actions ainsi
          obtenues.
        </p>

        <p>
          <em>Initiative négative.</em> Si une entité joue avec une initiative
          négative pour quelque raison que ce soit toutes les entités de la
          partie se voient attribuer 20 points d'initiative supplémentaire
          jusqu'à ce que l'entité en question ait un score positif. La
          déclaration des actions s'effectue alors normalement.
        </p>

        <p>
          <em>Modification d'initiative.</em> Quand une action de quelque nature
          que ce soit amène une entitée à perdre ou gagner des points
          d'initiatives, celle-ci doit alors comptabiliser le nombre de poits
          bonus ou malus ainsi obtenu pour la durée restante du tour afin de
          l'appliquer à l'éventuelle prochaine contestation dont elle fera
          l'objet. Si une entitée vient de cette manière à engrenger un malus
          d'initiative équivalent ou supérieur à l'initiative de son action la
          plus faible elle doit alors annuler cette action et retrancher son
          initiative à son malus actuel.
        </p>

        <p>
          <em>Dextérité nulle.</em> Une entitée avec une dextérité nulle est
          considéré hors-combat et perd toutes les actions qu'elle a déclarée
          pour le tour en cours et les suivant tant que son score n'est pas
          remonté d'au moins un point. Même avec une initiative positive, une
          entité avec une dextérité nulle ne peut agir. Une initiative négative
          permet de continuer à jouer tant que la dextérité n'est pas nulle.
        </p>
      </SubjectContent>
    </Subject>
  )
}
