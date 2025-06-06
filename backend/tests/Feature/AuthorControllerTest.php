<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Autor;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthorControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function deve_listar_todos_os_autores()
    {
        Autor::factory()->count(3)->create();

        $response = $this->getJson('/api/autores');

        $response->assertOk()
            ->assertJsonCount(3);
    }

    /** @test */
    public function deve_criar_um_autor()
    {
        $data = ['nome' => 'Autor Novo'];

        $response = $this->postJson('/api/autores', $data);

        $response->assertCreated()
            ->assertJsonFragment(['nome' => 'Autor Novo']);

        $this->assertDatabaseHas('autores', ['nome' => 'Autor Novo']);
    }

    /** @test */
    public function deve_retornar_erro_ao_criar_autor_invalido()
    {
        $response = $this->postJson('/api/autores', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['nome']);
    }

    /** @test */
    public function deve_retornar_um_autor_pelo_id()
    {
        $autor = Autor::factory()->create();

        $response = $this->getJson("/api/autores/{$autor->codau}");

        $response->assertOk()
            ->assertJsonFragment(['codau' => $autor->codau]);
    }

    /** @test */
    public function deve_retornar_404_para_autor_nao_encontrado()
    {
        $response = $this->getJson('/api/autores/99999');

        $response->assertStatus(404);
    }

    /** @test */
    public function deve_atualizar_um_autor()
    {
        $autor = Autor::factory()->create(['nome' => 'Nome Antigo']);

        $data = ['nome' => 'Nome Atualizado'];

        $response = $this->putJson("/api/autores/{$autor->codau}", $data);

        $response->assertOk()
            ->assertJsonFragment(['nome' => 'Nome Atualizado']);

        $this->assertDatabaseHas('autores', ['nome' => 'Nome Atualizado']);
    }

    /** @test */
    public function deve_excluir_um_autor()
    {
        $autor = Autor::factory()->create();

        $response = $this->deleteJson("/api/autores/{$autor->codau}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('autores', ['codau' => $autor->codau]);
    }
}
