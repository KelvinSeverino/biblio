<?php

use App\Http\Controllers\Api\{
    AssuntoController,
    AuthorController,
    BookController,
    ReportController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('livros', BookController::class);
Route::apiResource('autores', AuthorController::class);
Route::apiResource('assuntos', AssuntoController::class);

Route::prefix('relatorios')->group(function () {
    Route::get('/', [ReportController::class, 'index']);
    Route::get('/pdf', [ReportController::class, 'pdf']);
    Route::get('/csv', [ReportController::class, 'csv']);
});