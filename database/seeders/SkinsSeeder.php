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


        $icons_NP = [
            'https://nice-direct-links.herokuapp.com/12560/file.jpg',
            'https://nice-direct-links.herokuapp.com/12557/facebook-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12561/file.jpg',
            'https://nice-direct-links.herokuapp.com/12558/twitter-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12567/file.jpg',
            'https://nice-direct-links.herokuapp.com/12550/behance-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12566/file.jpg',
            'https://nice-direct-links.herokuapp.com/12554/linkedin-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12556/dribbble-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12562/file.jpg',
            'https://nice-direct-links.herokuapp.com/12555/youtube-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12565/file.jpg',
            'https://nice-direct-links.herokuapp.com/12563/file.jpg',
            'https://nice-direct-links.herokuapp.com/1254f/flickr-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12552/whatsapp-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12564/file.jpg',

        ];

        $icons_RRG = [ // dev.to - whatsapp - github
            'https://nice-direct-links.herokuapp.com/12577/instagram-svgrepo-com-(3).svg',
            'https://nice-direct-links.herokuapp.com/12575/facebook-svgrepo-com-(3).svg',
            'https://nice-direct-links.herokuapp.com/1257a/telegram-svgrepo-com-(1).svg',
            'https://nice-direct-links.herokuapp.com/12578/twitter-svgrepo-com-(4).svg',
            'https://nice-direct-links.herokuapp.com/12573/deviantart-brands-and-logotypes-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12571/behance-svgrepo-com-(2).svg',
            'https://nice-direct-links.herokuapp.com/1257b/lastfm-svgrepo-com-(2).svg',
            'https://nice-direct-links.herokuapp.com/1257f/linkedin-svgrepo-com-(3).svg',
            'https://nice-direct-links.herokuapp.com/12574/dribbble-svgrepo-com-(1).svg',
            'https://nice-direct-links.herokuapp.com/12562/file.jpg',
            'https://nice-direct-links.herokuapp.com/1257d/youtube-svgrepo-com-(4).svg',
            'https://nice-direct-links.herokuapp.com/12580/pinterest-svgrepo-com-(2).svg',
            'https://nice-direct-links.herokuapp.com/12563/file.jpg',
            'https://nice-direct-links.herokuapp.com/12576/flickr-brands-and-logotypes-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12552/whatsapp-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/1257c/vk-vk-svgrepo-com-(1).svg',

        ];
        $icons_BW = [ //
            'https://nice-direct-links.herokuapp.com/125b6/instagram-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125bb/facebook-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125c6/telegram_communication_chat_interaction_network_connection_svgrepo.svg',
            'https://nice-direct-links.herokuapp.com/125b5/twitter-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/12573/deviantart-brands-and-logotypes-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125be/behance-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125bc/lastfm-logo-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125b9/linkedin-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125b7/dribbble-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125c7/dev-to-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125b4/youtube-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125ba/pinterest-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125b8/github-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125bd/flickr-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125b2/whatsapp-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/125d1/vk-vk-svgrepo-com.svg',

        ];
        $icons_In = [ //
            'https://nice-direct-links.herokuapp.com/128ec/instagram-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128f2/facebook-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128e9/telegram-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128ea/twitter-social-media-social-network-logo-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128e8/deviantart-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128e7/behance-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128f5/lastfm-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128f1/linkedin-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128f0/dribbble-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128ed/dev-to-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128ee/youtube-symbol-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128e6/pinterest-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128ef/github-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128f4/flickr-with-circle-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128eb/whatsapp-fill-svgrepo-com.svg',
            'https://nice-direct-links.herokuapp.com/128e5/vk-social-logotype-svgrepo-com.svg',

        ];
        $skins = [
            ['NnP', 'light', 'https://nice-direct-links.herokuapp.com/12dea/file.jpg','https://nice-direct-links.herokuapp.com/12deb/file.jpg','https://nice-direct-links.herokuapp.com/12ded/file.jpg', '#3a0ca3','#7209b7','#f72585', 'https://nice-direct-links.herokuapp.com/1254c/file.jpg', ['imgs'=>['https://nice-direct-links.herokuapp.com/12913/file.jpg','https://nice-direct-links.herokuapp.com/12914/file.jpg'], 'type'=>'official','by'=>'adenlall', 'free', 'icons'=>'light'  ], $icons_NP , ['Seek to be the purple thread in the long white gown.', 'the neon purple.'] ],
            ['RRG', 'drawing', 'https://nice-direct-links.herokuapp.com/1291b/file.jpg','https://nice-direct-links.herokuapp.com/12dec/file.jpg','https://nice-direct-links.herokuapp.com/12df3/file.jpg', '#99f78d','#f9c99a','#19b89b', 'https://nice-direct-links.herokuapp.com/12570/file.jpg', ['imgs'=>['https://nice-direct-links.herokuapp.com/12911/file.jpg','https://nice-direct-links.herokuapp.com/12912/file.jpg'], 'type'=>'official','by'=>'adenlall', 'free', 'icons'=>'drawing'], $icons_RRG, ['Your smile. is the ultimate. golden dream. all the poems. in the world. are waking up from.', 'Green-G'] ],
            ['BnW', 'lines', 'https://nice-direct-links.herokuapp.com/12df0/file.jpg','https://nice-direct-links.herokuapp.com/12df9/file.jpg','https://nice-direct-links.herokuapp.com/12df9/file.jpg', '#000000','#ffffff','#8d8d8d', 'https://nice-direct-links.herokuapp.com/125ab/file.jpg', ['imgs'=>['https://nice-direct-links.herokuapp.com/1290e/file.jpg','https://nice-direct-links.herokuapp.com/1290f/file.jpg'], 'type'=>'official','by'=>'adenlall', 'free', 'icons'=>'lines'  ], $icons_BW,  ['Life is in color, but black and white is more realistic.', 'B&W interpretive.'] ],
            ['Ind', 'blackwhite', 'https://nice-direct-links.herokuapp.com/12dfe/file.jpg','https://nice-direct-links.herokuapp.com/12df1/file.jpg','https://nice-direct-links.herokuapp.com/12dfb/file.jpg', '#f28482','#f5cac3','#042b28', 'https://nice-direct-links.herokuapp.com/125ab/file.jpg', ['imgs'=>['https://nice-direct-links.herokuapp.com/12910/file.jpg','https://nice-direct-links.herokuapp.com/12915/file.jpg'], 'type'=>'official','by'=>'adenlall', 'free', 'icons'=>'blackwhite'  ], $icons_In,  ['Life is in color, but black and white is more realistic.', 'B&W interpretive.'] ],
        ];

        for ($i = 0; $i < count($skins); $i++) {
            DB::table('skin')->insert([
                'name' => $skins[$i][0],
                'icons' => $skins[$i][1],

                'img0' => $skins[$i][2],
                'img1' => $skins[$i][3],
                'img2' => $skins[$i][4],
                'clr0' => $skins[$i][5],
                'clr1' => $skins[$i][6],
                'clr2' => $skins[$i][7],

                '__img' => $skins[$i][8],

                'json_config' => json_encode($skins[$i][9]),
                'json_icons'  => json_encode($skins[$i][10]),
                'json_headers'=> json_encode($skins[$i][11]),
            ]);
        }
    }
}
