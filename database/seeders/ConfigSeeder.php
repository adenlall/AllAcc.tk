<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $services = [
            ['instagram',   '833ab4', 'fd1d1d', 'f77737', 'https://nice-direct-links.herokuapp.com/12560/file.jpg',                 'https://instagram.com'],
            ['facebook',    '1877f2', 'ffffff', '1877f2', 'https://nice-direct-links.herokuapp.com/12557/facebook-svgrepo-com.svg', 'https://www.facebook.com'],
            ['telegram',    '0088cc', 'ffffff', '0088cc', 'https://nice-direct-links.herokuapp.com/12561/file.jpg',                 'https://t.me'],
            ['twitter',     '1da1f2', 'f5f8fa', '1da1f2', 'https://nice-direct-links.herokuapp.com/12558/twitter-svgrepo-com.svg',  'https://twitter.com'],
            ['deviantArt',  '05cc47', '4dc47d', '181a1b', 'https://nice-direct-links.herokuapp.com/12567/file.jpg',                 'https://deviantart.com'],
            ['behance',     '1769ff', '1769ff', 'ffffff', 'https://nice-direct-links.herokuapp.com/12550/behance-svgrepo-com.svg',  'https://behance.net'],
            ['lastfm',      'd51007', 'd51007', 'd51007', 'https://nice-direct-links.herokuapp.com/12566/file.jpg',                 'https://www.last.fm/user '],
            ['linkedin',    '0077b5', '00a0dc', '00a0dc', 'https://nice-direct-links.herokuapp.com/12554/linkedin-svgrepo-com.svg', 'https://linkedin.com/in'],
            ['dribbble',    'ea4c89', 'ff8833', '444444', 'https://nice-direct-links.herokuapp.com/12556/dribbble-svgrepo-com.svg', 'https://dribbble.com'],
            ['dev.to',      '000000', 'ffffff', '000000', 'https://nice-direct-links.herokuapp.com/12562/file.jpg',                 'https://dev.to'],
            ['youtube',     'ff0000', 'ff0000', 'ff0000', 'https://nice-direct-links.herokuapp.com/12555/youtube-svgrepo-com.svg',  'https://youtube.com'],
            ['pinterest',   'e60023', 'ffffff', 'e60023', 'https://nice-direct-links.herokuapp.com/12565/file.jpg',                 'https://pinterest.com '],
            ['github',      '000000', 'ffffff', '000000', 'https://nice-direct-links.herokuapp.com/12563/file.jpg',                 'https://github.com'],
            ['flickr',      '0063dc', 'ff0084', 'ff0084', 'https://nice-direct-links.herokuapp.com/1254f/flickr-svgrepo-com.svg',   'https://flickr.com/people'],
            ['whatsapp',    '075e54', '128c7e', '25d366', 'https://nice-direct-links.herokuapp.com/12552/whatsapp-svgrepo-com.svg', 'https://chat.whatsapp.com'],
            ['vk',          '45668e', '45668e', '45668e', 'https://nice-direct-links.herokuapp.com/12564/file.jpg',                 'https://vk.com'],
        ];
        //
        for ($i = 0; $i < count($services); $i++) {
            DB::table('config')->insert([
                'name' => $services[$i][0],
                'website' => $services[$i][5],
                'mColor' => $services[$i][1],
                'sColor' => $services[$i][2],
                'thColor' => $services[$i][3],
                'img' => $services[$i][4],
                'bg' => $services[$i][4],
                'position' => $i,
                'type' => 'UI',
            ]);
        }
    }
}
