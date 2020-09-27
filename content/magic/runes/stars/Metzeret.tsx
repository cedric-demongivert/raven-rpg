import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

// <img src='./images/runic-metzeret.svg' width='200' />
export function Metzeret () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-metzeret</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mètzérèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [mɛt.ze.ʀɛt]
        </p>

        <p className='text-center'>
          Mètzérèt, le prince des voleurs, est une rune qui permet de parler des
          larcins et des vols.
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
              <td> Le voleur, le vol. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le voleur, le vol. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Volé. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Voler. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> En volant, en subtilisant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
