<?php

namespace Database\Seeders;

use App\Models\Autor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AutorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Autor::insert([
            ['nome' => 'George Orwell'],
            ['nome' => 'J. K. Rowling'],
            ['nome' => 'Yuval Noah Harari'],
            ['nome' => 'Stephen King'],
            ['nome' => 'J. R. R. Tolkien'],
            ['nome' => 'Agatha Christie'],
            ['nome' => 'Dan Brown'],
            ['nome' => 'Clarice Lispector'],
            ['nome' => 'Machado de Assis'],
            ['nome' => 'Isaac Asimov'],
        ]);
    }
}
