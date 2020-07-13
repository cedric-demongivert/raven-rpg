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

function cost (index : number) : number {
  const base : number = Math.ceil(index / 5)
  return base * (base + 1) / 2
}

function experience (index : number) : number {
  let result : number = 0

  for (let costIndex = 0; costIndex <= index; ++costIndex) {
    result += cost(costIndex)
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
          spécialisation et un modificateur acquis. Les connaissances
          appartiennent à des domaines de connaissances, chaque domaine peut
          regrouper plusieurs connaissances différentes ayant un lien plus ou
          moins important entre elles.
        </p>

        <Formula>{
          '\\text{Niveau de maîtrise} = ' +
          '\\text{Modificateur de spécialisation} + ' +
          '\\text{Modificateur acquis}'
        }</Formula>

        <p>
          Le <strong>modificateur d'acquis</strong> d'une connaissance dépend du
          total de point d'expérience investit dans celle-ci. Les 5 premiers
          points d'acquis coûtent 1 point d'expérience, les 5 suivants 3 points
          d'expérience, les 5 encore suivant 6 points d'expérience et les 5
          derniers 10 points d'expérience. Il faut un total de 100 points
          d'expérience pour acquérir les 20 premiers point d'acquis d'une
          connaissance.
        </p>

        <table className="table-1d">
          <tbody>
            <tr>
              <td style={{width: '120px'}}> Expérience </td>
              {
                range(21).map((level : number) : ReactElement => (
                  <td style={{width: '35px'}} key={level}>{
                    experience(level)
                  }</td>
                ))
              }
            </tr>
            <tr>
              <th> Acquis </th>
              {
                range(21).map((level : number) : ReactElement => (
                  <th key={level}>{ level }</th>
                ))
              }
            </tr>
          </tbody>
        </table>

        <p>
          Au-delà de 20 points d'acquis le coût de chaque groupe de 5 points
          consécutif continue de suivre une croissance triangulaire.
        </p>

        <Formula>{
          '\\forall n \\in \\mathbb{N}, \\text{Coût}(n) = \\frac{' +
            '\\left \\lceil{\\frac{n}{5}}\\right \\rceil \\times \\left ( ' +
              '\\left \\lceil{\\frac{n}{5}}\\right \\rceil + 1 ' +
            '\\right )' +
          '}{2}'
        }</Formula>

        <p>
          Le <strong>modificateur de spécialisation</strong> dépend de
          l'investissement du personnage dans le domaine parent de la
          connaissance. Un personnage peut toujours choisir de ce spécialiser
          dans un domaine en échange de 25 points d'expérience. Un personnage
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
