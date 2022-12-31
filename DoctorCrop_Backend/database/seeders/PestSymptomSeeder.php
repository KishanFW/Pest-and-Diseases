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
        'symptom'=>'Drooping stems and black holes in the fruit'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Borer and fruit borer',
        'symptom'=>'Larvae can be seen when damaged pods and fruit are cut'

      ]);


      Pest_symptom::create([
        'pest_name'=>'Borer and fruit borer',
        'symptom'=>'Plant growth is stunted'

      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>'A few leaves of the plant are bunched up and the larvae are fed in them'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>"Remaining parts are eaten except the leaf's veinal"
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf-shrinking caterpillar',
        'symptom'=>'Plant growth is stunted'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'The emerging adult is light green'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'Leaf shrinkage, curling, and yellowing from the leaf edge to the middle'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Leaf aphid',
        'symptom'=>'Plant growth is stunted'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'Outer skin of the fruit becomes rough and turns brown'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'The fruits are distorted'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'Mites are more common on the underside, and leaf rolling, browning, and dry diebak are seen'
      ]);

      Pest_symptom::create([
        'pest_name'=>'Mite damage',
        'symptom'=>'The surface of the leaves may turn yellow in places'
      ]);
  }

}
