import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-introduction</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'alchimie est l'art de produire des substances aux propriétés
          ésotériques par la composition d'éléments intermédiaires chargés tant
          en puissance qu'en symbolique, elle se distingue de la magie
          principalement par l'absence d'évocation verbale ou écrite.
          Contrairement à la magie, l'alchimie ne nécéssite aucune
          prédisposition particulière pour être étudiée et exercée.
        </p>

        <p>
          Pratiquer l'alchimie c'est d'abord accumuler des connaissances puis
          ensuite trouver les moyens et le temps permettant de les mettres en
          oeuvre. Le domaine se scinde en plusieurs sous-domaines spécialisés
          dans la production de certains type de substances particulières comme
          les drogues, les poisons, les solutions, les sels ou les gaz.
        </p>

        <p>
          Bien que la discipline biomantique soit originairement une branche de
          l'alchimie elle est considéré comme un domaine à part nécéssitant une
          spécialisation complète, cette technique est l'objet d'un chapitre
          complet de ce manuel.
        </p>
      </SubjectContent>
    </Subject>
  )
}
