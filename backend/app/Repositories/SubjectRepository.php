<?php

namespace App\Repositories;

use App\Models\Assunto;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SubjectRepository
{
    public function getAll(): \Illuminate\Database\Eloquent\Collection
    {
        return Assunto::all();
    }

    public function create(array $data): Assunto
    {
        return Assunto::create($data);
    }

    public function findById(string $id): Assunto
    {
        return Assunto::findOrFail($id);
    }

    public function update(string $id, array $data): Assunto
    {
        $subject = Assunto::findOrFail($id);
        $subject->update($data);

        return $subject;
    }

    public function delete(string $id): void
    {
        $subject = Assunto::findOrFail($id);
        $subject->delete();
    }

    public function hasLinkedBooks(string $id): bool
    {
        $subject = $this->findById($id);

        return $subject->livros()->exists();
    }
}
