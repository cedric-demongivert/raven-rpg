import { ApplicationContext } from './ApplicationContext'
import { Entry } from './data/Entry'
import { Repository } from './state/git/Repository'

export async function initialize(context: ApplicationContext): Promise<void> {
  const repository: Entry<Repository> = context.git.subscribe('http://gitea.cedric-demongivert.com/cdemongivert/corvus.git')

  await context.git.loadRepository(repository)
  await context.git.loadCommit(context.store.getState().commits.latest(repository))
}
