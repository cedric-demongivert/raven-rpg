import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

//<img src='./images/runic-xemeter.svg' width='200' />
export function Xemeret () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-xemeret</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Xèmérèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [xɛ.me.ʀɛt]
        </p>

        <p className='text-center'>
          Xèmérèt, l'horloger, est la rune permettant de parler du temps, et
          du mouvement. L'étoile de l'horloger est une étoile particulière car
          elle possède deux noms appellés aspects. Chaque aspect représente la
          même idée avec une subtile différence.
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
              <td> Le temps. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le temps, l'horloge. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Lent. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Mouvement. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Lentement. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
