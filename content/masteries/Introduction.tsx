import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-introduction</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          Les maîtrises sont des champs disciplinaires appréciés sur une échelle
          relative divisé en deux modificateurs : un modificateur inné et un
          modificateur acquis.
        </p>

        {/*<Math
          value={
            '$$\\text{Niveau de maîtrise} = \\text{Modificateur inné} + ' +
            ' \\text{Modificateur acquis}$$'
          }
        />*/}

        <p>
          Le <strong>modificateur d'acquis</strong> d'une maîtrise dépend du total de
          point d'expérience investit dans celle-ci. Les 5 premiers points d'acquis
          coûtent 1 point d'expérience, les 5 suivants 3 points d'expérience, les 5
          encore suivant 6 points d'expérience et les 5 derniers 10 points
          d'expérience. Il faut un total de 100 points d'expérience pour acquérir les
          20 premiers point d'acquis d'une maîtrise.
        </p>

        <table className="table-1d">
          <tbody>
            <tr>
              <td style={{width: '120px'}}> Expérience </td>
              <td style={{width: '35px'}}>   0 </td>
              <td style={{width: '35px'}}>   1 </td>
              <td style={{width: '35px'}}>   2 </td>
              <td style={{width: '35px'}}>   3 </td>
              <td style={{width: '35px'}}>   4 </td>
              <td style={{width: '35px'}}>   5 </td>
              <td style={{width: '35px'}}>   8 </td>
              <td style={{width: '35px'}}>  11 </td>
              <td style={{width: '35px'}}>  14 </td>
              <td style={{width: '35px'}}>  17 </td>
              <td style={{width: '35px'}}>  20 </td>
              <td style={{width: '35px'}}>  26 </td>
              <td style={{width: '35px'}}>  32 </td>
              <td style={{width: '35px'}}>  38 </td>
              <td style={{width: '35px'}}>  44 </td>
              <td style={{width: '35px'}}>  50 </td>
              <td style={{width: '35px'}}>  60 </td>
              <td style={{width: '35px'}}>  70 </td>
              <td style={{width: '35px'}}>  80 </td>
              <td style={{width: '35px'}}>  90 </td>
              <td style={{width: '35px'}}> 100 </td>
            </tr>
            <tr>
              <th> Points d'acquis </th>
              <th>  0 </th>
              <th>  1 </th>
              <th>  2 </th>
              <th>  3 </th>
              <th>  4 </th>
              <th>  5 </th>
              <th>  6 </th>
              <th>  7 </th>
              <th>  8 </th>
              <th>  9 </th>
              <th> 10 </th>
              <th> 11 </th>
              <th> 12 </th>
              <th> 13 </th>
              <th> 14 </th>
              <th> 15 </th>
              <th> 16 </th>
              <th> 17 </th>
              <th> 18 </th>
              <th> 19 </th>
              <th> 20 </th>
            </tr>
          </tbody>
        </table>

        <p>
          Au-delà de 20 points d'acquis le coût de chaque groupe de 5 points consécutif
          continue de suivre une croissance triangulaire.
        </p>

        { /* <Math
          value={
            '$$\\forall n \\in \\mathbb{N}, \\text{Coût}(n) = \\frac{' +
              '\\left \\lceil{\\frac{n}{5}}\\right \\rceil \\times \\left ( ' +
                '\\left \\lceil{\\frac{n}{5}}\\right \\rceil + 1 ' +
              '\\right )' +
            '}{2}$$'
          }
        /> */ }

        <p>
          Le <strong>modificateur d'inné</strong> dépend des caractéristiques et
          varie de -5 points à 5 points. Un modificateur d'inné est égal à la valeur de
          la caractéristique qui lui est  associé divisé par 2, arrondie à l'entier
          inférieur. Si le modificateur est associé à deux caractéristiques la
          caractéristique dite majeure peut impacter le personnage jusqu'à 3 points
          maximum et la caractéristique secondaire peut impacter le personnage jusqu'à
          2 points maximum.
        </p>

        <table className="table-1d">
          <tbody>
            <tr>
              <td colSpan={2} style={{borderRightColor: 'transparent'}}></td>
              <td colSpan={7} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Influence totale</td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderLeftColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td colSpan={5} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={4}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Influence majeure </td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderTopColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td colSpan={5} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={2}></td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&larr;</td>
              <td colSpan={4} style={{borderLeftColor: 'transparent'}}>Influence mineure</td>
              <td colSpan={1} style={{borderLeftColor: 'transparent'}}>&rarr;</td>
              <td colSpan={2} style={{borderLeftColor: 'transparent'}}></td>
              <td colSpan={2} style={{borderTopColor: 'transparent'}}></td>
              <td colSpan={3} style={{borderTopColor: 'transparent'}}></td>
            </tr>
            <tr>
              <td style={{width: '120px'}}> Caractéristique </td>
              <td style={{width: '35px'}}> -10 </td>
              <td style={{width: '35px'}}>  -9 </td>
              <td style={{width: '35px'}}>  -8 </td>
              <td style={{width: '35px'}}>  -7 </td>
              <td style={{width: '35px'}}>  -6 </td>
              <td style={{width: '35px'}}>  -5 </td>
              <td style={{width: '35px'}}>  -4 </td>
              <td style={{width: '35px'}}>  -3 </td>
              <td style={{width: '35px'}}>  -2 </td>
              <td style={{width: '35px'}}>  -1 </td>
              <td style={{width: '35px'}}>   0 </td>
              <td style={{width: '35px'}}>   1 </td>
              <td style={{width: '35px'}}>   2 </td>
              <td style={{width: '35px'}}>   3 </td>
              <td style={{width: '35px'}}>   4 </td>
              <td style={{width: '35px'}}>   5 </td>
              <td style={{width: '35px'}}>   6 </td>
              <td style={{width: '35px'}}>   7 </td>
              <td style={{width: '35px'}}>   8 </td>
              <td style={{width: '35px'}}>   9 </td>
              <td style={{width: '35px'}}>  10 </td>
            </tr>
            <tr>
              <th> Points d'inné </th>
              <th> -5 </th>
              <th> -5 </th>
              <th> -4 </th>
              <th> -4 </th>
              <th> -3 </th>
              <th> -3 </th>
              <th> -2 </th>
              <th> -2 </th>
              <th> -1 </th>
              <th> -1 </th>
              <th> +0 </th>
              <th> +0 </th>
              <th> +1 </th>
              <th> +1 </th>
              <th> +2 </th>
              <th> +2 </th>
              <th> +3 </th>
              <th> +3 </th>
              <th> +4 </th>
              <th> +4 </th>
              <th> +5 </th>
            </tr>
          </tbody>
        </table>

        <p>
          Une maîtrise permet de résoudre des actions aux conséquences incertaines par
          des <strong>résolutions par opposition</strong> ou des <strong>tests
          d'auto-résolution</strong>. Certaines maîtrises ont des effets supplémentaires
          en fonction de leur niveau, dans ce cas la nature des effets sont spécifiés
          dans la description de chaque maîtrise.
        </p>
      </SubjectContent>
    </Subject>
  )
}
