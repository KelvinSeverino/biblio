<?php

namespace App\Repositories;

use App\Models\LivroPorAutor;
use Illuminate\Database\Eloquent\Collection;

class ReportRepository
{
    public function getAll(): Collection
    {
        return LivroPorAutor::all();
    }
}
