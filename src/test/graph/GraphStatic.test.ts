import { describe, expect, test } from 'vitest'

import Graph from '../../graph/Graph'
/**
 * Tests for static methods of Graph.
 *
 * To facilitate testing multiple implementations of Graph, instance methods are
 * tested in GraphInstanceTest.
 */
describe('Static Graph Test', () => {
    test('Test empty method gives empty graph', () => {
        expect(Graph.empty().verticies().size).toBe(0)
    })
})
