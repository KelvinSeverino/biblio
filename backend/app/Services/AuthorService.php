<?php

namespace App\Services;

use App\Repositories\AuthorRepository;

class AuthorService
{
    public function __construct(
        protected AuthorRepository $authorRepository
    ) {}

    public function getAuthors(): array
    {
        return $this->authorRepository->getAll()->toArray();
    }

    public function createAuthor(array $data): array
    {
        return $this->authorRepository->create($data)->toArray();
    }

    public function findAuthor(string $id): array
    {
        return $this->authorRepository->findById($id)->toArray();
    }

    public function updateAuthor(string $id, array $data): array
    {
        return $this->authorRepository->update($id, $data)->toArray();
    }

    public function deleteAuthor(string $id): void
    {
        $this->authorRepository->delete($id);
    }
}
