import { Mutation } from './Mutation'
import { MutationType } from './MutationType'

/**
 * 
 */
export interface Update<Model> {
    /**
     * 
     */
    readonly type: MutationType.UPDATE

    /**
     * 
     */
    readonly previous: Model

    /**
     * 
     */
    readonly next: Model

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
export namespace Update {
    /**
     * 
     */
    export type Properties<Model> = {
        /**
         * 
         */
        type: MutationType.UPDATE,

        /**
         * 
         */
        previous: Model,

        /**
         * 
         */
        next: Model
    }

    /**
     * 
     */
    export function is<Model>(mutation: Mutation<Model>): mutation is Update<Model> {
        return mutation.type === MutationType.UPDATE
    }

    /**
     * 
     */
    export function assert<Model>(mutation: Mutation<Model>, message?: string | undefined): asserts mutation is Update<Model> {
        if (mutation.type !== MutationType.UPDATE) {
            throw new Error(message || 'The given mutation is not an update mutation.')
        }
    }
}