<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssuntoRequest;
use App\Models\Assunto;
use Illuminate\Http\Request;

class AssuntoController extends Controller
{
    public function index()
    {
        return Assunto::all();
    }

    public function store(AssuntoRequest $request)
    {
        $data = $request->validated();

        $assunto = Assunto::create($data);

        return response()->json($assunto, 201);
    }

    public function show($id)
    {
        return Assunto::findOrFail($id);
    }

    public function update(AssuntoRequest  $request, $id)
    {
        $assunto = Assunto::findOrFail($id);

        $assunto->update($request->validated());

        return response()->json($assunto);
    }

    public function destroy($id)
    {
        $assunto = Assunto::findOrFail($id);
        $assunto->delete();
        return response()->json(null, 204);
    }
}
