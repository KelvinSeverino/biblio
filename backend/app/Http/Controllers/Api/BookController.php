<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Services\BookService;
use Illuminate\Http\JsonResponse;

class BookController extends Controller
{
    public function __construct(
        protected BookService $bookService
    ) {}

    public function index(): JsonResponse
    {
        return response()->json($this->bookService->getBooks());
    }

    public function store(BookRequest $request): JsonResponse
    {
        return response()->json($this->bookService->createBook($request->validated()), 201);
    }

    public function show(string $id): JsonResponse
    {
        return response()->json($this->bookService->findBook($id));
    }

    public function update(BookRequest $request, string $id): JsonResponse
    {
        return response()->json($this->bookService->updateBook($id, $request->validated()));
    }

    public function destroy(string $id): JsonResponse
    {
        $this->bookService->deleteBook($id);
        return response()->json(null, 204);
    }
}
