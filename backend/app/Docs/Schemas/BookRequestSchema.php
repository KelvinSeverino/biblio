<?php

namespace App\Docs\Schemas;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="BookRequest",
 *     required={"titulo", "editora", "edicao", "ano_publicacao", "valor", "autores", "assuntos"},
 *     @OA\Property(property="titulo", type="string", maxLength=40),
 *     @OA\Property(property="editora", type="string", maxLength=40),
 *     @OA\Property(property="edicao", type="integer", minimum=1),
 *     @OA\Property(property="ano_publicacao", type="integer", pattern="^\d{4}$"),
 *     @OA\Property(property="valor", type="number", format="float", minimum=0),
 *     @OA\Property(property="autores", type="array", minItems=1, @OA\Items(type="integer")),
 *     @OA\Property(property="assuntos", type="array", minItems=1, @OA\Items(type="integer")),
 * )
 */
class BookRequestSchema {}
