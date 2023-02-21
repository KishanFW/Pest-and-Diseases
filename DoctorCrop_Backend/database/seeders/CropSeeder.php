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
            'img_path'=>'/assets/crops/banana.png'
        ]);
        Crop::create([
            'crop_name'=>'Bitter Gourd',
            'img_path'=>'/assets/crops/bitterground.png'
        ]);
        Crop::create([
            'crop_name'=>'Brinjal',
            'img_path'=>'/assets/crops/bri.webp'
        ]);
        Crop::create([
            'crop_name'=>'Carrot',
            'img_path'=>'/assets/crops/carrot.png'
        ]);
        Crop::create([
            'crop_name'=>'Cassava',
            'img_path'=>'/assets/crops/cassava.png'
        ]);
    }
}
