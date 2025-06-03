<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
            CREATE OR REPLACE VIEW view_livros_por_autor AS
            SELECT
                ROW_NUMBER() OVER (ORDER BY a.nome, l.titulo) AS id_seq,
                a.codau AS autor_id,
                a.nome AS autor_nome,
                l.codl AS livro_id,
                l.titulo,
                l.editora,
                l.edicao,
                l.ano_publicacao,
                asu.descricao AS assunto
            FROM autores a
            JOIN livro_autor la ON la.autor_codau = a.codau
            JOIN livros l ON l.codl = la.livro_codl
            LEFT JOIN livro_assunto lasu ON lasu.livro_codl = l.codl
            LEFT JOIN assuntos asu ON asu.codas = lasu.assunto_codas
            ORDER BY a.nome, l.titulo;
        ");
    }

    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS view_livros_por_autor;");
    }
};
