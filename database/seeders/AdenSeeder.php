<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_services')->insert([
            'username' => 'adenlall'
        ]);
        DB::table('users')->insert([
            "name" => "aden lall",
            "username" => "adenlall",
            "email" => "adenlall@outlook.sa",
            "type" => "admin__user",
            "password" => Hash::make('OX00.com'),
        ]);

    }
}
