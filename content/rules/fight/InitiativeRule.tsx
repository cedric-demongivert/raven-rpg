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
          représente à la fois la priorité d'une entité sur les autres et la
          quantité d'action qu'elle peut effectuer lors d'une manche. L'initiative
          d'une entité est égale à la valeur de la caractéristique de dextérité de
          celle-ci augmentée de dix points.
        </p>

        <p>
          <em>Déclarer un tour.</em> Au début d'une manche, une entité peut
          déclarer un tour par tranche de 20 points d'initiative qu'elle possède.
          Une entité doit toujours déclarer au moins un tour lors d'une manche mais
          elle peut ne pas déclarer tous les tours auxquels elle a droit. Une entité
          doit répartir l'entièreté de ses points d'initiative parmi l'ensemble des
          tours qu'elle a déclaré vouloir jouer.
        </p>

        <p>
          <em>Ordonnancement des tours.</em> Une fois déclarés les tours sont joués
          en commençant par ceux ayant le plus de point d'initiative et la manche
          se termine par les tours ayant le moins de points. Si plusieurs tours ont
          un nombre de point d'initiative équivalent c'est l'initiative des joueurs
          qui prime pour décider du joueur qui joue le premier. En cas d'égalité
          stricte l'ordonnancement est décidé à pile ou face.
        </p>

        <p>
          <em>Initiative négative.</em> Si une entité joue avec une initiative
          négative pour quelque raison que ce soit toutes les entités de la
          partie se voient attribuer 20 points d'initiative supplémentaire jusqu'à
          ce que l'entité en question ait un score positif. La déclaration des
          tours s'effectue alors normalement.
        </p>

        <p>
          <em>Modification d'initiative.</em> Si une entité perd des points
          d'initiative durant une manche, son tour le plus tardif est pénalisé
          du nombre de points perdu. Si le tour le plus tardif atteint 0 point
          d'initiative il est alors annulé et le reste des points a pénalisés sont
          reportés sur le tour qui le précède. Si une entité gagne des points
          d'initiative lors d'un round son tour le plus récent gagne l'ensemble des
          points bonus.
        </p>

        <p>
          <em>Dextérité nulle.</em> Une entité avec une dextérité nulle est
          considéré hors-combat et ne peut plus jouer de tour tant que son score
          n'est pas remonté d'au moins un point. Même avec une initiative positive,
          une entité avec une dextérité nulle ne peut agir. Une initiative négative
          permet de continuer à jouer tant que la dextérité n'est pas nulle.
        </p>
      </SubjectContent>
    </Subject>
  )
}
