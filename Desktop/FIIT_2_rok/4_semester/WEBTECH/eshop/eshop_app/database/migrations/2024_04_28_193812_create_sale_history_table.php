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
        Schema::create('sale_history', function (Blueprint $table) {
            $table->id('id');
            $table->timestamps('sale_start');
            $table->timestamps('sale_end');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('sale_in_%');
            $table->foreign('product_id')->references('id')->on('product');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale_history');
    }
};
