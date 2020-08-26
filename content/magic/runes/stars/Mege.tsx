import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Mege () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-mege</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mègé</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-mege.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [mɛ.ge]
        </p>

        <p className='text-center'>
          Mègé le noueux ou l'arboricole est la rune permettant de parler du
          bois et des arbres.
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
              <td> L'arbre, le bois. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> L'arbre, le bois. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> De bois, d'écorce. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Durer, persister, patienter. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Durant, persistant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
