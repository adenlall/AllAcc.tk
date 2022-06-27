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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('type')->default('user__user');

            $table->string('gender')->nullable();
            $table->string('country')->nullable();
            $table->boolean('age')->nullable();
            $table->string('title')->nullable();
            $table->date('birthday')->nullable();

            $table->string('quote')->nullable();
            $table->string('track')->nullable();
            $table->string('artist')->nullable();
            $table->string('anime_1')->nullable();
            $table->string('anime_2')->nullable();
            $table->string('anime_c')->nullable();

            $table->integer('visit')->default(0);

            $table->string('anilist_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
