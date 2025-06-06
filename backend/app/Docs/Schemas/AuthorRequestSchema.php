<?php

namespace App\Docs\Schemas;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="AuthorRequest",
 *     type="object",
 *     required={"nome"},
 *     @OA\Property(
 *         property="nome",
 *         type="string",
 *         maxLength=40,
 *         description="Nome do autor (deve ser único)"
 *     )
 * )
 */
class AuthorRequestSchema {}
