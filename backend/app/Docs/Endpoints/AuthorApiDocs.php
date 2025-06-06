<?php

namespace App\Docs\Endpoints;

use OpenApi\Annotations as OA;

/**
 * @OA\Tag(
 *     name="Autores",
 *     description="Gerenciamento de autores"
 * )
 */
class AuthorApiDocs
{
    /**
     * @OA\Get(
     *     path="/api/autores",
     *     tags={"Autores"},
     *     summary="Lista todos os autores",
     *     @OA\Response(response=200, description="Lista de autores")
     * )
     */
    public function list() {}

    /**
     * @OA\Post(
     *     path="/api/autores",
     *     tags={"Autores"},
     *     summary="Cria um novo autor",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/AuthorRequest")
     *     ),
     *     @OA\Response(response=201, description="Autor criado com sucesso")
     * )
     */
    public function create() {}

    /**
     * @OA\Get(
     *     path="/api/autores/{id}",
     *     tags={"Autores"},
     *     summary="Obtém um autor pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=200, description="Detalhes do autor"),
     *     @OA\Response(response=404, description="Autor não encontrado")
     * )
     */
    public function show() {}

    /**
     * @OA\Put(
     *     path="/api/autores/{id}",
     *     tags={"Autores"},
     *     summary="Atualiza um autor pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/AuthorRequest")
     *     ),
     *     @OA\Response(response=200, description="Autor atualizado com sucesso"),
     *     @OA\Response(response=404, description="Autor não encontrado")
     * )
     */
    public function update() {}

    /**
     * @OA\Delete(
     *     path="/api/autores/{id}",
     *     tags={"Autores"},
     *     summary="Exclui um autor pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=204, description="Autor excluído com sucesso"),
     *     @OA\Response(response=404, description="Autor não encontrado")
     * )
     */
    public function destroy() {}
}
