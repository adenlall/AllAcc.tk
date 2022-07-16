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
        //


        // $icons_NP = [
        //     'https://nice-direct-links.herokuapp.com/12560/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12557/facebook-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12561/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12558/twitter-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12567/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12550/behance-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12566/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12554/linkedin-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12556/dribbble-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12562/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12555/youtube-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12565/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12563/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/1254f/flickr-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12552/whatsapp-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12564/file.jpg',

        // ];

        // $icons_RRG = [ // dev.to - whatsapp - github
        //     'https://nice-direct-links.herokuapp.com/12577/instagram-svgrepo-com-(3).svg',
        //     'https://nice-direct-links.herokuapp.com/12575/facebook-svgrepo-com-(3).svg',
        //     'https://nice-direct-links.herokuapp.com/1257a/telegram-svgrepo-com-(1).svg',
        //     'https://nice-direct-links.herokuapp.com/12578/twitter-svgrepo-com-(4).svg',
        //     'https://nice-direct-links.herokuapp.com/12573/deviantart-brands-and-logotypes-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12571/behance-svgrepo-com-(2).svg',
        //     'https://nice-direct-links.herokuapp.com/1257b/lastfm-svgrepo-com-(2).svg',
        //     'https://nice-direct-links.herokuapp.com/1257f/linkedin-svgrepo-com-(3).svg',
        //     'https://nice-direct-links.herokuapp.com/12574/dribbble-svgrepo-com-(1).svg',
        //     'https://nice-direct-links.herokuapp.com/12562/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/1257d/youtube-svgrepo-com-(4).svg',
        //     'https://nice-direct-links.herokuapp.com/12580/pinterest-svgrepo-com-(2).svg',
        //     'https://nice-direct-links.herokuapp.com/12563/file.jpg',
        //     'https://nice-direct-links.herokuapp.com/12576/flickr-brands-and-logotypes-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12552/whatsapp-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/1257c/vk-vk-svgrepo-com-(1).svg',

        // ];
        // $icons_BW = [ //
        //     'https://nice-direct-links.herokuapp.com/125b6/instagram-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125bb/facebook-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125c6/telegram_communication_chat_interaction_network_connection_svgrepo.svg',
        //     'https://nice-direct-links.herokuapp.com/125b5/twitter-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/12573/deviantart-brands-and-logotypes-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125be/behance-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125bc/lastfm-logo-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125b9/linkedin-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125b7/dribbble-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125c7/dev-to-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125b4/youtube-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125ba/pinterest-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125b8/github-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125bd/flickr-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125b2/whatsapp-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/125d1/vk-vk-svgrepo-com.svg',

        // ];
        // $icons_In = [ //
        //     'https://nice-direct-links.herokuapp.com/128ec/instagram-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128f2/facebook-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128e9/telegram-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128ea/twitter-social-media-social-network-logo-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128e8/deviantart-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128e7/behance-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128f5/lastfm-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128f1/linkedin-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128f0/dribbble-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128ed/dev-to-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128ee/youtube-symbol-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128e6/pinterest-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128ef/github-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128f4/flickr-with-circle-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128eb/whatsapp-fill-svgrepo-com.svg',
        //     'https://nice-direct-links.herokuapp.com/128e5/vk-social-logotype-svgrepo-com.svg',

        // ];


        $skins = [
            ['NnP', 'Neon Purple'   , 'rB','RoundedBlack' , '#3a0ca3','#7209b7','#f72585', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Seek to be the purple thread in the long white gown.'],
            ['Vnt', 'Vintage'       , 'Vx','Vintage'      , '#8e9d76','#8ba79a','#a38b34', ['type'=>'official','by'=>'adenlall', 'for'=>'premuim',], "She's an old soul with young eyes, a vintage heart, and a beautiful mind."],
            ['RPG', 'RedPinkGreen'  , 'C4','C4'           , '#99f78d','#f9c99a','#19b89b', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Your smile. is the ultimate. golden dream. all the poems.'],
            ['BnW', 'Black White'   , 'Dr','Drawing'      , '#000000','#ffffff','#8d8d8d', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'Life is in color, but black and white is more realistic.'],
            ['Ind', 'Default-AllAcc', 'oB','Black-outline', '#f28482','#f5cac3','#042b28', ['type'=>'official','by'=>'adenlall', 'for'=>'free',   ], 'AllAcc by us to you.'],
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
