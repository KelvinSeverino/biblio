<?php

namespace App\Utils;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Response;

class PdfGenerator
{
    public function createPDF(string $view, iterable $data, string $filename): Response
    {
        $pdf = Pdf::loadView($view, compact('data'));
        return response($pdf->download($filename));
    }
}
