<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ReportService;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    protected $reportService;

    public function __construct(ReportService $reportService)
    {
        $this->reportService = $reportService;
    }

    public function index()
    {
        return response()->json($this->reportService->getData());
    }

    public function pdf()
    {
        return $this->reportService->generatePDF();
    }

    public function csv()
    {
        return $this->reportService->generateCsv();
    }
}
