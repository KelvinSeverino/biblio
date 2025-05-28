<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Autor;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Autor>
 */
class AutorFactory extends Factory
{
    protected $model = Autor::class;

    public function definition(): array
    {
        return [
            'nome' => $this->faker->name(),
        ];
    }
}
