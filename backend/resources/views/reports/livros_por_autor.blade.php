<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório de Livros por Autor</title>
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #000; padding: 5px; text-align: left; }
        th { background-color: #f0f0f0; }
    </style>
</head>
<body>
    <h2>Relatório de Livros por Autor</h2>

    <table>
        <thead>
            <tr>
                <th>Autor</th>
                <th>Título</th>
                <th>Editora</th>
                <th>Edição</th>
                <th>Ano</th>
                <th>Assunto</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data as $livro)
                <tr>
                    <td>{{ $livro->autor_nome }}</td>
                    <td>{{ $livro->titulo }}</td>
                    <td>{{ $livro->editora }}</td>
                    <td>{{ $livro->edicao }}</td>
                    <td>{{ $livro->ano_publicacao }}</td>
                    <td>{{ $livro->assunto }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
