<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('livro_autor', function (Blueprint $table) {
            $table->unsignedBigInteger('livro_codl');
            $table->unsignedBigInteger('autor_codau');

            $table->foreign('livro_codl')->references('codl')->on('livros')->onDelete('cascade');
            $table->foreign('autor_codau')->references('codau')->on('autors')->onDelete('cascade');

            $table->primary(['livro_codl', 'autor_codau']); // Índice composto (PK)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livro_autor');
    }
};
