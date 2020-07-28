import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Fatalities () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-fatalities</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Fatalités</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Vivre, c'est attendre la mort, et nul ne peut courrir assez vite pour
          échapper à cette destinée, alors à quoi bon courrir ? C'est l'essence
          même de la fatalité et différents éléments du récit peuvent mettre les
          personnages, même les plus endurcis d'entre-eux, face à leur condition
          précaire et les ammener à réviser leurs chances de survie à court
          terme.
        </p>

        <p>
          <em>Dégâts.</em> Visiblement, vous n'êtes clairement pas invincible.
          Combien faudra-t-il encore de coup pour que vous soyez définitivement
          au tapis ? Beaucoup pensez-vous ? Quand un personnage subit des
          dégâts, il doit réaliser un test de volonté d'un degré de difficulté
          équivalent au nombre de points de dégâts subits. Si le test réussi, le
          personnage ne perd qu'un point de volonté, s'il échoue, le personnage
          perd 1D4 points de volonté.
        </p>

        <p>
          <em>Blessure.</em> Visiblement, vous saignez comme les autres.
          Comme-quoi il y a des choses devant lesquelles nous sommes bien tous
          égaux. Et nous pourrons toujours trouver quelqu'un d'autre pour
          saigner à votre place. Quand un personnage est blessé au cours d'un
          combat, le degré de difficulté du test de volonté qu'il doit subir
          augmente de 5 points si la blessure est légère et de dix points si la
          blessure est grave. En cas de succès il perd un point de volonté
          supplémentaire à cause de la blessure, en cas d'échec le nombre de
          points de volontés perdu monte à 1D6 + 1 en place des 1D4 usuels.
        </p>

        <p>
          <em>Coma.</em> Et un premier qui tombe, et il reste tant à faire. Au
          fond, ne serez-vous pas le prochain à goûter la terre ? Quand un
          personnage tombe au combat l'ensemble de ses alliés doivent réussir un
          test de volonté d'un degré de difficulté de 10 points. Si le test
          réussi, le personnage ne perd que 2 points de volonté, sinon il perd
          1D4 + 1 points.
        </p>

        <p>
          <em>Mort.</em> Et voilà une vie mouvementée, rondement menée, qui se
          termine une fois de plus comme toutes les autres. Au fond, quelle
          différence entre maintenant et plus tard ? Quand un personnage meurt
          au combat l'ensemble de ses alliés doit réussir un test de volonté
          d'un degré de difficulté de 15 points. Si le test réussi, le
          personnage ne perd que 2 points de volonté, sinon il perd 1D6 + 1
          points.
        </p>

        <p>
          <em>Échec critique.</em> Comme quoi vous n'êtes pas si infaillible que
          cela au final. Vous êtes au fond comme tous les autres. Quand un
          personnage est sujet à un échec critique il doit réussir un test de
          volonté d'un degré de difficulté de 10 points. Si le test réussi, le
          personnage ne perd qu'un point de volonté, sinon il perd 1D4 points.
        </p>

        <p>
          <em>Surnombre.</em> Là, il y en a clairement plus que vous. Quand vous
          serez mort l'on pourra écrire que vous n'aviez pas vraiment de chances
          d'en sortir vivant quand vous avez foncé tête baissé dans la mêlée, si
          on ne lui préfère pas une épitaphe bien plus courte, comme la bêtise.
          En cas de conflit, si les adversaires sont en surnombre, les joueurs
          doivent réaliser un test de volonté d'un degré de difficulté
          équivalent au nombre d'adversaire supplémentaire multiplié par 2. Si
          le test réussi, le personnage ne perd qu'un point de volonté, sinon,
          il en perd 1D4.
        </p>

        <p>
          <em>Folie.</em> Nous sommes tous faillibles, enfin certains plus que
          d'autres, mais tout bien reconsidéré êtes-vous vraiment à ce point
          différent des autres ? Quand un allié sombre dans la folie, tous les
          personnages alliés le remarquant doivent réussir un test de volonté
          d'un degré de difficulté de 10 points. Si le test réussi le personnage
          perd 1 point de volonté, sinon il en perd 1D4.
        </p>

        <p>
          <em>Entitée.</em> Ça n'est pas humain ça. Et si ça se trouve ça ne
          peut même pas mourrir. Par contre dans votre cas il semblerait que
          l'expérience démontre le contraire. Quand des personnages engagent un
          combat contre une entitée ils doivent alors réussir un test de volonté
          d'un degré de difficulté de 10 points. Si le test réussi le personnage
          perd 1 point de volonté, sinon il en perd 1D4.
        </p>
      </SubjectContent>
    </Subject>
  )
}
