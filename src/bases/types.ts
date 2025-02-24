import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'
export class Pokemon {
    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`
    }
    constructor(
        public readonly id: number, 
        public name: string,
    ) {}
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    
    }
    speak(){
        console.log(`${this.name}, ${this.name}`)
    }
    async getMoves(){
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.com/api/v2/pokemon/4')
        console.log(data.moves)
        return data.moves
    }

}
export const charmander = new Pokemon(4, 'Charmander');

// charmander.scream()
// charmander.speak()
charmander.getMoves();
