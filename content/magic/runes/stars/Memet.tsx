import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Memet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-mege</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-memet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [me.mɛt]
        </p>

        <p className='text-center'>
          Mémèt ou la dame des poisons, est la rune permettant d'évoquer les
          serpents et le venin.
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
              <td> Le serpent, le venin. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le serpent, le venin. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Vénimeux, empoisoné. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Empoisoner. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Empoisonant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
