<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Autor;
use App\Models\Livro;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AutorTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function pode_criar_um_autor()
    {
        $autor = Autor::factory()->create(['nome' => 'Teste Autor']);
        $this->assertDatabaseHas('autores', ['nome' => 'Teste Autor']);
    }

    /** @test */
    public function nao_deve_criar_autor_sem_nome()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);
        Autor::create([]);
    }

    /** @test */
    public function pode_atualizar_um_autor()
    {
        $autor = Autor::factory()->create();
        $autor->update(['nome' => 'Nome Atualizado']);
        $this->assertEquals('Nome Atualizado', $autor->fresh()->nome);
    }

    /** @test */
    public function pode_excluir_um_autor()
    {
        $autor = Autor::factory()->create();
        $autor->delete();
        $this->assertDatabaseMissing('autores', ['id' => $autor->id]);
    }

    /** @test */
    public function autor_deve_estar_associado_a_um_livro()
    {
        $livro = Livro::factory()->create();
        $autor = Autor::factory()->create();

        $livro->autores()->attach($autor);

        $this->assertTrue($autor->livros->contains($livro));
    }
}
