<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Assunto;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Assunto>
 */
class AssuntoFactory extends Factory
{
    protected $model = Assunto::class;

    public function definition(): array
    {
        return [
            'descricao' => $this->faker->word(),
        ];
    }
}
