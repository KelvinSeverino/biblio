<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubjectRequest;
use App\Services\SubjectService;
use Illuminate\Http\JsonResponse;

class SubjectController extends Controller
{
    public function __construct(
        protected SubjectService $subjectService
    ) {}

    public function index(): JsonResponse
    {
        return response()->json($this->subjectService->getSubjects());
    }

    public function store(SubjectRequest $request): JsonResponse
    {
        return response()->json($this->subjectService->createSubject($request->validated()), 201);
    }

    public function show(string $id): JsonResponse
    {
        return response()->json($this->subjectService->findSubject($id));
    }

    public function update(SubjectRequest $request, string $id): JsonResponse
    {
        return response()->json($this->subjectService->updateSubject($id, $request->validated()));
    }

    public function destroy(string $id): JsonResponse
    {
        $this->subjectService->deleteSubject($id);
        return response()->json(null, 204);
    }
}
