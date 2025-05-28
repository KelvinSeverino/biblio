<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Livro;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Livro>
 */
class LivroFactory extends Factory
{
    protected $model = Livro::class;
    
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->sentence(3),
            'editora' => $this->faker->company(),
            'edicao' => $this->faker->numberBetween(1, 5),
            'ano_publicacao' => $this->faker->year(),
            'valor' => $this->faker->randomFloat(2, 20, 100),
        ];
    }
}
