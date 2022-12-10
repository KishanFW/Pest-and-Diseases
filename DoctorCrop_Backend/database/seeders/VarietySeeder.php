<?php

namespace Database\Seeders;

use App\Models\Variety;
use Illuminate\Database\Seeder;

class VarietySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Variety::create([
            'Variety_Name'=>'Amanda F1',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/amanda.jpg'
        ]);

        Variety::create([
            'Variety_Name'=>'Anjalee-F1',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/anjalee.jpg'
        ]);


        Variety::create([
            'Variety_Name'=>'HORDI Lenairi 1',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/hordi.jpg'
        ]);

        Variety::create([
            'Variety_Name'=>'Thinnaweli purple',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/thinnawely.png'
        ]);

        Variety::create([
            'Variety_Name'=>'padagoda(BW-11)',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/padagoda.png'
        ]);

        Variety::create([
            'Variety_Name'=>'SM-164',
            'Crop_Id'=>3,
            'Img_Path'=>'assets/crops/brinjal/brinjalvarieties/SM.png'
        ]);


    }
}
