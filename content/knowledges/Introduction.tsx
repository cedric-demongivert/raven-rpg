import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { Formula } from '../../components/Formula'

function range (size : number) : number[] {
  const result : number[] = []

  for (let index = 0; index < size; ++index) {
    result.push(index)
  }

  return result
}

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>knowledges-introduction</SubjectIdentifier>
      <SubjectKeyword>Connaissance</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          Les connaissances sont des champs disciplinaires appréciés sur une
          échelle relative divisé en deux modificateurs : un modificateur de
          spécialisation et un modificateur d'acquis. Les connaissances
          appartiennent à des domaines de connaissances, chaque domaine peut
          regrouper plusieurs connaissances différentes ayant un lien plus ou
          moins important entre elles.
        </p>

        <Formula>{
          '\\text{Niveau de connaissance} = ' +
          '\\text{Modificateur de spécialisation} + ' +
          '\\text{Modificateur d\'acquis}'
        }</Formula>

        <p>
          Le <strong>modificateur d'acquis</strong> d'une connaissance dépend du
          total de point d'expérience investi dans celle-ci. Chaque point
          d'expérience investi dans une connaissance apporte un point d'acquis.
          Il n'est pas possible pour un être humain d'investir plus de 20 points
          d'expérience dans une connaissance.
        </p>

        <p>
          Le <strong>modificateur de spécialisation</strong> dépend de
          l'investissement du personnage dans le domaine parent de la
          connaissance. Un personnage peut toujours choisir de ce spécialiser
          dans un domaine en échange de 5 points d'expérience. Un personnage
          peut se spécialiser au maximum dans trois domaines différents. Chaque
          domaine est alors classé par ordre d'importance : le domaine primaire,
          le domaine secondaire et le domaine tertiaire. Toutes les
          connaissances du domaine primaire ont le droit à un bonus de
          spécialisation de 3 points, toutes les connaissances du domaine
          secondaire ont le droit à un bonus de spécialisation de 2 points et
          toutes les connaissances du domaine tertiaire ont le droit à un bonus
          de spécialisation de 1 point.
        </p>

        <p>
          Les connaissances permettent de résoudre des actions aux conséquences
          incertaines par des <strong>résolutions par opposition</strong> ou
          des <strong>tests d'auto-résolution</strong>. Certaines connaissances
          ont des effets supplémentaires en fonction de leur niveau, dans ce cas
          la nature des effets sont spécifiés dans la description de chaque
          connaissance.
        </p>
      </SubjectContent>
    </Subject>
  )
}
