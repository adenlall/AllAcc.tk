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
        //
        Schema::create('skin', function(Blueprint $table){

            $table->id();
            $table->string('name');
            $table->string('icons');

            $table->string('img0');
            $table->string('img1');
            $table->string('img2');
            $table->string('clr0');
            $table->string('clr1');
            $table->string('clr2');

            $table->string('__img');

            $table->json('json_config');
            $table->json('json_icons');
            $table->json('json_headers');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('skin');
    }
};
