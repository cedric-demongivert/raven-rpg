import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

// <img src='./images/runic-zege.svg' width='200' />
export function Zege () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-zege</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Zégé</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [ze.ge]
        </p>

        <p className='text-center'>
          Zégé la reine atlante est la rune permettant de former des évocations
          liées aux poissons et aux écailles.
        </p>

        <table className='table-1d table-vertical text-center'>
          <thead>
            <tr>
              <th style={{width: '100px'}}> Nature </th>
              <th style={{width: '300px'}}> Synonyme(s) </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Sujet </td>
              <td> Le poisson, l'écaille. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le poisson, l'écaille. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Écailleux. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Nager. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Écailleux, Nageant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
