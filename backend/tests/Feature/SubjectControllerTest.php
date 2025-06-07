<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Assunto;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SubjectControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function deve_listar_todos_os_assuntos()
    {
        Assunto::factory()->count(3)->create();

        $response = $this->getJson('/api/assuntos');

        $response->assertOk()
            ->assertJsonCount(3);
    }

    /** @test */
    public function deve_criar_um_assunto()
    {
        $data = ['descricao' => 'Assunto Novo'];

        $response = $this->postJson('/api/assuntos', $data);

        $response->assertCreated()
            ->assertJsonFragment(['descricao' => 'Assunto Novo']);

        $this->assertDatabaseHas('assuntos', ['descricao' => 'Assunto Novo']);
    }

    /** @test */
    public function deve_retornar_erro_ao_criar_assunto_invalido()
    {
        $response = $this->postJson('/api/assuntos', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['descricao']);
    }

    /** @test */
    public function deve_retornar_um_assunto_pelo_id()
    {
        $assunto = Assunto::factory()->create();

        $response = $this->getJson("/api/assuntos/{$assunto->codas}");

        $response->assertOk()
            ->assertJsonFragment(['codas' => $assunto->codas]);
    }

    /** @test */
    public function deve_retornar_404_para_assunto_nao_encontrado()
    {
        $response = $this->getJson('/api/assuntos/999');

        $response->assertStatus(404);
    }

    /** @test */
    public function deve_atualizar_um_assunto()
    {
        $assunto = Assunto::factory()->create(['descricao' => 'Descricao Antiga']);

        $data = ['descricao' => 'Descricao Atualizada'];

        $response = $this->putJson("/api/assuntos/{$assunto->codas}", $data);

        $response->assertOk()
            ->assertJsonFragment(['descricao' => 'Descricao Atualizada']);

        $this->assertDatabaseHas('assuntos', ['descricao' => 'Descricao Atualizada']);
    }    

    /** @test */
    public function deve_retornar_erro_ao_atualizar_assunto_com_descricao_faltando()
    {
        $assunto = Assunto::factory()->create();

        $response = $this->putJson("/api/assuntos/{$assunto->codas}", []);

        $response->assertStatus(422)
                ->assertJsonValidationErrors(['descricao']);
    }    

    /** @test */
    public function deve_retornar_404_ao_atualizar_assunto_inexistente()
    {
        $data = ['descricao' => 'Descricao Atualizada'];

        $response = $this->putJson('/api/assuntos/999', $data);

        $response->assertStatus(404);
    }

    /** @test */
    public function deve_excluir_um_assunto()
    {
        $assunto = Assunto::factory()->create();

        $response = $this->deleteJson("/api/assuntos/{$assunto->codas}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('assuntos', ['codas' => $assunto->codas]);
    }    

    /** @test */
    public function deve_retornar_404_ao_deletar_assunto_inexistente()
    {
        $response = $this->deleteJson('/api/assuntos/999');

        $response->assertStatus(404);
    }
}
