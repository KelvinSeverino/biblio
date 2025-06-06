<?php

namespace App\Docs\Schemas;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="SubjectRequest",
 *     type="object",
 *     required={"descricao"},
 *     @OA\Property(
 *         property="descricao",
 *         type="string",
 *         maxLength=40,
 *         description="Descrição do assunto (deve ser única)"
 *     )
 * )
 */
class SubjectRequestSchema {}
