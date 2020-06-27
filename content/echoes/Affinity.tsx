import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Affinity () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>echoes-affinity</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectKeyword>Affinité</SubjectKeyword>
      <SubjectTitle>Affinité</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'affinité est une mesure de la cohésion entre l'hôte et son echo. Elle
          est appréciée sur une échelle de 1 à 100 et connue uniquement du maître du
          jeu. Une affinité ne peut pas être négative ou nulle et une affinité ne
          peut pas avoir une valeur supérieure à 100. L'affinité entre un hôte et un
          Écho influence l'efficacité des atouts de celui-ci, son obéissance et les
          chances d'en augmenter la maîtrise.
        </p>

        <p>
          L'affinité de départ de tout hôte est égale à 1 et plusieurs types
          d'évènement peuvent influencer ce score. Certains évènements impliqueront
          une augmentation ou une réduction immédiate de l'affinité entre l'hôte et
          son Écho, d'autres nécéssiteront de réaliser un test d'affinité négatif
          ou positif pour déterminer l'impact exact de l'évènement.
        </p>

        <p>
          Lors d'un test d'affinité négatif l'hôte doit lancer un dé 100 et faire un
          score inférieur ou égal à un degré de difficulté équivalent à son score
          d'affinité actuel additionné de son score de contrôle multipliée par 5. Si
          l'hôte réussi son jet alors son affinité subira un malus d'1D10 points.
          Bien entendu toute perte d'affinité s'accompagne d'une réaction adéquate
          de l'Écho.
        </p>

        <p>
          Lors d'un test d'affinité positif l'hôte doit lancer un dé 100 et faire un
          score strictement supérieur à un degré de difficulté équivalent à score
          d'affinité actuel retranché de son score de contrôle multipliée par 5. Si
          l'hôte réussi son jet alors son affinité obtiendra un bonus d'1D10 points.
          Bien entendu tout gain d'affinité s'accompagne d'une réaction adéquate de
          l'Écho.
        </p>

        <p>
          Le résultat d'un test d'affinité ne peut pas déboucher sur un score
          supérieur à 100 ou sur un score inférieur à 1. Si le résultat d'un jet
          provoque un dépassement d'une des deux limites, alors le score est
          considéré comme égal à la limite ainsi dépassée. Tous les tests sont
          réalisés à l'aveugle sur demande du maître du jeu, les joueurs ne peuvent
          se baser que sur le comportement de leur Écho pour avoir une idée de leur
          score d'affinité actuel.
        </p>

        <p>
          Les tests d'affinités sont plus évident à faire jouer pour les hôtes
          ayant un Écho qui se manifeste régulièrement. Pour les hôtes ayant un
          Écho ad nihil les tests d'affinités sont joués en fonction de leur
          comportement. Les hôtes suivant une morale stricte ont plus de chance
          d'augmenter leur affinité avec leur Écho que les hôtes ayant un
          comportement plus ératiques, moins prédictible. Les hôtes ad nihil ayant
          un score de contrôle négatif augmentent naturellement leur affinité à
          chaque fois qu'ils réalisent un haut-fait.
        </p>
      </SubjectContent>
    </Subject>
  )
}
