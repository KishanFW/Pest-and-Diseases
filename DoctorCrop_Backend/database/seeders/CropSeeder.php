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
            'Crop_Name'=>'Banana',
            'Img_Path'=>'/assets/crops/banana.png'
        ]);
        Crop::create([
            'Crop_Name'=>'Bitter Gound',
            'Img_Path'=>'/assets/crops/bitterground.png'
        ]);
        Crop::create([
            'Crop_Name'=>'Brinjal',
            'Img_Path'=>'/assets/crops/bri.webp'
        ]);
        Crop::create([
            'Crop_Name'=>'Carrot',
            'Img_Path'=>'/assets/crops/carrot.png'
        ]);
        Crop::create([
            'Crop_Name'=>'Cassava',
            'Img_Path'=>'/assets/crops/cassava.png'
        ]);
    }
}
