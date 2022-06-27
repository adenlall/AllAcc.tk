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
            ['instagram',   '833ab4', 'fd1d1d', 'f77737', 'https://tlgur.com/d/4yq0mK24', 'https://instagram.com'],
            ['facebook',    '1877f2', 'ffffff', '1877f2', 'https://tlgur.com/d/g0ZEqqd8', 'https://facebook.com'],
            ['telegram',    '0088cc', 'ffffff', '0088cc', 'https://tlgur.com/d/4AX2qLbg', 'https://telegram.com'],
            ['twitter',     '1da1f2', 'f5f8fa', '1da1f2', 'https://tlgur.com/d/gj0AQQ68', 'https://twitter.co'],
            ['deviantArt',  '05cc47', '4dc47d', '181a1b', 'https://tlgur.com/d/GMxjjjQ8', 'https://deviantArt.com'],
            ['dev.to',      '000000', 'ffffff', '000000', 'https://tlgur.com/d/gj0AQB68', 'https://dev.to'],
            ['youtube',     'ff0000', 'ff0000', 'ff0000', 'https://tlgur.com/d/g2XEERA8', 'https://youtube.com'],
            ['pinterest',   'e60023', 'ffffff', 'e60023', 'https://tlgur.com/d/8BOdqdQG', 'https://pinterest.com '],
            ['github',      '000000', 'ffffff', '000000', 'https://tlgur.com/d/gpYaQDd4', 'https://github.com'],
            ['whatsapp',    '075e54', '128c7e', '25d366', 'https://tlgur.com/d/GaxdaJZ8', 'https://whatsapp.com'],
            ['vk',          '45668e', '45668e', '45668e', 'https://tlgur.com/d/GMxjkew8', 'https://vk.com'],
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
