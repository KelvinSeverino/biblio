<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthorRequest;
use App\Services\AuthorService;
use Illuminate\Http\JsonResponse;

class AuthorController extends Controller
{
    public function __construct(
        protected AuthorService $authorService
    ) {}

    public function index(): JsonResponse
    {
        return response()->json($this->authorService->getAuthors());
    }

    public function store(AuthorRequest $request): JsonResponse
    {
        return response()->json($this->authorService->createAuthor($request->validated()), 201);
    }

    public function show(string $id): JsonResponse
    {
        return response()->json($this->authorService->findAuthor($id));
    }

    public function update(AuthorRequest $request, string $id): JsonResponse
    {
        return response()->json($this->authorService->updateAuthor($id, $request->validated()));
    }

    public function destroy(string $id): JsonResponse
    {
        $this->authorService->deleteAuthor($id);
        return response()->json(null, 204);
    }
}
