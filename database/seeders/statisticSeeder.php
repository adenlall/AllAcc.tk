<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class statisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = ['home','about','privacy','dashboard','skinSetting','profile','AsSeem'];


         for ($i = 0; $i < count($data); $i++) {

            DB::table('statistic')->insert([
                'page' => $data[$i],
            ]);
        }
    }
}
