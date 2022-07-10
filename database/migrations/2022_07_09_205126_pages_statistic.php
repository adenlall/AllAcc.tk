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
        Schema::create('statistic',function(Blueprint $table){
            $table->id();
            $table->string('page');
            $table->integer('visits')->default(0);
            $table->integer('guest_v')->default(0);
            $table->integer('auth_v')->default(0);
            $table->json('json_multi')->default('{"actions":{"index":0},"pure":true}');
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
        Schema::dropIfExists('statistic');
    }
};
