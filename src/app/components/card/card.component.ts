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
  pokemon: PokemonData;
  defaultPokemon: PokemonData;

  constructor(
    private service: PokemonService
  ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    };

    this.defaultPokemon = { ...this.pokemon }; // Inicializa com um valor padrão
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    if (searchName.trim() === '') {
      // Se o campo de busca estiver vazio, restaura o Pokémon padrão
      this.pokemon = { ...this.defaultPokemon };
    } else {
      this.service.getPokemon(searchName).subscribe({
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          };
          this.defaultPokemon = { ...this.pokemon }; // Atualiza o Pokémon padrão
        },
        error: (err) => console.log('not found')
      });
    }
  }
}