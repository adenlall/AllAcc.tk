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
            
            $table->integer('visit')->default(0);
            $table->boolean('disable')->default(false);

            $table->string('version')->nullable();

            $table->json('json_config');
            $table->json('json_locate');
            
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
