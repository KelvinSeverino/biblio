<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Livro;
use App\Services\BookService;
use App\Repositories\BookRepository;
use PHPUnit\Framework\MockObject\MockObject;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BookServiceTest extends TestCase
{
    private BookRepository|MockObject $bookRepository;
    private BookService $bookService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->bookRepository = $this->createMock(BookRepository::class);
        $this->bookService = new BookService($this->bookRepository);
    }

    /** @test */
    public function deve_listar_todos_os_livros()
    {
        $livros = new EloquentCollection([
            Livro::factory()->make(['titulo' => 'Livro 1']),
            Livro::factory()->make(['titulo' => 'Livro 2']),
        ]);

        $this->bookRepository
            ->method('getAll')
            ->willReturn($livros);

        $result = $this->bookService->getBooks();

        $this->assertCount(2, $result);
    }

    /** @test */
    public function deve_criar_um_livro()
    {
        $data = ['titulo' => 'Novo Livro'];
        $livro = new Livro($data);

        $this->bookRepository
            ->method('create')
            ->with($data)
            ->willReturn($livro);

        $result = $this->bookService->createBook($data);

        $this->assertEquals('Novo Livro', $result['titulo']);
    }

    /** @test */
    public function deve_encontrar_um_livro_por_id()
    {
        $livro = new Livro(['titulo' => 'Livro A']);

        $this->bookRepository
            ->method('findById')
            ->with(1)
            ->willReturn($livro);

        $result = $this->bookService->findBook(1);

        $this->assertEquals('Livro A', $result['titulo']);
    }    

    /** @test */
    public function busca_livro_inexistente_deve_lancar_erro()
    {
        $this->bookRepository
            ->method('findById')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->bookService->findBook(999);
    }

    /** @test */
    public function deve_atualizar_um_livro()
    {
        $data = ['titulo' => 'Livro Atualizado'];
        $livro = new \App\Models\Livro($data);

        $this->bookRepository
            ->method('update')
            ->with(1, $data)
            ->willReturn($livro);

        $result = $this->bookService->updateBook(1, $data);

        $this->assertEquals('Livro Atualizado', $result['titulo']);
    }

    /** @test */
    public function atualizacao_com_id_invalido_deve_lancar_erro()
    {
        $this->bookRepository
            ->method('update')
            ->with(999, ['titulo' => 'Teste'])
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->bookService->updateBook(999, ['titulo' => 'Teste']);
    }

    /** @test */
    public function deve_deletar_um_livro()
    {
        $this->bookRepository
            ->expects($this->once())
            ->method('delete')
            ->with(1);

        $this->bookService->deleteBook(1);

        $this->assertTrue(true); // Se não lançar exceção, passou
    }

    /** @test */
    public function deletar_com_id_invalido_deve_lancar_erro()
    {
        $this->bookRepository
            ->method('delete')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->bookService->deleteBook(999);
    }
}
