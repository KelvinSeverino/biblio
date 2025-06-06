<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Livro;
use App\Models\Autor;
use App\Models\Assunto;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function deve_listar_todos_os_livros()
    {
        Livro::factory()->count(2)->create();

        $response = $this->getJson('/api/livros');

        $response->assertOk()
            ->assertJsonCount(2);
    }

    /** @test */
    public function deve_criar_um_livro_com_autores_e_assuntos()
    {
        $autor = Autor::factory()->create();
        $assunto = Assunto::factory()->create();

        $data = [
            'titulo' => 'Novo Livro',
            'editora' => 'Editora X',
            'edicao' => 1,
            'ano_publicacao' => 2025,
            'valor' => 59.90,
            'autores' => [$autor->codau],
            'assuntos' => [$assunto->codas],
        ];

        $response = $this->postJson('/api/livros', $data);

        $response->assertCreated()
                 ->assertJsonFragment(['titulo' => 'Novo Livro']);

        $this->assertDatabaseHas('livros', ['titulo' => 'Novo Livro']);
    }

    /** @test */
    public function deve_retornar_erro_ao_criar_livro_invalido()
    {
        $response = $this->postJson('/api/livros', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['titulo', 'editora', 'edicao', 'ano_publicacao', 'valor', 'autores', 'assuntos']);
    }

    /** @test */
    public function deve_retornar_um_livro_pelo_id()
    {
        $livro = Livro::factory()->create();

        $response = $this->getJson("/api/livros/{$livro->codl}");

        $response->assertOk()
                 ->assertJsonFragment(['codl' => $livro->codl]);
    }

    /** @test */
    public function deve_retornar_404_para_livro_nao_encontrado()
    {
        $response = $this->getJson('/api/livros/999');

        $response->assertStatus(404);
    }

    /** @test */
    public function deve_atualizar_um_livro()
    {
        $livro = Livro::factory()->create();
        $autor = Autor::factory()->create();
        $assunto = Assunto::factory()->create();

        $data = [
            'titulo' => 'Livro Atualizado',
            'editora' => 'Nova Editora',
            'edicao' => 2,
            'ano_publicacao' => 2026,
            'valor' => 89.99,
            'autores' => [$autor->codau],
            'assuntos' => [$assunto->codas],
        ];

        $response = $this->putJson("/api/livros/{$livro->codl}", $data);

        $response->assertOk()
                 ->assertJsonFragment(['titulo' => 'Livro Atualizado']);
    }

    /** @test */
    public function deve_excluir_um_livro()
    {
        $livro = Livro::factory()->create();

        $response = $this->deleteJson("/api/livros/{$livro->codl}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('livros', ['id' => $livro->codl]);
    }
}
