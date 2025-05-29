<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ReportService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ReportController extends Controller
{
    protected $reportService;

    public function __construct(ReportService $reportService)
    {
        $this->reportService = $reportService;
    }

    public function index(): JsonResponse
    {
        return response()->json($this->reportService->getReportData());
    }

    public function pdf(): Response
    {
        return $this->reportService->generatePDF();
    }

    public function csv(): StreamedResponse
    {
        return $this->reportService->generateCsv();
    }
}
