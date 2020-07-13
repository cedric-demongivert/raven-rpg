import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { Bonus } from '../../../components/Bonus'
import { Malus } from '../../../components/Malus'

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
              <th colSpan={5}>Points / Poids par qualité</th>
              <th>Effets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armure de peau</td>
              <td className='text-center'><Malus>+1</Malus> / <Malus>4</Malus></td>
              <td className='text-center'>+2 / <Malus>4</Malus></td>
              <td className='text-center'>+2 / 3</td>
              <td className='text-center'>+2 / <Bonus>2</Bonus></td>
              <td className='text-center'><Bonus>+3</Bonus> / <Bonus>2</Bonus></td>
              <td></td>
            </tr>
            <tr>
              <td>Cotte de mailles</td>
              <td className='text-center'><Malus>+3</Malus> / <Malus>6</Malus></td>
              <td className='text-center'><Malus>+3</Malus> / 5</td>
              <td className='text-center'>+4 / 5</td>
              <td className='text-center'><Bonus>+5</Bonus> / <Bonus>4</Bonus></td>
              <td className='text-center'><Bonus>+6</Bonus> / <Bonus>4</Bonus></td>
              <td>
                Dégâts tranchants légers et dégâts à mains nues réduit de moitié.
              </td>
            </tr>
            <tr>
              <td>Armure d'écailles</td>
              <td className='text-center'><Malus>+2</Malus> / <Bonus>8</Bonus></td>
              <td className='text-center'><Malus>+4</Malus> / 10</td>
              <td className='text-center'>+6 / 10</td>
              <td className='text-center'><Bonus>+7</Bonus> / <Bonus>9</Bonus></td>
              <td className='text-center'><Bonus>+7</Bonus> / <Bonus>8</Bonus></td>
              <td rowSpan={2}>
                Dégâts des flèches transformés en dégâts contondants réduits
                de moitié. <br/>
                Dégâts tranchants légers et dégâts à mains nues réduit de moitié.
              </td>
            </tr>
            <tr>
              <td>Brigandine</td>
              <td className='text-center'><Malus>+2</Malus>  / 9</td>
              <td className='text-center'><Malus>+4</Malus>  / 9</td>
              <td className='text-center'>+6 / 9</td>
              <td className='text-center'>+6 / <Bonus>8</Bonus></td>
              <td className='text-center'><Bonus>+7</Bonus> / <Bonus>8</Bonus></td>

            </tr>
            <tr>
              <td>Cuirasse</td>
              <td className='text-center'><Malus>+2</Malus> / 8</td>
              <td className='text-center'><Malus>+4</Malus> / 8</td>
              <td className='text-center'>+6 / 8</td>
              <td className='text-center'><Bonus>+7</Bonus> / 8</td>
              <td className='text-center'><Bonus>+8</Bonus> / 8</td>
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
              <th className='text-center' style={{width: '75px'}}>0 - 4</th>
              <th className='text-center' style={{width: '75px'}}>5 - 9</th>
              <th className='text-center' style={{width: '75px'}}>10 - 14</th>
              <th className='text-center' style={{width: '75px'}}>15 - 19</th>
              <th className='text-center' style={{width: '75px'}}>20+</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </SubjectContent>
    </Subject>
  )
}
