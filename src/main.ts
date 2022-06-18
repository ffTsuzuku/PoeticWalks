import { readFileSync } from 'fs'
import GraphPoet from './poet/GraphPoet'

const nimoy = new GraphPoet(readFileSync('./poet/mugar-omni-theater.txt'))
const input = 'Test the system.'
console.log(`${input} \n>>>\n ${nimoy.poem(input)}`)
