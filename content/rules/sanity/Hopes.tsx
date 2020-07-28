import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Hopes () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-hopes</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Espoirs</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'espoir fait vivre, et plusieurs évènements peuvent amener des
          personnages à revoir leur estimation de survie initiale à la hausse.
          Prenez-garde toutefois à ne pas vous méprendre quand à la nature
          réelle de la lumière observée au bout du tunel.
        </p>

        <p>
          <em>KO.</em> Vous vous approchez du but et celui-là ne saura mettre un
          frein à vos ambitions, au fond, comme tous les autres jusqu'ici. Quand
          un adversaire tombe au combat, tous les personnages alliés témoins de
          la scène gagnent 2 points de volonté.
        </p>

        <p>
          <em>Succès critique.</em> La réussite amène la réussite, enfin, si
          cela peut vous aidez d'y croire qui somme-nous pour juger ? Quand un
          personnage réussi brillament une action tous les personnages alliés
          l'ayant remarqué gagnent 2 points de volonté.
        </p>

        <p>
          <em>Blessure.</em> Tout ce qui saigne peut mourrir, non ? Quand un
          personnage réussi à infliger une blessure à un adversaire, il gagne
          immédiatement 2 points de volonté.
        </p>

        <p>
          <em>Héroïsme.</em> Un personnage héroïque est certainement un fou,
          mais c'est aussi un modèle de combativité. Quand un personnage décide
          d'agir héroïquement, l'ensemble des alliés le remarquant gagnent 2
          points de volonté.
        </p>

        <p>
          <em>Victoire.</em> Et un groupe de plus qui mord la poussière, tant
          de victoires déjà acquises, et tant de victoires encore à prendre.
          En cas de victoire, l'ensemble des alliés gagnent 2 points de volonté.
        </p>
      </SubjectContent>
    </Subject>
  )
}
