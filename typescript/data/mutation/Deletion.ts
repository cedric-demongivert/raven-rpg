import { Mutation } from './Mutation'
import { MutationType } from './MutationType'

/**
 * 
 */
export interface Deletion<Model> {
    /**
     * 
     */
    readonly type: MutationType.DELETION

    /**
     * 
     */
    readonly previous: Model

    /**
     * 
     */
    readonly next: undefined

    /**
     * 
     */
    toString(): string

    /**
     * 
     */
    equals(other: any): boolean
}

/**
 *
 */
export namespace Deletion {
    /**
     * 
     */
    export type Properties<Model> = {
        /**
         * 
         */
        type: MutationType.DELETION,

        /**
         * 
         */
        previous: Model,

        /**
         * 
         */
        next?: undefined
    }

    /**
     * 
     */
    export function is<Model>(mutation: Mutation<Model>): mutation is Deletion<Model> {
        return mutation.type === MutationType.DELETION
    }

    /**
     * 
     */
    export function assert<Model>(mutation: Mutation<Model>, message?: string | undefined): asserts mutation is Deletion<Model> {
        if (mutation.type !== MutationType.DELETION) {
            throw new Error(message || 'The given mutation is not a deletion mutation.')
        }
    }
}