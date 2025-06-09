<?php

namespace App\Exceptions\Domain\Subject;

use Exception;

class SubjectLinkedException extends Exception
{
    public function __construct()
    {
        parent::__construct('Não é possível excluir o assunto, pois ele está vinculado a um ou mais livros.');
    }
}
