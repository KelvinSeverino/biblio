<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        if (app()->environment('testing')) {
            return; // não cria a view durante os testes
        }

        DB::statement("
            CREATE OR REPLACE VIEW view_livros_por_autor AS
            SELECT
                ROW_NUMBER() OVER (ORDER BY l.titulo) AS id_seq,
                l.codl AS livro_id,
                l.titulo,
                l.editora,
                l.edicao,
                l.ano_publicacao,
                GROUP_CONCAT(DISTINCT a.nome ORDER BY a.nome SEPARATOR ', ') AS autores,
                GROUP_CONCAT(DISTINCT asu.descricao ORDER BY asu.descricao SEPARATOR ', ') AS assuntos
            FROM livros l
            LEFT JOIN livro_autor la ON la.livro_codl = l.codl
            LEFT JOIN autores a ON a.codau = la.autor_codau
            LEFT JOIN livro_assunto lasu ON lasu.livro_codl = l.codl
            LEFT JOIN assuntos asu ON asu.codas = lasu.assunto_codas
            GROUP BY l.codl, l.titulo, l.editora, l.edicao, l.ano_publicacao
            ORDER BY l.titulo;
        ");
    }

    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS view_livros_por_autor;");
    }
};
