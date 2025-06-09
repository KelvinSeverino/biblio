<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Autor;
use App\Models\Livro;
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
        $response = $this->getJson('/api/autores/999');

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
    public function deve_retornar_erro_ao_atualizar_autor_com_nome_faltando()
    {
        $autor = Autor::factory()->create();

        $response = $this->putJson("/api/autores/{$autor->codau}", []);

        $response->assertStatus(422)
                ->assertJsonValidationErrors(['nome']);
    }

    /** @test */
    public function deve_retornar_404_ao_atualizar_autor_inexistente()
    {
        $data = ['nome' => 'Nome Atualizado'];

        $response = $this->putJson('/api/autores/999', $data);

        $response->assertStatus(404);
    }

    /** @test */
    public function deve_excluir_um_autor()
    {
        $autor = Autor::factory()->create();

        $response = $this->deleteJson("/api/autores/{$autor->codau}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('autores', ['codau' => $autor->codau]);
    }

    /** @test */
    public function deve_retornar_404_ao_deletar_autor_inexistente()
    {
        $response = $this->deleteJson('/api/autores/999');

        $response->assertStatus(404);
    }

    /** @test */
    public function nao_deve_excluir_autor_vinculado_a_livros()
    {
        $autor = Autor::factory()->create();
        $livro = Livro::factory()->create();

        // Relaciona o autor ao livro na tabela pivot
        $livro->autores()->attach($autor->codau);

        $response = $this->deleteJson("/api/autores/{$autor->codau}");

        $response->assertStatus(400)
                ->assertJsonFragment([
                    'message' => 'Não é possível excluir o autor, pois ele está vinculado a um ou mais livros.'
                ]);

        $this->assertDatabaseHas('autores', ['codau' => $autor->codau]);
    }
}
