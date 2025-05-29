<?php

namespace App\Services;

use App\Repositories\ReportRepository;
use App\Utils\PdfGenerator;
use App\Utils\CsvGenerator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Http\Response;

class ReportService
{
    public function __construct(
        protected ReportRepository $reportRepository,
        protected PdfGenerator $pdfGenerator,
        protected CsvGenerator $csvGenerator
    ) {}

    public function getReportData()
    {
        return $this->reportRepository->getAll();
    }

    public function generatePDF(): Response
    {
        return $this->pdfGenerator->createPDF('reports.livros_por_autor', $this->getReportData(), 'relatorio-livros-por-autor.pdf');
    }

    public function generateCSV(): StreamedResponse
    {
        return $this->csvGenerator->createCSV($this->getReportData(), 'relatorio-livros-por-autor.csv');
    }
}
