import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Canvas () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-canvas</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Canevas astral</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <p className='text-center'>
              <img src='./images/runic-canvas.svg' width='200' />
            </p>
          </div>
          <div className='col-xs-12 col-md-8'>
            <p>
              Pour peindre les runes les scribes utilisent un canevas astral qui
              est plus simplement un ensemble de lignes primitive servant de
              guide pour la production des différents symboles. Toute production
              de parchemin ou de gravures fait forcément suite à la mise en
              place d'un canvas.
            </p>

            <p>
              Il est possible de dessiner le canvas au crayon ou de le graver
              très finement en fonction du support ciblé. Les meilleurs
              scriptoriums utilisent quand à eux des méthodes basées sur les
              ombres chinoises consistant à projeter une ombre créée par une
              pièce de métal finement forgée au travers d'une lentille de verre
              grossisante. On parle alors d'écriture par projection.
            </p>
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
