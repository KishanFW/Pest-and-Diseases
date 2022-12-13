<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Pest_symptom;

class PestSymptomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Pest_symptom::create([
        'pest_name'=>'Borer and fruit borer',
        'symptom'=>'Damage can be identified by drooping stems and black holes in the fruit'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Borer and fruit borer',
        'symptom'=>'Larvae can be seen when damaged pods and fruit are cut'

      ]);


      Pest_symptom::create([
        'pest_name'=>'Borer and fruit borer',
        'symptom'=>'Plant growth is stunted due to larval damage'

      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>'A few leaves of the plant are bunched up and the larvae are fed in them'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>"Here the remaining parts are eaten except the leaf's veinal"
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>'The growth of the plant is stunted due to the destruction of the apical leaves'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'The emerging adult is light green and both the emerging adult and the larva causes damage to the plant'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'Sap sucking from the underside of the leaf causes leaf shrinkage, curling, and yellowing from the leaf edge to the middle'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'The growth of the plant is weak'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'It also acts as the vector of phytoplasma (small leaf blight) which infects the brinjal crop'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'Mites suck sap from leaves and fruits. When the juice is sucked from the fruit, the outer skin of the fruit becomes rough and turns brown'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'The fruits are distorted'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'When damaging the leaves, the mites are more common on the underside, and leaf rolling, browning, and dry diebak are seen'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'In the early stages of leaf damage caused by spider mites, the surface of the leaves may turn yellow in places'
      ]);
  }

}
