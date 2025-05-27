<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LivroRequest;
use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function index()
    {
        return Livro::with(['autores', 'assuntos'])->get();
    }

    public function store(LivroRequest $request)
    {
        $data = $request->validated();

        // Remove 'autores' e 'assuntos' do array para criar o livro
        $autores = $data['autores'];
        $assuntos = $data['assuntos'];

        unset($data['autores'], $data['assuntos']);

        $livro = Livro::create($data);

        // Sincroniza relacionamentos
        $livro->autores()->sync($autores);
        $livro->assuntos()->sync($assuntos);

        return response()->json($livro->load(['autores', 'assuntos']), 201);
    }

    public function show($id)
    {
        $livro = Livro::with(['autores', 'assuntos'])->findOrFail($id);
        return $livro;
    }

    public function update(LivroRequest $request, $id)
    {
        $livro = Livro::findOrFail($id);

        $data = $request->validated();

        // Separa autores e assuntos do array principal
        $autores = $data['autores'] ?? [];
        $assuntos = $data['assuntos'] ?? [];

        unset($data['autores'], $data['assuntos']);

        // Atualiza os dados do livro
        $livro->update($data);

        // Sincroniza os relacionamentos many-to-many
        $livro->autores()->sync($autores);
        $livro->assuntos()->sync($assuntos);

        return response()->json($livro->load(['autores', 'assuntos']));
    }

    public function destroy($id)
    {
        $livro = Livro::findOrFail($id);
        $livro->delete();

        return response()->json(null, 204);
    }
}
