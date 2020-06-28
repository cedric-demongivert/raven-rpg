import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function PandoraSkin () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-pandora-skin</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Écorce de pandore</SubjectKeyword>
      <SubjectTitle>Écorce de pandore</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Contrairement à ce que l'on peut croire, l'écorce de pandore est en
          réalité un champignon symbiote formant de curieuses spirales que l'on
          peut retrouver sur certains arbres très endomagés. De couleur noire
          virant sur le violet très foncé il se nourrit d'une partie de la sève
          de son hôte tout en remplaçant une partie de son écorce endomagée.		
        </p>
      </SubjectContent>
    </Subject>
  )
}
