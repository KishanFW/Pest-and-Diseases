<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Crops_disease;

class CropsDiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Damping-Off'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Collar rot'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Fusarium wilt'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Powdery mildew'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Anthracnose'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Phomopsis blight'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Bacterial wilt'
        ]);

        Crops_disease::create([
            'crop_name'=>'Brinjal',
            'disease_name'=>'Little leaf disease'
        ]);
    }
}
