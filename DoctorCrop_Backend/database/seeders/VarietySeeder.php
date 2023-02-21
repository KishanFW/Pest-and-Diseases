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
            'variety_name'=>'Amanda F1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/amanda.jpg',
            'pest_description'=>'Resistant variety to Borer and Fruit borer',
            'disease_description'=>'Moderately resistance to bacterial wilt'
        ]);

        Variety::create([
            'variety_name'=>'Anjalee-F1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/anjalee.jpg'
        ]);


        Variety::create([
            'variety_name'=>'HORDI Lenairi 1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/hordi.jpg',
            'disease_description'=>'Moderately resistance to bacterial wilt'
        ]);

        Variety::create([
            'variety_name'=>'Thinnaweli purple',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/thinnawely.png',
            'disease_description'=>'Susceptible to bacterial wilt'
        ]);

        Variety::create([
            'variety_name'=>'Padagoda(BW-11)',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/padagoda.png',
            'pest_description'=>'Lowest resistant to Borer and Fruit borer'
        ]);

        Variety::create([
            'variety_name'=>'SM-164',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/SM.png',
            'disease_description'=>'Moderately resistance to bacterial wilt'
        ]);


    }
}
