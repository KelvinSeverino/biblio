<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Assunto;
use App\Models\Livro;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AssuntoTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function pode_criar_um_assunto()
    {
        $assunto = Assunto::factory()->create(['descricao' => 'Ficção Científica']);
        $this->assertDatabaseHas('assuntos', ['descricao' => 'Ficção Científica']);
    }

    /** @test */
    public function nao_deve_criar_assunto_sem_descricao()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);
        Assunto::create([]);
    }

    /** @test */
    public function pode_atualizar_um_assunto()
    {
        $assunto = Assunto::factory()->create();
        $assunto->update(['descricao' => 'Descrição Atualizada']);
        $this->assertEquals('Descrição Atualizada', $assunto->fresh()->descricao);
    }

    /** @test */
    public function pode_excluir_um_assunto()
    {
        $assunto = Assunto::factory()->create();
        $assunto->delete();
        $this->assertDatabaseMissing('assuntos', ['id' => $assunto->id]);
    }

    /** @test */
    public function assunto_deve_estar_associado_a_um_livro()
    {
        $livro = Livro::factory()->create();
        $assunto = Assunto::factory()->create();

        $livro->assuntos()->attach($assunto);

        $this->assertTrue($assunto->livros->contains($livro));
    }
}
