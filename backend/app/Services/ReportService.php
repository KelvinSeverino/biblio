<?php

namespace App\Services;

use App\Models\LivroPorAutor;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportService
{
    public function getData()
    {
        return LivroPorAutor::all();
    }

    public function generatePDF()
    {
        $data = $this->getData();
        $pdf = PDF::loadView('reports.livros_por_autor', compact('data'));
        return $pdf->download('relatorio-livros-por-autor.pdf');
    }

    public function generateCsv()
    {
        $filePath = storage_path('app/public/relatorio-livros-por-autor.csv');
        $file = fopen($filePath, 'w');

        // Cabeçalhos do CSV
        fputcsv($file, [
            'ID Sequencial',
            'Autor ID',
            'Autor Nome',
            'Livro ID',
            'Título',
            'Editora',
            'Edição',
            'Ano de Publicação',
            'Assunto'
        ]);

        // Obtendo os dados do banco
        $data = LivroPorAutor::all();

        foreach ($data as $item) {
            fputcsv($file, [
                $item->id_seq,
                $item->autor_id,
                $item->autor_nome,
                $item->livro_id,
                $item->titulo,
                $item->editora,
                $item->edicao,
                $item->ano_publicacao,
                $item->assunto
            ]);
        }

        fclose($file);

        return response()->streamDownload(function () use ($filePath) {
            readfile($filePath);
        }, 'relatorio-livros-por-autor.csv', [
            'Content-Type' => 'text/csv',
        ]);
    }
}
