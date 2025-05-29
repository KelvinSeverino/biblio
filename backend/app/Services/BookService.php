<?php

namespace App\Services;

use App\Repositories\BookRepository;

class BookService
{
    public function __construct(
        protected BookRepository $bookRepository
    ) {}

    public function getBooks(): array
    {
        return $this->bookRepository->getAll()->toArray();
    }

    public function createBook(array $data): array
    {
        return $this->bookRepository->create($data)->toArray();
    }

    public function findBook(string $id): array
    {
        return $this->bookRepository->findById($id)->toArray();
    }

    public function updateBook(string $id, array $data): array
    {
        return $this->bookRepository->update($id, $data)->toArray();
    }

    public function deleteBook(string $id): void
    {
        $this->bookRepository->delete($id);
    }
}
