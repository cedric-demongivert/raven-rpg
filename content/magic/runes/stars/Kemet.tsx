import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Kemet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-kemet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Kémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-kemet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [ke.mɛt]
        </p>

        <p className='text-center'>
          Kémèt la cristaline, princesses des roches et de la terre est la rune
          permettant de former des évocations liées à la terre.
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
              <td> La terre, la pierre, ~le métal. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> La terre, la pierre, ~le métal. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Dur, solide. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Durcir, fossiliser. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> De pierre, de terre. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
