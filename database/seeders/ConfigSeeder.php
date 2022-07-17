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
            ['instagram',   '833ab4', 'fd1d1d', 'f77737', 'https://instagram.com'],
            ['facebook',    '1877f2', 'ffffff', '1877f2', 'https://www.facebook.com'],
            ['telegram',    '0088cc', 'ffffff', '0088cc', 'https://t.me'],
            ['twitter',     '1da1f2', 'f5f8fa', '1da1f2', 'https://twitter.com'],
            ['deviantart',  '05cc47', '4dc47d', '181a1b', 'https://deviantart.com'],
            ['behance',     '1769ff', '1769ff', 'ffffff', 'https://behance.net'],
            ['lastfm',      'd51007', 'd51007', 'd51007', 'https://www.last.fm/user '],
            ['linkedin',    '0077b5', '00a0dc', '00a0dc', 'https://linkedin.com/in'],
            ['dribbble',    'ea4c89', 'ff8833', '444444', 'https://dribbble.com'],
            ['devto',       '000000', 'ffffff', '000000', 'https://dev.to'],
            ['youtube',     'ff0000', 'ff0000', 'ff0000', 'https://youtube.com'],
            ['pinterest',   'e60023', 'ffffff', 'e60023', 'https://pinterest.com'],
            ['github',      '000000', 'ffffff', '000000', 'https://github.com'],
            ['flickr',      '0063dc', 'ff0084', 'ff0084', 'https://flickr.com/people'],
            ['whatsapp',    '075e54', '128c7e', '25d366', 'https://chat.whatsapp.com'],
            ['vk',          '45668e', '45668e', '45668e', 'https://vk.com'],
        ];
        //
        for ($i = 0; $i < count($services); $i++) {
            DB::table('config')->insert([
                'name' => $services[$i][0],
                'mColor' => $services[$i][1],
                'sColor' => $services[$i][2],
                'thColor' => $services[$i][3],
                'website' => $services[$i][4],
            ]);
        }
    }
}
