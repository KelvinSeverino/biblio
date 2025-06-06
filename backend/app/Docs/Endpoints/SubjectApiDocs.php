<?php

namespace App\Docs\Endpoints;

use OpenApi\Annotations as OA;

/**
 * @OA\Tag(
 *     name="Assuntos",
 *     description="Gerenciamento de assuntos"
 * )
 */
class SubjectApiDocs
{
    /**
     * @OA\Get(
     *     path="/api/assuntos",
     *     tags={"Assuntos"},
     *     summary="Lista todos os assuntos",
     *     @OA\Response(response=200, description="Lista de assuntos")
     * )
     */
    public function list() {}

    /**
     * @OA\Post(
     *     path="/api/assuntos",
     *     tags={"Assuntos"},
     *     summary="Cria um novo assunto",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/SubjectRequest")
     *     ),
     *     @OA\Response(response=201, description="Assunto criado com sucesso")
     * )
     */
    public function create() {}

    /**
     * @OA\Get(
     *     path="/api/assuntos/{id}",
     *     tags={"Assuntos"},
     *     summary="Obtém um assunto pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=200, description="Detalhes do assunto"),
     *     @OA\Response(response=404, description="Assunto não encontrado")
     * )
     */
    public function show() {}

    /**
     * @OA\Put(
     *     path="/api/assuntos/{id}",
     *     tags={"Assuntos"},
     *     summary="Atualiza um assunto pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/SubjectRequest")
     *     ),
     *     @OA\Response(response=200, description="Assunto atualizado com sucesso"),
     *     @OA\Response(response=404, description="Assunto não encontrado")
     * )
     */
    public function update() {}

    /**
     * @OA\Delete(
     *     path="/api/assuntos/{id}",
     *     tags={"Assuntos"},
     *     summary="Exclui um assunto pelo ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=204, description="Assunto excluído com sucesso"),
     *     @OA\Response(response=404, description="Assunto não encontrado")
     * )
     */
    public function destroy() {}
}
