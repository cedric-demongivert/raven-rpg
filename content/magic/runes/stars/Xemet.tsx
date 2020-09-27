import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

//<img src='./images/runic-xemet.svg' width='200' />
export function Xemet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-xemet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Xémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [xe.mɛt]
        </p>

        <p className='text-center'>
          Xémèt la radieuse est la rune permettant de parler de la lumière et
          des étoiles.
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
              <td> La lumière, l'étoile. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> La lumière, l'étoile. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Lumineux, brillant. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Illuminer. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Lumineusement. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
