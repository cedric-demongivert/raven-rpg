import { Mutation } from './Mutation'
import { MutationType } from './MutationType'

/**
 * 
 */
export interface Addition<Model> {
    /**
     * 
     */
    readonly type: MutationType.ADDITION

    /**
     * 
     */
    readonly previous: undefined

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
export namespace Addition {
    /**
     * 
     */
    export type Properties<Model> = {
        /**
         * 
         */
        type: MutationType.ADDITION,

        /**
         * 
         */
        previous?: undefined,

        /**
         * 
         */
        next: Model
    }

    /**
     * 
     */
    export function is<Model>(mutation: Mutation<Model>): mutation is Addition<Model> {
        return mutation.type === MutationType.ADDITION
    }

    /**
     * 
     */
    export function assert<Model>(mutation: Mutation<Model>, message?: string | undefined): asserts mutation is Addition<Model> {
        if (mutation.type !== MutationType.ADDITION) {
            throw new Error(message || 'The given mutation is not an addition mutation.')
        }
    }
}