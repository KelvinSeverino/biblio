<?php

namespace Database\Seeders;

use App\Models\Assunto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssuntoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Assunto::insert([
            ['descricao' => 'Ficção Científica'],
            ['descricao' => 'Fantasia'],
            ['descricao' => 'História'],
            ['descricao' => 'Suspense'],
            ['descricao' => 'Romance'],
            ['descricao' => 'Terror'],
            ['descricao' => 'Lit. Brasileira'],
            ['descricao' => 'Autoajuda'],
            ['descricao' => 'Biografia'],
            ['descricao' => 'Policial'],
        ]);
    }
}
