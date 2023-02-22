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
            SymptomSeeder::class,
            DiseaseSymptomSeeder::class,
            PestSymptomSeeder::class,
            CropsPestSeeder::class,
            SymptomCatagorySeeder::class,
            VarietiesPestSeeder::class,
            VarietiesDiseaseSeeder::class,
            PestPreventionSeeder::class,
            DiseasePreventionSeeder::class
    ]);

    }
}
