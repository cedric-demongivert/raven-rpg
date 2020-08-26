import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Semet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-semet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Sémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-semet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [se.mɛt]
        </p>

        <p className='text-center'>
          Sémèt, le maître des vents, est une rune permettant de former des
          évocations liées au vent.
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
              <td> Le vent, le souffle. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le vent, le souffle. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Venteux, ~sec. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Souffler. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Soufflant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
