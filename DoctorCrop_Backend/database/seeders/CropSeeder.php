<?php

namespace Database\Seeders;

use App\Models\Crop;
use Illuminate\Database\Seeder;

class CropSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Crop::create([
            'crop_name'=>'Banana',
            'translatable_crop_name'=>json_encode(['en' => 'Banana', 'ta' => 'வாழை', 'si' => 'කෙසෙල්']),
            'img_path'=>'/assets/crops/banana.png'
        ]);
        Crop::create([
            'crop_name'=>'Bitter Gourd',
            'translatable_crop_name'=>json_encode(['en' => 'Bitter Gourd', 'ta' => 'பாகற்காய்', 'si' => 'කරවිල',
            'img_path'=>'/assets/crops/bitterground.png'
         ]);
        Crop::create([
            'crop_name'=>'Brinjal',
            'translatable_crop_name'=>json_encode(['en' => 'Brinjal', 'ta' => 'கத்தரிக்காய்', 'si' => 'බටු']),
            'img_path'=>'/assets/crops/bri.webp'
        ]);
        Crop::create([
            'crop_name'=>'Carrot',
            'translatable_crop_name'=>json_encode(['en' => 'Carrot', 'ta' => 'கேரட்', 'si' => 'කැරට්']),
            'img_path'=>'/assets/crops/carrot.png'
        ]);
        Crop::create([
            'crop_name'=>'Cassava',
            'translatable_crop_name'=>json_encode(['en' => 'Cassava', 'ta' => 'மரவள்ளிக்கிழங்கு', 'si' => 'මඤ්ඤොක්කා']),
            'img_path'=>'/assets/crops/cassava.png'
        ]);
    }
}
