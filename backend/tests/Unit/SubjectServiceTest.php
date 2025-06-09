<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Assunto;
use App\Services\SubjectService;
use App\Repositories\SubjectRepository;
use PHPUnit\Framework\MockObject\MockObject;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SubjectServiceTest extends TestCase
{
    private SubjectRepository|MockObject $subjectRepository;
    private SubjectService $subjectService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->subjectRepository = $this->createMock(SubjectRepository::class);
        $this->subjectService = new SubjectService($this->subjectRepository);
    }

    /** @test */
    public function deve_listar_todos_os_assuntos()
    {
        $assuntos = new EloquentCollection([
            Assunto::factory()->make(['descricao' => 'Assunto 1']),
            Assunto::factory()->make(['descricao' => 'Assunto 2']),
        ]);

        $this->subjectRepository
            ->method('getAll')
            ->willReturn($assuntos);

        $result = $this->subjectService->getSubjects();

        $this->assertCount(2, $result);
    }

    /** @test */
    public function deve_criar_um_assunto()
    {
        $data = ['descricao' => 'Novo Assunto'];
        $assunto = new Assunto($data);

        $this->subjectRepository
            ->method('create')
            ->with($data)
            ->willReturn($assunto);

        $result = $this->subjectService->createSubject($data);

        $this->assertEquals('Novo Assunto', $result['descricao']);
    }

    /** @test */
    public function deve_encontrar_um_assunto_por_id()
    {
        $assunto = new Assunto(['descricao' => 'Assunto A']);

        $this->subjectRepository
            ->method('findById')
            ->with(1)
            ->willReturn($assunto);

        $result = $this->subjectService->findSubject(1);

        $this->assertEquals('Assunto A', $result['descricao']);
    }

    /** @test */
    public function busca_assunto_inexistente_deve_lancar_erro()
    {
        $this->subjectRepository
            ->method('findById')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->subjectService->findSubject(999);
    }

    /** @test */
    public function deve_atualizar_um_assunto()
    {
        $data = ['descricao' => 'Assunto Atualizado'];
        $assunto = new Assunto($data);

        $this->subjectRepository
            ->method('update')
            ->with(1, $data)
            ->willReturn($assunto);

        $result = $this->subjectService->updateSubject(1, $data);

        $this->assertEquals('Assunto Atualizado', $result['descricao']);
    }

    /** @test */
    public function atualizacao_com_id_invalido_deve_lancar_erro()
    {
        $this->subjectRepository
            ->method('update')
            ->with(999, ['descricao' => 'Teste'])
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->subjectService->updateSubject(999, ['descricao' => 'Teste']);
    }

    /** @test */
    public function deve_deletar_um_assunto()
    {
        $this->subjectRepository
            ->expects($this->once())
            ->method('delete')
            ->with(1);

        $this->subjectService->deleteSubject(1);

        $this->assertTrue(true);
    }

    /** @test */
    public function deletar_com_id_invalido_deve_lancar_erro()
    {
        $this->subjectRepository
            ->method('delete')
            ->with(999)
            ->willThrowException(new ModelNotFoundException());

        $this->expectException(ModelNotFoundException::class);

        $this->subjectService->deleteSubject(999);
    }

    /** @test */
    public function nao_deve_deletar_assunto_vinculado_e_deve_lancar_excecao()
    {
        $this->subjectRepository
            ->method('hasLinkedBooks')
            ->with(1)
            ->willReturn(true);

        $this->expectException(\App\Exceptions\Domain\Subject\SubjectLinkedException::class);

        $this->subjectService->deleteSubject(1);
    }
}
