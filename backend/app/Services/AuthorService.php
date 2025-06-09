<?php

namespace App\Services;

use App\Exceptions\Domain\Author\AuthorLinkedException;
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
        if ($this->authorRepository->hasLinkedBooks($id)) {
            throw new AuthorLinkedException();
        }
        
        $this->authorRepository->delete($id);
    }
}
