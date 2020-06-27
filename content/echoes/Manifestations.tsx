import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Manifestations () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>echoes-manifestations</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectKeyword>Manifestation</SubjectKeyword>
      <SubjectTitle>Manifestations</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La nature de la relation entre un <strong>hôte</strong> et son
          <strong>Écho</strong> est communément appelé une
          <strong>manifestation</strong>. Le type de manifestation d'un Écho dépend
          de l'affinité entre celui-ci et son hôte. La manifestation d'un Écho peut
          apporter divers bonus comme malus.
        </p>

        <p>
          <em>Ad nihil.</em> C'est la manifestation la plus répandue, elle relève
          d'une situation où l'hôte et l'Écho ne communiquent pas. Bien que
          pour le profane cette situation puisse être assimilée à l'absence pure et
          simple d'Écho il ne faut pas se tromper : l'Écho est tout de même
          bien présent bien que rien ne le motive à s'ingérer dans les affaires de
          son hôte. Un Écho ad nihil n'apporte aucun avantage ni inconvénient.
        </p>

        <p>
          <em>Ad mentis.</em> Cette manifestation se résume principalement en un
          dialogue interne plus ou moins constant entre l'hôte et l'Écho. Les
          Échos profitent de ce type de situation pour orienter leur hôte pour
          qu'ils exécutent leurs plans à moyen - long terme. Cependant dans cet état
          les Échos sont incapable de communiquer simplement, ils peuvent parler du
          présent, du futur, du passé ou de sujets qui n'ont aucun rapport avec le
          plan de l'hôte. Sous cette forme seulement le joueur reçoit gratuitement
          l'atout <strong>Écho oracle</strong>.
        </p>

        <p>
          <em>Ad naturam.</em> Ce type de manifestation consiste essentiellement en
          la matérialisation de l'Écho sous une forme quelconque. En fonction de
          l'Écho cette manifestation peut débloquer un <strong>atout d'Écho
          ad naturam</strong>. Un Écho matérialisé perd entièrement sa capacité
          d'omniscience entrainant la perte de l'atout
          <strong>Écho oracle</strong>. Bien que la forme matérielle de l'Écho
          puisse se battre et réaliser des tâches simples elles restent des
          incarnations complètement indépendantes de leur hôte et peuvent donc ne
          pas répondre aux ordres donnés si ceux-ci ne leur conviennent pas.
        </p>

        <p>
          <em>Ad commutationem</em> Dans cette situation l'hôte peut prendre le
          contrôle de l'incarnation de l'Écho. Celui-ci est aussi plus enclin à
          suivre les ordres qui lui sont donnés et peut prendre le contrôle du corps
          de l'hôte tant que celui-ci l'y autorise. Cette situation peut entraîner
          un bonus de caractéristique mentale, ainsi que l'ajout d'un <strong>atout
          d'Écho ad commutationem</strong>. Cette situation permet de plus
          d'accéder à tous les atouts <strong>ad commutationem</strong> génériques
          comme le <strong>sommeil du guetteur</strong>.
        </p>

        <p>
          <em>Ad hominem.</em> C'est la situation la plus instable de manifestation,
          l'hôte peut manifester un certain nombre de mutations mineures. Cette
          situation entraîne l'apparition d'un bonus de caractéristique physique,
          mais aussi l'ajout d'un <strong>atout d'Écho ad hominem</strong>. Dans
          cette situation la démarcation entre Écho et hôte est extrêmement floue
          et l'hôte peut perdre le contrôle de son corps si son score de contrôle
          est trop faible.
        </p>

        <p>
          <em>Ad fusionem.</em> La manifestation ad fusionem est la forme la plus
          forte de manifestation et consiste en la destruction complète de la
          personnalité et de la volonté de l'hôte qui laisse entièrement place à
          l'Écho. L'Écho peut toujours contrôler sa manifestation matérielle qui
          n'est alors plus qu'une coquille vide. Un état de fusion est équivalent à
          une mort définitive pour tout personnage joueur.
        </p>
      </SubjectContent>
    </Subject>
  )
}
