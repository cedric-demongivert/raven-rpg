import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { RepositoryAction } from './RepositoryAction'
import { Repository } from './Repository'

export namespace RepositoryEvent {
  /**
  *
  */
  export type Add = ApplicationEvent<string>

  /**
  *
  */
  export type Clone = ApplicationEvent<number>

  /**
  *
  */
  export type Cloning = ApplicationEvent<number>

  /**
  *
  */
  export type Cloned = ApplicationEvent<number>

  /**
  *
  */
  export type CloningFailure = ApplicationEvent<{ identifier: number, reason: Error }>

  /**
  *
  */
  export type ExtractCommits = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingCommits = ApplicationEvent<number>

  /**
  *
  */
  export type CommitsExtracted = ApplicationEvent<number>

  /**
  *
  */
  export type CommitsExtractionFailure = ApplicationEvent<{ identifier: number, reason: Error }>

  /**
  *
  */
  export type ExtractLabels = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingLabels = ApplicationEvent<number>

  /**
  *
  */
  export type LabelsExtracted = ApplicationEvent<number>

  /**
  *
  */
  export type LabelsExtractionFailure = ApplicationEvent<{ identifier: number, reason: Error }>

  /**
  *
  */
  export type Ready = ApplicationEvent<number>

  /**
  *
  */
  export type Remove = ApplicationEvent<number>

  /**
  *
  */
  export function add(payload: string): Add {
    return {
      type: RepositoryAction.ADD,
      payload
    }
  }

  /**
  *
  */
  export function clone(entry: Entry<Repository>): Clone
  /**
  *
  */
  export function clone(identifier: number): Clone
  /**
  *
  */
  export function clone(identifiable: Entry<Repository> | number): Clone
  export function clone(identifiable: Entry<Repository> | number): Clone {
    return {
      type: RepositoryAction.CLONE,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloning(entry: Entry<Repository>): Cloning
  /**
  *
  */
  export function cloning(identifier: number): Cloning
  /**
  *
  */
  export function cloning(identifiable: Entry<Repository> | number): Cloning
  export function cloning(identifiable: Entry<Repository> | number): Cloning {
    return {
      type: RepositoryAction.CLONING,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloned(entry: Entry<Repository>): Cloned
  /**
  *
  */
  export function cloned(identifier: number): Cloned
  /**
  *
  */
  export function cloned(identifiable: Entry<Repository> | number): Cloned
  export function cloned(identifiable: Entry<Repository> | number): Cloned {
    return {
      type: RepositoryAction.CLONED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloningFailure(entry: Entry<Repository>, reason: Error): CloningFailure
  /**
  *
  */
  export function cloningFailure(identifier: number, reason: Error): CloningFailure
  /**
  *
  */
  export function cloningFailure(identifiable: Entry<Repository> | number, reason: Error): CloningFailure
  export function cloningFailure(identifiable: Entry<Repository> | number, reason: Error): CloningFailure {
    return {
      type: RepositoryAction.CLONING_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function extractCommits(entry: Entry<Repository>): ExtractCommits
  /**
  *
  */
  export function extractCommits(identifier: number): ExtractCommits
  /**
  *
  */
  export function extractCommits(identifiable: Entry<Repository> | number): ExtractCommits
  export function extractCommits(identifiable: Entry<Repository> | number): ExtractCommits {
    return {
      type: RepositoryAction.EXTRACT_COMMITS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function extractingCommits(entry: Entry<Repository>): ExtractingCommits
  /**
  *
  */
  export function extractingCommits(identifier: number): ExtractingCommits
  /**
  *
  */
  export function extractingCommits(identifiable: Entry<Repository> | number): ExtractingCommits
  export function extractingCommits(identifiable: Entry<Repository> | number): ExtractingCommits {
    return {
      type: RepositoryAction.EXTRACTING_COMMITS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtracted(entry: Entry<Repository>): CommitsExtracted
  /**
  *
  */
  export function commitsExtracted(identifier: number): CommitsExtracted
  /**
  *
  */
  export function commitsExtracted(identifiable: Entry<Repository> | number): CommitsExtracted
  export function commitsExtracted(identifiable: Entry<Repository> | number): CommitsExtracted {
    return {
      type: RepositoryAction.COMMITS_EXTRACTED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtractionFailure(entry: Entry<Repository>, reason: Error): CommitsExtractionFailure
  /**
  *
  */
  export function commitsExtractionFailure(identifier: number, reason: Error): CommitsExtractionFailure
  /**
  *
  */
  export function commitsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): CommitsExtractionFailure
  export function commitsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): CommitsExtractionFailure {
    return {
      type: RepositoryAction.COMMITS_EXTRACTION_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function extractLabels(entry: Entry<Repository>): ExtractLabels
  /**
  *
  */
  export function extractLabels(identifier: number): ExtractLabels
  /**
  *
  */
  export function extractLabels(identifiable: Entry<Repository> | number): ExtractLabels
  export function extractLabels(identifiable: Entry<Repository> | number): ExtractLabels {
    return {
      type: RepositoryAction.EXTRACT_LABELS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function extractingLabels(entry: Entry<Repository>): ExtractingLabels
  /**
  *
  */
  export function extractingLabels(identifier: number): ExtractingLabels
  /**
  *
  */
  export function extractingLabels(identifiable: Entry<Repository> | number): ExtractingLabels
  export function extractingLabels(identifiable: Entry<Repository> | number): ExtractingLabels {
    return {
      type: RepositoryAction.EXTRACTING_LABELS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtracted(entry: Entry<Repository>): LabelsExtracted
  /**
  *
  */
  export function labelsExtracted(identifier: number): LabelsExtracted
  /**
  *
  */
  export function labelsExtracted(identifiable: Entry<Repository> | number): LabelsExtracted
  export function labelsExtracted(identifiable: Entry<Repository> | number): LabelsExtracted {
    return {
      type: RepositoryAction.LABELS_EXTRACTED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtractionFailure(entry: Entry<Repository>, reason: Error): LabelsExtractionFailure
  /**
  *
  */
  export function labelsExtractionFailure(identifier: number, reason: Error): LabelsExtractionFailure
  /**
  *
  */
  export function labelsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): LabelsExtractionFailure
  export function labelsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): LabelsExtractionFailure {
    return {
      type: RepositoryAction.LABELS_EXTRACTION_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function ready(entry: Entry<Repository>): Ready
  /**
  *
  */
  export function ready(identifier: number): Ready
  /**
  *
  */
  export function ready(identifiable: Entry<Repository> | number): Ready
  export function ready(identifiable: Entry<Repository> | number): Ready {
    return {
      type: RepositoryAction.READY,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function remove(entry: Entry<Repository>): Remove
  /**
  *
  */
  export function remove(identifier: number): Remove
  /**
  *
  */
  export function remove(identifiable: Entry<Repository> | number): Remove
  export function remove(identifiable: Entry<Repository> | number): Remove {
    return {
      type: RepositoryAction.REMOVE,
      payload: Entry.identifier(identifiable)
    }
  }
}
