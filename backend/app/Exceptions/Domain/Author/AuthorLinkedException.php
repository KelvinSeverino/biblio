<?php

namespace App\Exceptions\Domain\Author;

use Exception;

class AuthorLinkedException extends Exception
{
    public function __construct()
    {
        parent::__construct('Não é possível excluir o autor, pois ele está vinculado a um ou mais livros.');
    }
}
