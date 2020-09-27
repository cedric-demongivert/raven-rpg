import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-introduction</SubjectIdentifier>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          L'évocation est la technique utilisée par les magiciens pour
          altérer le réel par l'usage de la langue astrale. Pour lancer un sort,
          un magicien doit incanter les symboles qui le compose tout en se
          représentant mentalement leur forme réelle. L'évocation est un acte
          qui peut parraître simple tant il ne repose que sur la capacité
          d'élocution et de concentration du magicien et bien qu'incanter dans
          un calme relatif ne pose pas de problème majeur à un practicien
          entraîné, incanter tout en gérant sa propre peur et son stress dans
          un moment d'action où sa propre vie est en jeu peut relever du défis.
        </p>

        <p>
          Toute évocation se réalise en deux étapes : une étape dite <strong>
          d'incantation</strong> où le magicien doit prononcer les mots et
          donner forme aux symboles dans son esprit, et une étape dite
          de <strong>canalisation</strong> où le magicien doit nourrir le sort
          en captant une quantitée d'éther suffisante dans l'espace qui
          l'entoure.
        </p>
      </SubjectContent>
    </Subject>
  )
}
