<?php

namespace Database\Seeders;

use App\Models\Livro;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LivroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $livros = [
            [
                'titulo' => '1984',
                'editora' => 'Companhia das Letras',
                'edicao' => 1,
                'ano_publicacao' => '1949',
                'valor' => 49.90,
                'autores' => [1],
                'assuntos' => [1, 4]
            ],
            [
                'titulo' => 'Harry Potter e a Pedra Filosofal',
                'editora' => 'Rocco',
                'edicao' => 1,
                'ano_publicacao' => '1997',
                'valor' => 59.90,
                'autores' => [2],
                'assuntos' => [2]
            ],
            [
                'titulo' => 'Sapiens',
                'editora' => 'Companhia das Letras',
                'edicao' => 1,
                'ano_publicacao' => '2011',
                'valor' => 69.90,
                'autores' => [3],
                'assuntos' => [3, 9]
            ],
            [
                'titulo' => 'O Iluminado',
                'editora' => 'Suma de Letras',
                'edicao' => 2,
                'ano_publicacao' => '1977',
                'valor' => 54.90,
                'autores' => [4],
                'assuntos' => [6, 4]
            ],
            [
                'titulo' => 'O Senhor dos Anéis',
                'editora' => 'Martins Fontes',
                'edicao' => 1,
                'ano_publicacao' => '1954',
                'valor' => 89.90,
                'autores' => [5],
                'assuntos' => [2]
            ],
            [
                'titulo' => 'Assassinato no Expresso Oriente',
                'editora' => 'Globo Livros',
                'edicao' => 3,
                'ano_publicacao' => '1934',
                'valor' => 42.00,
                'autores' => [6],
                'assuntos' => [10, 4]
            ],
            [
                'titulo' => 'O Código Da Vinci',
                'editora' => 'Sextante',
                'edicao' => 1,
                'ano_publicacao' => '2003',
                'valor' => 49.90,
                'autores' => [7],
                'assuntos' => [10, 4]
            ],
            [
                'titulo' => 'A Hora da Estrela',
                'editora' => 'Rocco',
                'edicao' => 1,
                'ano_publicacao' => '1977',
                'valor' => 39.90,
                'autores' => [8],
                'assuntos' => [5, 7]
            ],
            [
                'titulo' => 'Dom Casmurro',
                'editora' => 'Editora Ática',
                'edicao' => 1,
                'ano_publicacao' => '1899',
                'valor' => 29.90,
                'autores' => [9],
                'assuntos' => [5, 7]
            ],
            [
                'titulo' => 'Fundação',
                'editora' => 'Aleph',
                'edicao' => 1,
                'ano_publicacao' => '1951',
                'valor' => 64.90,
                'autores' => [10],
                'assuntos' => [1, 2]
            ],
        ];

        foreach ($livros as $data) {
            $livro = Livro::create([
                'titulo' => $data['titulo'],
                'editora' => $data['editora'],
                'edicao' => $data['edicao'],
                'ano_publicacao' => $data['ano_publicacao'],
                'valor' => $data['valor'],
            ]);

            $livro->autores()->sync($data['autores']);
            $livro->assuntos()->sync($data['assuntos']);
        }
    }
}
