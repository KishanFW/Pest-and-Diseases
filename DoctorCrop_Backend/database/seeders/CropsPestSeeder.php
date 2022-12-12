<?php

namespace Database\Seeders;

use App\Models\Crops_pest;
use Illuminate\Database\Seeder;

class CropsPestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Crops_pest::create([
            'crop_name'=>'Brinjal',
            'pest_name'=>'Borer and fruit borer'
        ]);

        Crops_pest::create([
            'crop_name'=>'Brinjal',
            'pest_name'=>'Leaf-shrinking caterpillar'
        ]);

        Crops_pest::create([
            'crop_name'=>'Brinjal',
            'pest_name'=>'Leaf aphid'
        ]);

        Crops_pest::create([
            'crop_name'=>'Brinjal',
            'pest_name'=>'Mite damage'
        ]);
    }
}
