<?php

namespace App\Docs\Endpoints;

use OpenApi\Annotations as OA;

/**
 * @OA\Tag(
 *     name="Livros",
 *     description="Gerenciamento de livros"
 * )
 */
class BookApiDocs
{
    /**
     * @OA\Get(
     *     path="/api/livros",
     *     tags={"Livros"},
     *     summary="Lista todos os livros",
     *     @OA\Response(response=200, description="Lista de livros")
     * )
     */
    public function list() {}

    /**
     * @OA\Post(
     *     path="/api/livros",
     *     tags={"Livros"},
     *     summary="Cria um novo livro",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/BookRequest")
     *     ),
     *     @OA\Response(response=201, description="Livro criado com sucesso")
     * )
     */
    public function create() {}

    /**
     * @OA\Get(
     *     path="/api/livros/{id}",
     *     tags={"Livros"},
     *     summary="Obtém um livro pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=200, description="Detalhes do livro"),
     *     @OA\Response(response=404, description="Livro não encontrado")
     * )
     */
    public function show() {}

    /**
     * @OA\Put(
     *     path="/api/livros/{id}",
     *     tags={"Livros"},
     *     summary="Atualiza um livro pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/BookRequest")
     *     ),
     *     @OA\Response(response=200, description="Livro atualizado com sucesso"),
     *     @OA\Response(response=404, description="Livro não encontrado")
     * )
     */
    public function update() {}

    /**
     * @OA\Delete(
     *     path="/api/livros/{id}",
     *     tags={"Livros"},
     *     summary="Exclui um livro pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=204, description="Livro excluído com sucesso"),
     *     @OA\Response(response=404, description="Livro não encontrado")
     * )
     */
    public function destroy() {}
}
