import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Bestiality () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-bestiality</SubjectIdentifier>
      <SubjectKeyword>Bestialité</SubjectKeyword>
      <SubjectTitle>Appel et bestialité</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Tout à un prix, pour les biomanciens, les mutations successives les
          rendent de plus en plus réceptif à <strong>l'appel</strong>, c'est à
          dire à la tentation d'abandonner définitivement son corps et son
          esprit à son ou ses totem. L'appel entraîne de très légères
          halucinations cognitives passagère et trouble de temps à autre les
          rêves et les pensées du personnage. Ça n'est pas un effet remarquable
          dans l'instant mais qui est capable d'user même les esprits les plus
          préparés dans la durée. Un niveau d'appel très élevé peut même
          entrainer des changements de comportement et de physique.
        </p>

        <p>
          Les personnages victime de l'appel sont sujet à des sauts d'humeur
          beaucoup plus fréquents et on tendance à devenir lunatique. A un degré
          très avancé, l'appel peut aussi provoquer des transformations
          spontanées du personnage qui doit alors s'éloigner de la civilisation
          sur des bases régulières. Quand aux individus qui scèdent complètement
          à l'appel, ils deviennent alors des bêtes assoiffées de sang et de
          violence qui ne suivent plus que leurs instincts les plus primitifs.
          Les créatures résultant de ce processus sont appellés des échoués.
        </p>

        <p>
          L'appel est évalué sur une échelle naturelle entre 0 et 20. A partir
          de 5 points d'appel le personnage est alors sujet à ses effets et doit
          alors faire preuve d'une prudence accrue vis-à-vis de son
          comportement pour ne pas perdre le contrôle de son corps ou oublier
          de manière passagère qui il est. On dit alors que le personnage peut
          faire preuve de <strong>bestialité</strong> ou de rage. Le niveau de
          bestialité d'un personnage est aussi évalué entre 0 et 20.
        </p>

        <p>
          En cas d'épreuve stressante, comme un échange social très animé, la
          réception d'un coup ou un pic de peur le personnage doit alors
          tenter de contrôler ses instincts pour ne pas sombrer un peut plus
          dans la bestialité. A cette fin il peut réaliser un test d'opposition
          entre sa volonté et un degré de difficulté équivalent à sa bestialité
          actuelle additionné de son niveau d'appel. Si le test échoue il prend
          alors 2D6 / 2 points de bestialité.
        </p>

        <p>
          Quand la bestialité d'un personnage augmente, les effets secondaires
          de ses mutations peuvent alors apparaître. Ces effets sont passagers,
          mais mettent le corps à rude épreuve, un personnage qui monte à 10
          points de bestialité ou plus doit réaliser un test d'opposition entre
          sa constitution et son niveau de bestialité pour ne pas subir une
          intense fatigue une fois qu'il sera revenu à la normale.
        </p>

        <p>
          Si la bestialité d'un personnage monte à 20 points ou plus, le
          personnage n'est alors plus maître de ses actions et son instinct
          prend totalement le dessus. Il est alors considéré comme berserk et
          attaquera l'entitée la plus proche de lui qu'elle soit amie ou
          ennemie. Dans un dernier effort de volonté un personnage peut toujours
          tenter de dévier sa rage sur la prochaine entitée la plus proche en
          réalisant un test d'opposition entre son score de contrôle et
          son score de bestialité divisé par deux. S'il est réussi, ce test peut
          être répété moyennant un malus de deux points par tentative.
        </p>

        <p>
          Un personnage perds 2D6 / 2 points de bestialité par 15 min quand il
          est dans un cadre stable et calme. S'il le souhaite il peut aussi
          tenter de déverser sa rage sur un personnage ou en corps pour perdre
          immédiatement 2D6 /2 points de bestialité, mais un tel défferlement de
          violence n'est jamais sans conséquence sur l'esprit des témoins de la
          scène.
        </p>
      </SubjectContent>
    </Subject>
  )
}
