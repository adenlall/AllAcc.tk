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
        Schema::create('config', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('website');
            $table->string('bg');
            $table->string('img');
            $table->string('mColor');
            $table->string('sColor');
            $table->string('thColor');
            $table->string('position');
            $table->string('type');
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
        Schema::dropIfExists('config');
        Schema::table('config', function (Blueprint $table) {
            //
        });
    }
};
