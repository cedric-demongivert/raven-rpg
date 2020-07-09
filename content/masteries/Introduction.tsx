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
      <SubjectIdentifier>masteries-introduction</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          Les maîtrises sont des champs disciplinaires appréciés sur une échelle
          relative divisé en deux modificateurs : un modificateur inné et un
          modificateur acquis.
        </p>

        <Formula>{
          '\\text{Niveau de maîtrise} = \\text{Modificateur inné} + ' +
          ' \\text{Modificateur acquis}'
        }</Formula>

        <p>
          Le <strong>modificateur d'acquis</strong> d'une maîtrise dépend du total de
          point d'expérience investit dans celle-ci. Les 5 premiers points d'acquis
          coûtent 1 point d'expérience, les 5 suivants 3 points d'expérience, les 5
          encore suivant 6 points d'expérience et les 5 derniers 10 points
          d'expérience. Il faut un total de 100 points d'expérience pour acquérir les
          20 premiers point d'acquis d'une maîtrise.
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
          Le <strong>modificateur d'inné</strong> dépend des caractéristiques et
          varie de -5 points à 5 points. Un modificateur d'inné est égal à la
          valeur de la caractéristique qui lui est associé, soustraite de 10
          points, divisé par 2, le tout arrondie à l'entier inférieur.
        </p>

        <Formula>{
          '\\forall n \\in \\mathbb{N}, \\text{Inné}(n) = \\left \\lfloor' +
            '\\frac{n - 10}{2}' +
          '\\right \\rfloor'
        }</Formula>

        <p>
          Si le modificateur est associé à deux caractéristiques la
          caractéristique dite majeure peut impacter le personnage jusqu'à 3
          points maximum et la caractéristique secondaire peut impacter le
          personnage jusqu'à 2 points maximum.
        </p>

        <table className="table-1d">
          <tbody>
            <tr>
              <td colSpan={2} style={{borderRightColor: 'transparent'}}></td>
              <td colSpan={7} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Total</td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderLeftColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td colSpan={5} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={4}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Majeur</td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderTopColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td colSpan={5} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={2}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Mineur</td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderTopColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td style={{width: '120px'}}> Points d'inné </td>
              {
                range(21).map((level : number) : ReactElement => (
                  <td key={level}> { Math.floor((level - 10) / 2) } </td>
                ))
              }
            </tr>
            <tr>
              <th> Caractéristique </th>
              {
                range(21).map((level : number) : ReactElement => (
                  <th style={{width: '35px'}} key={level}> { level } </th>
                ))
              }
            </tr>
          </tbody>
        </table>

        <p>
          Une maîtrise permet de résoudre des actions aux conséquences incertaines par
          des <strong>résolutions par opposition</strong> ou des <strong>tests
          d'auto-résolution</strong>. Certaines maîtrises ont des effets supplémentaires
          en fonction de leur niveau, dans ce cas la nature des effets sont spécifiés
          dans la description de chaque maîtrise.
        </p>
      </SubjectContent>
    </Subject>
  )
}
