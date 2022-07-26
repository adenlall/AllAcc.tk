<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkinsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $skins = [
            ['NnP', 'Neon Purple'   , 'rB','RoundedBlack' , '#3a0ca3','#7209b7','#f72585', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Seek to be the purple thread in the long white gown.'],
            ['Vnt', 'Vintage'       , 'Vx','Vintage'      , '#8e9d76','#8ba79a','#a38b34', ['type'=>'official','by'=>'adenlall', 'for'=>'premuim',], "She's an old soul with young eyes, a vintage heart, and a beautiful mind."],
            ['RPG', 'RedPinkGreen'  , 'C4','C4'           , '#99f78d','#f9c99a','#19b89b', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Your smile. is the ultimate. golden dream. all the poems.'],
            ['BnW', 'Black White'   , 'Dr','Drawing'      , '#000000','#ffffff','#8d8d8d', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Life is in color, but black and white is more realistic.'],
            ['Ind', 'Default-AllAcc', 'oB','Black-outline', '#f28482','#f5cac3','#042b28', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Your public page as your dashboard.'],
        ];

        for ($i = 0; $i < count($skins); $i++) {

            DB::table('skin')->insert([
                'name' => $skins[$i][0],
                'c_name' => $skins[$i][1],
                'icons' => $skins[$i][2],
                'c_icons' => $skins[$i][3],
                'clr0' => $skins[$i][4],
                'clr1' => $skins[$i][5],
                'clr2' => $skins[$i][6],
                'header'=> $skins[$i][8],
                'json_config' => json_encode($skins[$i][7]),
            ]);
        }
    }
}
