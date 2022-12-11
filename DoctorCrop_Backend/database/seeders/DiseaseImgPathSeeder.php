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
            'disease_id'=>1,
            'img_path'=>'assets/crops/brinjal/read/damping-off-1.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>1,
            'img_path'=>'assets/crops/brinjal/read/damping-off-2.jpg'
        ]);
        Disease_img_path::create([
            'disease_id'=>2,
            'img_path'=>'assets/crops/brinjal/read/collar-rot-1.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>3
        ]);
        Disease_img_path::create([
            'disease_id'=>4,
            'img_path'=>'assets/crops/brinjal/read/powdery-mildew.jpg'
        ]);
        Disease_img_path::create([
            'disease_id'=>5,
            'img_path'=>'assets/crops/brinjal/read/anthracnose1.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>5,
            'img_path'=>'assets/crops/brinjal/read/anthracnose2.png.jpg'
        ]);
        Disease_img_path::create([
            'disease_id'=>6,
            'img_path'=>'assets/crops/brinjal/read/Phomopsis-blight.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>7,
            'img_path'=>'assets/crops/brinjal/read/bacterial-wilt1.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>7,
            'img_path'=>'assets/crops/brinjal/read/bacterial-wilt2.png'
        ]);
        Disease_img_path::create([
            'disease_id'=>8,
            'img_path'=>'assets/crops/brinjal/read/Little-leaf-disease.png'
        ]);
    }
}
