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
            $table->string('c_name');
            $table->string('icons');
            $table->string('c_icons');

            $table->string('clr0');
            $table->string('clr1');
            $table->string('clr2');
            $table->string('header');

            $table->json('json_config');

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
