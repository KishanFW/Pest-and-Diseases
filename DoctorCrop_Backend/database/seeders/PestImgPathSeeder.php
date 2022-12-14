<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pestimgpath;

class PestImgPathSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pestimgpath::create([
            'pest_name'=>'Borer and fruit borer',
            'img_path'=>'assets/crops/brinjal/detect/pest/Stem-and-Fruit-borer-in-Brinjal.jfif'
        ]);

        Pestimgpath::create([
            'pest_name'=>'Borer and fruit borer',
            'img_path'=>'assets/crops/brinjal/detect/pest/Brinjal-Shoot-Borer-and-Fruit-Borer.jfif'
        ]);

        Pestimgpath::create([
            'pest_name'=>'Leaf-shrinking caterpillar',
            'img_path'=>'assets/crops/brinjal/detect/pest/Eggplant-caterpillar-Leaf-rolling-catepillar.jfif'
        ]);

        Pestimgpath::create([
            'pest_name'=>'Leaf aphid',
            'img_path'=>'assets/crops/brinjal/detect/pest/Tiny-Leafhopper-insect(Cicadellidae,Homoptera)on-a-leaf-in-the-garden.jpg'
        ]);

        Pestimgpath::create([
            'pest_Name'=>'Mite damage',
            'img_path'=>'assets/crops/brinjal/detect/pest/Spidaer-mites-injury-to-eggplant.jpg'
        ]);

        Pestimgpath::create([
            'pest_Name'=>'Mite damage',
            'img_path'=>'assets/crops/brinjal/detect/pest/red-spider-mites.jpg'
        ]);
    }
}
