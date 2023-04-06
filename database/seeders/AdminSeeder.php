<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "name" => "aden lall",
            "username" => "__AdenDev",
            "email" => "lalladen@naver.com",
            "type" => "admin__developer",
            "password" => Hash::make("|ll|--OX-_-XO--|ll|"),
        ]);
    }
}
