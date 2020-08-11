
import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function RerollRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-reroll</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Pousser un test</SubjectKeyword>
      <SubjectTitle>Pousser un test</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand un joueur échoue à passer un test et que son échec n’est pas un
          échec critique il peut alors réitérer sa tentative en présentant une 
          justification scénaristique validée par le maître du jeu. Dans cette 
          situation, l’on dit alors du joueur qu’il pousse le test, et, si sa 
          seconde tentative est une réussite, alors le test origine est 
          considéré comme passé. Si, au contraire, le joueur échoue sa seconde 
          tentative, alors cet échec est considéré comme un échec critique.
        </p>
      </SubjectContent>
    </Subject>
  )
}
