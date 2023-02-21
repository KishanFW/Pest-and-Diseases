<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\varieties_pest;

class VarietiesPestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        varieties_pest::create([
            'variety_name'=>'Amanda F1',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'Amanda F1',
            'pest_name'=>'Leaf aphid'

        ]);

        varieties_pest::create([
            'variety_name'=>'Amanda F1',
            'pest_name'=>'Mite damage'

        ]);

        varieties_pest::create([
            'variety_name'=>'Anjalee-F1',
            'pest_name'=>'Borer and fruit borer'

        ]);

        varieties_pest::create([
            'variety_name'=>'Anjalee-F1',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'Anjalee-F1',
            'pest_name'=>'Leaf aphid'

        ]);

        varieties_pest::create([
            'variety_name'=>'Anjalee-F1',
            'pest_name'=>'Mite damage'

        ]);

        varieties_pest::create([
            'variety_name'=>'HORDI Lenairi 1',
            'pest_name'=>'Borer and fruit borer'

        ]);

        varieties_pest::create([
            'variety_name'=>'HORDI Lenairi 1',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'HORDI Lenairi 1',
            'pest_name'=>'Leaf aphid'

        ]);


        varieties_pest::create([
            'variety_name'=>'HORDI Lenairi 1',
            'pest_name'=>'Mite damage'

        ]);

        varieties_pest::create([
            'variety_name'=>'Thinnaweli purple',
            'pest_name'=>'Borer and fruit borer'

        ]);

        varieties_pest::create([
            'variety_name'=>'Thinnaweli purple',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'Thinnaweli purple',
            'pest_name'=>'Leaf aphid'

        ]);

        varieties_pest::create([
            'variety_name'=>'Thinnaweli purple',
            'pest_name'=>'Mite damage'

        ]);

        varieties_pest::create([
            'variety_name'=>'Padagoda(BW-11)',
            'pest_name'=>'Borer and fruit borer'

        ]);

        varieties_pest::create([
            'variety_name'=>'Padagoda(BW-11)',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'Padagoda(BW-11)',
            'pest_name'=>'Leaf aphid'

        ]);


        varieties_pest::create([
            'variety_name'=>'Padagoda(BW-11)',
            'pest_name'=>'Mite damage'

        ]);

        varieties_pest::create([
            'variety_name'=>'SM-164',
            'pest_name'=>'Borer and fruit borer'

        ]);

        varieties_pest::create([
            'variety_name'=>'SM-164',
            'pest_name'=>'Leaf-shrinking caterpillar'

        ]);

        varieties_pest::create([
            'variety_name'=>'SM-164',
            'pest_name'=>'Leaf aphid'

        ]);

        varieties_pest::create([
            'variety_name' => 'SM-164',
            'pest_name' => 'Mite damage'

        ]);
    }
}
