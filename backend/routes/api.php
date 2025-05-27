<?php

use App\Http\Controllers\Api\{
    AssuntoController,
    AutorController,
    LivroController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('livros', LivroController::class);
Route::apiResource('autores', AutorController::class);
Route::apiResource('assuntos', AssuntoController::class);