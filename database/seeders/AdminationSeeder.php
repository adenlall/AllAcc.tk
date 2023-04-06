<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class AdminationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {

        $admins = [
            ['AllAcc Boss', 'boss',  'lalladen@naver.com',   '200004', '__boss', "__B0ss_|\/|_OX00.com__200004__JUFj89&&.__.gKDIDj943hGHjiUIUI860K&9HH"],
            ['lalladen',    'admin', 'lalladen20@gmail.com', '937364', '__admin_0', "__B0ss_|\/|_OX00.com__937364__JUdIKDL&.__.ghGHjiUUIDi930I8UH560K&9HH"],
        ];

        for ($i = 0; $i < count($admins); $i++) {
            DB::table('admins')->insert([
                "name" => $admins[$i][0],
                "email" => $admins[$i][2],
                "username" => $admins[$i][1],
                "secret" => $admins[$i][3],
                "admin_type" => $admins[$i][4],
                "token" => $admins[$i][5],
            ]);
        }
    }
}
