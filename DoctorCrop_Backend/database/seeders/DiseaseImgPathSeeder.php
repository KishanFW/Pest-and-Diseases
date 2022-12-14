<?php

namespace Database\Seeders;

use App\Models\Disease_img_path;
use Illuminate\Database\Seeder;

class DiseaseImgPathSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Disease_img_path::create([
            'disease_name'=>'Damping-Off',
            'img_path'=>'assets/crops/brinjal/read/damping-off-1.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Damping-Off',
            'img_path'=>'assets/crops/brinjal/read/damping-off-2.jpg'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Collar rot',
            'img_path'=>'assets/crops/brinjal/read/collar-rot-1.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Fusarium wilt'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Powdery mildew',
            'img_path'=>'assets/crops/brinjal/read/powdery-mildew.jpg'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Anthracnose',
            'img_path'=>'assets/crops/brinjal/read/anthracnose1.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Anthracnose',
            'img_path'=>'assets/crops/brinjal/read/anthracnose2.png.jpg'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Phomopsis blight',
            'img_path'=>'assets/crops/brinjal/read/Phomopsis-blight.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Bacterial wilt',
            'img_path'=>'assets/crops/brinjal/read/bacterial-wilt1.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Bacterial wilt',
            'img_path'=>'assets/crops/brinjal/read/bacterial-wilt2.png'
        ]);
        Disease_img_path::create([
            'disease_name'=>'Little leaf disease',
            'img_path'=>'assets/crops/brinjal/read/Little-leaf-disease.png'
        ]);
    }
}
