<?php

namespace App\Services;

use App\Repositories\SubjectRepository;

class SubjectService
{
    public function __construct(
        protected SubjectRepository $subjectRepository
    ) {}

    public function getSubjects(): array
    {
        return $this->subjectRepository->getAll()->toArray();
    }

    public function createSubject(array $data): array
    {
        return $this->subjectRepository->create($data)->toArray();
    }

    public function findSubject(string $id): array
    {
        return $this->subjectRepository->findById($id)->toArray();
    }

    public function updateSubject(string $id, array $data): array
    {
        return $this->subjectRepository->update($id, $data)->toArray();
    }

    public function deleteSubject(string $id): void
    {
        $this->subjectRepository->delete($id);
    }
}
