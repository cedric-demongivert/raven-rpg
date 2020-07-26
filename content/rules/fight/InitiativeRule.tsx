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
          relative qui mesure la capacité d'action d'une entité. Ce score
          représente à la fois la priorité potentielle d'une entité sur les
          autres ainsi que le nombre d'action qu'elle peut possiblement
          entreprendre lors d'un round. <strong>L'initiative de base d'une
          entité est égale à la valeur de la caractéristique de dextérité de
          celle-ci</strong>.
        </p>

        <p>
          <em>Déclaration des actions.</em> Au début d'un round, une entité peut
          déclarer une action par tranche de 20 points d'initiative qu'elle
          possède. Une entité doit toujours déclarer au moins une action lors
          d'un round mais elle peut ne pas déclarer toutes les actions
          auxquelles elle a théoriquement droit. Une entité doit répartir
          l'entièreté de ses points d'initiative parmi l'ensemble des actions
          qu'elle a déclaré vouloir jouer.
        </p>

        <p>
          <em>Prise d'action.</em> Une fois déclarés, les actions sont joués
          d'un commun accord par les joueurs et le maître du jeu. On dit de
          l'entitée ainsi choisie qu'elle prend l'action.
        </p>

        <p>
          <em>Contestation.</em> Si l'ordonnancement ne convient pas à un joueur
          ou au maître du jeu, il est alors possible de le contester. L'entité
          ayant la plus forte initiative alors dite entitée actrice et l'entitée
          qui aimerait agir à sa place est alors dite entitée contestatrice.
          Pour pouvoir contester l'action d'une entitée actrice, une entitée
          contestatrice doit encore posséder au moins une action dont la
          différence d'initiative avec l'action de l'entitée actrice n'est pas
          supérieure à 5 points. Si toutes les conditions sont remplies,
          l'entité contestatrice doit alors effectuer une résolution par
          opposition entre l'initiative de son action et l'initiative de
          l'action contestée. Si l'entité contestatrice réussit son test, elle
          joue alors en premier, sinon, l'entitée actrice peut jouer son action.
        </p>

        <p>
          <em>Chaîne de contestation.</em> Il est toujours possible d'enchaîner
          les contestations pour prendre la priorité durant un round. Un tel
          enchaînement ne peut pas excéder trois contestations successives. Dans
          le cas où un enchaînement de contestation à lieu, une entitée ne peut
          pas contester deux fois de suite la priorité.
        </p>

        <p>
          <em>Initiative négative.</em> Si une entité joue avec une initiative
          négative pour quelque raison que ce soit toutes les entités de la
          partie se voient attribuer 20 points d'initiative supplémentaire
          jusqu'à ce que l'entité en question ait un score positif. La
          déclaration des actions s'effectue alors normalement.
        </p>

        <p>
          <em>Modification d'initiative.</em> Si une entité perd des points
          d'initiative durant un round, son action ayant la moins d'initiative
          est pénalisé en premier du nombre de points perdu. Si l'action la plus
          faible atteint 0 point d'initiative elle est alors annulé et le reste
          des points de pénalité sont reportés sur l'action qui la nouvelle
          action la plus faible. Si une entité gagne des points d'initiative
          lors d'un round elle peut répartir ses points bonus à loisir entre les
          actions qu'elle à déclarée.
        </p>

        <p>
          <em>Dextérité nulle.</em> Une entité avec une dextérité nulle est
          considéré hors-combat et ne peut plus jouer de tour tant que son
          score n'est pas remonté d'au moins un point. Même avec une initiative
          positive, une entité avec une dextérité nulle ne peut agir. Une
          initiative négative permet de continuer à jouer tant que la dextérité
          n'est pas nulle.
        </p>
      </SubjectContent>
    </Subject>
  )
}
