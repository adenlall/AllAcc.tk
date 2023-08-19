<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_metadata', function (Blueprint $table) {
            $table->id();
            $table->json('meta')->nullable();
            $table->json('extra')->nullable();
            $table->json('skins')->nullable();
            $table->json('buttons')->nullable();
            $table->json('icons')->nullable();
            $table->json('themes')->nullable();
            $table->json('themes_type')->nullable();
            $table->json('font')->nullable();
            $table->json('json_config')->nullable();
            $table->json('json_locate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_metadata');
    }
};
