import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon:PokemonData 

  attributesTypes: string[] = ['FIRE', 'ROCK']
  
  constructor(
    private service:PokemonService
  ){
    this.pokemon = {
      id:0, name:'',
      sprites:{
        front_default: ''
      },types:[]
    }
  }
  
  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe({
      next: (res) => {console.log(res)

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error: (err) => console.log(err)
    })
  }

}
