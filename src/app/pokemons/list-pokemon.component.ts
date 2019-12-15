import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  public title = 'Pokémons';
  public pokemons: Pokemon[] = null;
  public value = '';

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
    ) {}



  ngOnInit() {
  this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);

  }

  onClick(){
    console.log('Clic');
  }

  onKey(event: KeyboardEvent){
    this.value = 'Bonjour ' + (event.target as HTMLInputElement).value;
  }

  selectPokemon(pokemon: Pokemon) {
  console.log('Vous avez selectionné ' + pokemon.name);
  let link = ['/pokemon', pokemon.id];
  this.router.navigate(link);
  }
}
