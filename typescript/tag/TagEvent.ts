import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'
import { Commit } from '../commit/Commit'

import { TagAction } from './TagAction'
import { Tag } from './Tag'


export namespace TagEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<Tag>

  /**
  *
  */
  export function extracted(commit: Entry<Commit>, tag: Tag): Extracted {
    return {
      type: TagAction.EXTRACTED,
      payload: (
        tag.set(Tag.Properties.REPOSITORY_IDENTIFIER, commit.model.repositoryIdentifier)
          .set(Tag.Properties.COMMIT_IDENTIFIER, commit.identifier)
      )
    }
  }
}
