import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Canalization () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-canalization</SubjectIdentifier>
      <SubjectTitle>Canalisation</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          Une fois une évocation correctement incantée il ne reste alors plus
          qu'à canaliser sufisamment d'éther pour lui donner forme. <strong>La
          canalisation</strong> est une action immédiate ne requierant aucun
          test particulier.
        </p>

        <p>
          <strong>La concentration naturelle d'éther</strong> est une valeur
          cachée et fixe tirée au d6 au début des combats. Cette valeur
          représente la quantitée d'éther canalisée par défaut dans le milieu
          dans lequel se trouve le magicien. La concentration naturelle d'éther
          peut varier en fonction du milieu, de manière générale la quantitée
          d'éther disponible est souvent réduite dans les milieux clos et haute
          dans les territoires arborés. Si le territoire est considéré comme
          pauvre il est possible de lancer deux d6 et de ne garder que le plus
          faible, dans le cas d'un territoire riche il est possible de lancer
          deux d6 et de ne garder que le plus fort.
        </p>

        <p>
          <strong>La canalisation</strong> est donc l'acte d'un magicien visant
          à faire varier cette quantitée en usant du pouvoir qu'il possède. Une
          fois la concentration naturelle annoncée, un magicien peut alors
          choisir d'augmenter ou de diminuer la concentration à hauteur de son
          bonus de pouvoir. Dans le cas d'un bonus de pouvoir négatif, cette
          décision est prise pas le maître du jeu, ou au pur hasard.
        </p>

        <p>
          Une fois la quantitée d'éther canalisée fixée, le magicien subit un
          empoisonement équivalent et peut exécuter son sort en tenant compte
          de cette valeur.
        </p>
      </SubjectContent>
    </Subject>
  )
}
