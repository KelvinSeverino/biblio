<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Livro;
use App\Models\Autor;
use App\Models\Assunto;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LivroTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function pode_criar_um_livro()
    {
        $livro = Livro::factory()->create(['titulo' => 'Livro Teste']);
        $this->assertDatabaseHas('livros', ['titulo' => 'Livro Teste']);
    }

    /** @test */
    public function nao_deve_criar_livro_sem_titulo()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);
        Livro::create([
            'editora' => 'Editora Exemplo',
            'edicao' => 1,
            'ano_publicacao' => '2025',
            'valor' => 49.90,
        ]);
    }

    /** @test */
    public function pode_atualizar_um_livro()
    {
        $livro = Livro::factory()->create();
        $livro->update(['titulo' => 'Título Atualizado']);
        $this->assertEquals('Título Atualizado', $livro->fresh()->titulo);
    }

    /** @test */
    public function pode_excluir_um_livro()
    {
        $livro = Livro::factory()->create();
        $livro->delete();
        $this->assertDatabaseMissing('livros', ['id' => $livro->id]);
    }

    /** @test */
    public function livro_pode_ter_autores_e_assuntos()
    {
        $livro = Livro::factory()->create();
        $autor = Autor::factory()->create();
        $assunto = Assunto::factory()->create();

        $livro->autores()->attach($autor);
        $livro->assuntos()->attach($assunto);

        $this->assertTrue($livro->autores->contains($autor));
        $this->assertTrue($livro->assuntos->contains($assunto));
    }
}
