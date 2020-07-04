import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Definitions () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-definitions</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectTitle>Définitions</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'alchimie est un domaine qui requiert une certaine rigueur pour
          permettre à ses pratiquants, les alchimistes, de communiquer
          fidèlement entre eux, et surtout pour eux-même, le résultat de leurs
          travaux et recherches. Cette première partie propose de faire un tour
          des définitions nécéssaires et suffisantes pour comprendre le domaine
          passionant qu'est l'alchimie.
        </p>

        <p>
          <strong>Transformation.</strong> On appelle transformation tout
          procédé permettant d'obtenir une ou plusieure matières dites matières
          produites en consomant une ou plusieurs matières dites matières
          consommées. L'infusion, la décoction, la macération, le séchage, la
          dilution, la concentration, le broyage et la distillation sont des
          exemples de transformation.
        </p>

        <p>
          <strong>Matière.</strong> On appelle matière alchimique tout élément
          pouvant subir une transformation ou être consommé. Une plante, un gaz,
          une roche, un os, une peau, une chair et un liquide sont des exemples
          de matière.
        </p>

        <p>
          <strong>Élément primitif.</strong> On appelle élément primitif toute
          matière extraite de la nature. C'est à dire n'ayant pas subie de
          transformation objet de la volonté d'un alchimiste. Une plante, un
          gaz, un minéral, un os, une peau ou une chair sont des exemples
          d'éléments primitifs.
        </p>

        <p>
          <strong>Transformé.</strong> On appelle transformé toute matière
          résultant d'une transformation objet de la volonté d'un alchimiste.
          Une infusion de menthe, une décoction de café ou une poudre de germe
          de blé sont des exemples de transformé.
        </p>

        <p>
          <strong>Propriété alchimiques.</strong> On appelle propriété
          alchimique d'une matière tout ensemble d'effet insécable dont elle
          fait l'objet. L'augmentation d'une caractéristique, l'application d'un
          statut et l'ajout d'une capacité sont des exemples de propriété
          alchimique.
        </p>

        <p>
          <strong>Essence.</strong> On dit d'une matière qu'elle est une essence
          si elle ne possède qu'une unique propriété alchimique.
        </p>
      </SubjectContent>
    </Subject>
  )
}
