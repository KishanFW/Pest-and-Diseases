<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CropSeeder::class,
            VarietySeeder::class,
            DiseaseSeeder::class,
            PestSeeder::class,
            DiseaseImgPathSeeder::class,
            PestImgPathSeeder::class,
            CropsDiseaseSeeder::class,
            PestSymptomSeeder::class
    ]);

    }
}
