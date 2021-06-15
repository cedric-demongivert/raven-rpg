import { BinaryHeap } from '../typescript/data/BinaryHeap'

function comparator(left: number, right: number): number {
  return left - right
}

function* randomSequence(quantity: number): Generator<number> {
  for (let index = 0; index < quantity; ++index) {
    yield Math.random()
  }
}

/**
 * 
 */
describe('BinaryHeap', function () {
  /**
   * 
   */
  describe('reduce', function () {
    /**
     * 
     */
    it('allow to add an element to a heap', function () {
      const heap: BinaryHeap<number> = new BinaryHeap(comparator)

      for (let index = 0; index < 200; ++index) {
        BinaryHeap.reduce(heap, Math.random())
      }

      for (let index = 0; index < 200; ++index) {
        if (heap.hasLeft(index)) {
          expect(comparator(heap.getLeft(index), heap.get(index))).toBeLessThanOrEqual(0)
        }

        if (heap.hasRight(index)) {
          expect(comparator(heap.getRight(index), heap.get(index))).toBeLessThanOrEqual(0)
        }
      }
    })
  })

  /**
   * 
   */
  describe('reduceAll', function () {
    /**
     * 
     */
    it('allow to add multiple elements to a heap', function () {
      const heap: BinaryHeap<number> = new BinaryHeap(comparator)

      BinaryHeap.reduceAll(heap, randomSequence(200))

      for (let index = 0; index < 200; ++index) {
        if (heap.hasLeft(index)) {
          expect(comparator(heap.getLeft(index), heap.get(index))).toBeLessThanOrEqual(0)
        }

        if (heap.hasRight(index)) {
          expect(comparator(heap.getRight(index), heap.get(index))).toBeLessThanOrEqual(0)
        }
      }
    })
  })

  /**
   * 
   */
  describe('pop', function () {
    /**
     * 
     */
    it('remove the topmost element of the heap', function () {
      const heap: BinaryHeap<number> = new BinaryHeap(comparator)

      BinaryHeap.reduceAll(heap, randomSequence(200))

      let previous: number = Number.POSITIVE_INFINITY

      while (heap.size > 0) {
        const topmost: number = heap.elements[0]

        expect(heap.pop()).toBe(topmost)
        expect(topmost).toBeLessThanOrEqual(previous)

        previous = topmost
      }
    })
  })

  /**
   * 
   */
  describe('sort', function () {
    /**
     * 
     */
    it('sort the heap in place', function () {
      const heap: BinaryHeap<number> = new BinaryHeap(comparator)

      BinaryHeap.reduceAll(heap, randomSequence(200))
      BinaryHeap.sort(heap)

      for (let index = 0; index < 199; ++index) {
        expect(heap.elements[index]).toBeGreaterThanOrEqual(heap.elements[index + 1])
      }
    })
  })
})