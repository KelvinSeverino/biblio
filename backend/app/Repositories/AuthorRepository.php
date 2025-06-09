<?php

namespace App\Repositories;

use App\Models\Autor;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthorRepository
{
    public function getAll(): \Illuminate\Database\Eloquent\Collection
    {
        return Autor::all();
    }

    public function create(array $data): Autor
    {
        return Autor::create($data);
    }

    public function findById(string $id): Autor
    {
        return Autor::findOrFail($id);
    }

    public function update(string $id, array $data): Autor
    {
        $author = Autor::findOrFail($id);
        $author->update($data);

        return $author;
    }

    public function delete(string $id): void
    {
        $author = Autor::findOrFail($id);
        $author->delete();
    }

    public function hasLinkedBooks(string $id): bool
    {
        $author = $this->findById($id);

        return $author->livros()->exists();
    }
}
