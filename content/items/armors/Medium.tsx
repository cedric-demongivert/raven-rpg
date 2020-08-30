import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Medium () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-armors-medium</SubjectIdentifier>
      <SubjectTitle>Armures intermédiaires</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='table-1d table-vertical fill'>
          <thead>
            <tr>
              <th style={{width: '200px'}}>Armure</th>
              <th style={{width: '100px'}}>Bonus</th>
              <th style={{width: '100px'}}>Poids</th>
              <th>Effets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armure de peau</td>
              <td className='text-center'>+2</td>
              <td className='text-center'>3</td>
              <td></td>
            </tr>
            <tr>
              <td>Cotte de mailles</td>
              <td className='text-center'>+4</td>
              <td className='text-center'>5</td>
              <td>
                Dégâts tranchants légers et dégâts à mains nues réduit de moitié.
              </td>
            </tr>
            <tr>
              <td>Armure d'écailles</td>
              <td className='text-center'>+5</td>
              <td className='text-center'>6</td>
              <td rowSpan={2}>
                Dégâts des flèches transformés en dégâts contondants réduits
                de moitié. <br/>
                Dégâts tranchants légers et dégâts à mains nues réduit de moitié.
              </td>
            </tr>
            <tr>
              <td>Brigandine</td>
              <td className='text-center'>+6</td>
              <td className='text-center'>7</td>
            </tr>
            <tr>
              <td>Cuirasse</td>
              <td className='text-center'>+6</td>
              <td className='text-center'>7</td>
              <td>
                Remplace une armure lourde. <br/>
                Inefficace en cas de critique. <br/>
                Dégâts des flèches transformés en dégâts contondants réduits
                de moitié. <br/>
                Dégâts tranchants légers et dégâts à mains nues nullifiés.
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </SubjectContent>
    </Subject>
  )
}
