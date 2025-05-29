<?php

namespace App\Utils;

use Symfony\Component\HttpFoundation\StreamedResponse;

class CsvGenerator
{
    private const CSV_HEADERS = [
        'ID Sequencial', 'Autor ID', 'Autor Nome', 'Livro ID', 'Título',
        'Editora', 'Edição', 'Ano de Publicação', 'Assunto'
    ];

    public function createCSV(iterable $data, string $filename): StreamedResponse
    {
        return response()->streamDownload(function () use ($data) {
            $file = fopen('php://output', 'w');
            fputcsv($file, self::CSV_HEADERS);

            foreach ($data as $item) {
                fputcsv($file, [
                    $item['id_seq'], $item['autor_id'], $item['autor_nome'],
                    $item['livro_id'], $item['titulo'], $item['editora'],
                    $item['edicao'], $item['ano_publicacao'], $item['assunto']
                ]);
            }

            fclose($file);
        }, $filename, [
            'Content-Type' => 'text/csv',
        ]);
    }
}
