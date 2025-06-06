<?php

namespace App\Docs;

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="Biblio - API de Livros",
 *     description="Documentação da API de gerenciamento de livros",
 *     @OA\Contact(email="seu.email@example.com")
 * )
 *
 * @OA\Server(
 *     url=L5_SWAGGER_CONST_HOST,
 *     description="Servidor principal"
 * )
 * 
 * @OA\Tag(name="Livros", description="Gerenciamento de livros")
 * @OA\Tag(name="Autores", description="Gerenciamento de autores")
 * @OA\Tag(name="Assuntos", description="Gerenciamento de assuntos")
 * @OA\Tag(name="Relatórios", description="Geração de relatórios")
 */
class ApiInfo {}
