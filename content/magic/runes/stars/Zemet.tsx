import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Zemet () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-zemet</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Zémèt</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-zemet.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [ze.mɛt]
        </p>

        <p className='text-center'>
          Zémèt le prince des eaux est la rune permettant de former des
          évocations liées à l'eau et aux liquides.
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
              <td> L'eau, le liquide. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> L'eau, le liquide. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Liquide, mouillé. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Mouiller, humidifier, liquéfier. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Humide, liquide. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
