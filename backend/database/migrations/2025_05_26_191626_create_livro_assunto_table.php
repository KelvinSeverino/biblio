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
        Schema::create('livro_assunto', function (Blueprint $table) {
            $table->unsignedBigInteger('livro_codl');
            $table->unsignedBigInteger('assunto_codas');

            $table->foreign('livro_codl')->references('codl')->on('livros')->onDelete('cascade');
            $table->foreign('assunto_codas')->references('codas')->on('assuntos')->onDelete('cascade');

            $table->primary(['livro_codl', 'assunto_codas']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livro_assunto');
    }
};
