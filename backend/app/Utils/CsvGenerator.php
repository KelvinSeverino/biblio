<?php

namespace App\Utils;

use Symfony\Component\HttpFoundation\StreamedResponse;

class CsvGenerator
{
    private const CSV_HEADERS = [
        'ID Sequencial', 'Autores', 'Livro ID', 'Título',
        'Editora', 'Edição', 'Ano de Publicação', 'Assuntos'
    ];

    public function createCSV(iterable $data, string $filename): StreamedResponse
    {
        return response()->streamDownload(function () use ($data) {
            $file = fopen('php://output', 'w');
            fputcsv($file, self::CSV_HEADERS);

            foreach ($data as $item) {
                fputcsv($file, [
                    $item['id_seq'], $item['autores'],
                    $item['livro_id'], $item['titulo'], $item['editora'],
                    $item['edicao'], $item['ano_publicacao'], $item['assuntos']
                ]);
            }

            fclose($file);
        }, $filename, [
            'Content-Type' => 'text/csv',
        ]);
    }
}
