<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AutorRequest;
use App\Models\Autor;
use Illuminate\Http\Request;

class AutorController extends Controller
{
    public function index()
    {
        return Autor::all();
    }

    public function store(AutorRequest $request)
    {
        $data = $request->validated();

        $autor = Autor::create($data);

        return response()->json($autor, 201);
    }

    public function show($id)
    {
        return Autor::findOrFail($id);
    }

    public function update(AutorRequest $request, $id)
    {
        $autor = Autor::findOrFail($id);

        $autor->update($request->validated());

        return response()->json($autor);
    }

    public function destroy($id)
    {
        $autor = Autor::findOrFail($id);
        $autor->delete();
        return response()->json(null, 204);
    }
}
