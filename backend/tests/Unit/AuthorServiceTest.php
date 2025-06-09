<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Autor;
use App\Services\AuthorService;
use App\Repositories\AuthorRepository;
use PHPUnit\Framework\MockObject\MockObject;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthorServiceTest extends TestCase
{
    private AuthorRepository|MockObject $authorRepository;
    private AuthorService $authorService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->authorRepository = $this->createMock(AuthorRepository::class);
        $this->authorService = new AuthorService($this->authorRepository);
    }

    /** @test */
    public function deve_listar_todos_os_autores()
    {
        $autores = new EloquentCollection([
            Autor::factory()->make(['nome' => 'Autor 1']),
            Autor::factory()->make(['nome' => 'Autor 2']),
        ]);

        $this->authorRepository
            ->method('getAll')
            ->willReturn($autores);

        $result = $this->authorService->getAuthors();

        $this->assertCount(2, $result);
    }

    /** @test */
    public function deve_criar_um_autor()
    {
        $data = ['nome' => 'Novo Autor'];
        $autor = new Autor($data);

        $this->authorRepository
            ->method('create')
            ->with($data)
            ->willReturn($autor);

        $result = $this->authorService->createAuthor($data);

        $this->assertEquals('Novo Autor', $result['nome']);
    }

    /** @test */
    public function deve_encontrar_um_autor_por_id()
    {
        $autor = new Autor(['nome' => 'Autor A']);

        $this->authorRepository
            ->method('findById')
            ->with(1)
            ->willReturn($autor);

        $result = $this->authorService->findAuthor(1);

        $this->assertEquals('Autor A', $result['nome']);
    }

    /** @test */
    public function busca_autor_inexistente_deve_lancar_erro()
    {
        $this->authorRepository
            ->method('findById')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->authorService->findAuthor(999);
    }

    /** @test */
    public function deve_atualizar_um_autor()
    {
        $data = ['nome' => 'Autor Atualizado'];
        $autor = new Autor($data);

        $this->authorRepository
            ->method('update')
            ->with(1, $data)
            ->willReturn($autor);

        $result = $this->authorService->updateAuthor(1, $data);

        $this->assertEquals('Autor Atualizado', $result['nome']);
    }

    /** @test */
    public function atualizacao_com_id_invalido_deve_lancar_erro()
    {
        $this->authorRepository
            ->method('update')
            ->with(999, ['nome' => 'Teste'])
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->authorService->updateAuthor(999, ['nome' => 'Teste']);
    }

    /** @test */
    public function deve_deletar_um_autor()
    {
        $this->authorRepository
            ->expects($this->once())
            ->method('delete')
            ->with(1);

        $this->authorService->deleteAuthor(1);

        $this->assertTrue(true);
    }

    /** @test */
    public function deletar_com_id_invalido_deve_lancar_erro()
    {
        $this->authorRepository
            ->method('delete')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->authorService->deleteAuthor(999);
    }

    /** @test */
    public function nao_deve_deletar_autor_vinculado_e_deve_lancar_excecao()
    {
        $this->authorRepository
            ->method('hasLinkedBooks')
            ->with(1)
            ->willReturn(true);

        $this->expectException(\App\Exceptions\Domain\Author\AuthorLinkedException::class);

        $this->authorService->deleteAuthor(1);
    }
}
