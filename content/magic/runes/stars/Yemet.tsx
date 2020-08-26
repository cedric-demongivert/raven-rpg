import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Yemet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-yemet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Yémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-yemet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [je.mɛt]
        </p>

        <p className='text-center'>
          Yémèt aussi appellée l'étoile des flammes est la rune permettant de
          former des évocations liées à l'élément du feu.
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
              <td> Le feu, la chaleur. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le feu, la chaleur. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Chaud, brûlant. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Brûler, chauffer. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Brulant, chauffant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
