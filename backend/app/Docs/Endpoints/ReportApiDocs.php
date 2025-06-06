<?php

namespace App\Docs\Endpoints;

use OpenApi\Annotations as OA;

/**
 * @OA\Tag(
 *     name="Relatórios",
 *     description="Geração de relatórios em diferentes formatos"
 * )
 */
class ReportApiDocs
{
    /**
     * @OA\Get(
     *     path="/api/relatorios",
     *     tags={"Relatórios"},
     *     summary="Lista dados do relatório",
     *     @OA\Response(response=200, description="Dados do relatório em JSON")
     * )
     */
    public function index() {}

    /**
     * @OA\Get(
     *     path="/api/relatorios/pdf",
     *     tags={"Relatórios"},
     *     summary="Gera um relatório em PDF",
     *     @OA\Response(
     *         response=200,
     *         description="Arquivo PDF gerado",
     *         @OA\MediaType(
     *             mediaType="application/pdf",
     *             @OA\Schema(
     *                 type="string",
     *                 format="binary"
     *             )
     *         )
     *     )
     * )
     */
    public function pdf() {}

    /**
     * @OA\Get(
     *     path="/api/relatorios/csv",
     *     tags={"Relatórios"},
     *     summary="Gera um relatório em CSV",
     *     @OA\Response(
     *         response=200,
     *         description="Arquivo CSV gerado",
     *         @OA\MediaType(
     *             mediaType="text/csv",
     *             @OA\Schema(
     *                 type="string",
     *                 format="binary"
     *             )
     *         )
     *     )
     * )
     */
    public function csv() {}
}
