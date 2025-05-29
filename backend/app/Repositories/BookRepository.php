<?php

namespace App\Repositories;

use App\Models\Livro;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BookRepository
{
    public function getAll(): \Illuminate\Database\Eloquent\Collection
    {
        return Livro::with(['autores', 'assuntos'])->get();
    }

    public function create(array $data): Livro
    {
        $authors = $data['autores'];
        $assuntos = $data['assuntos'];

        unset($data['autores'], $data['assuntos']);

        $book = Livro::create($data);
        $book->autores()->sync($authors);
        $book->assuntos()->sync($assuntos);

        return $book->load(['autores', 'assuntos']);
    }

    public function findById(string $id): Livro
    {
        return Livro::with(['autores', 'assuntos'])->findOrFail($id);
    }

    public function update(string $id, array $data): Livro
    {
        $book = Livro::findOrFail($id);
        $authors = $data['autores'] ?? [];
        $assuntos = $data['assuntos'] ?? [];

        unset($data['autores'], $data['assuntos']);

        $book->update($data);
        $book->autores()->sync($authors);
        $book->assuntos()->sync($assuntos);

        return $book->load(['autores', 'assuntos']);
    }

    public function delete(string $id): void
    {
        $book = Livro::findOrFail($id);
        $book->delete();
    }
}
