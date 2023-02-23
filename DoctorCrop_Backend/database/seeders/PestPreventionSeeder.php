<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Pest_prevention;

class PestPreventionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Implement crop rotation.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Clip of the affected as soon as you find the infected part.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Fruits with boring should be removed immediately .'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Inter crop susceptible hosts with other species like fennel and coriander in brinjal crop, if possible for two seasons.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Use nylon net barriers to prevent the migration of the moth to other crops.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Borer and fruit borer',
            'prevention'=>'Monitor the cultivation site regularly for symptoms of the pathogen.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf-shrinking caterpillar',
            'prevention'=>'Planting later in the season recommended.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf-shrinking caterpillar',
            'prevention'=>'Grow healthy plants with a good fertilization program.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf-shrinking caterpillar',
            'prevention'=>'Remove or destroy infested leaves, caterpillars and your waste by burning it.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf aphid',
            'prevention'=>'Remove plant debris from previous cultures.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf aphid',
            'prevention'=>'Check weeds in and around the fields.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf aphid',
            'prevention'=>'Don’t over-water or over-fertilize.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf aphid',
            'prevention'=>'If possible, use nets to protect the plants.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Leaf aphid',
            'prevention'=>'Planting flowering onions, garlic, and chives throughout your garden can help discourage aphids.'
        ]);


        Pest_prevention::create([
            'pest_name'=>'Mite damage',
            'prevention'=>'Monitor your field regularly and check the underside of leaves.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Mite damage',
            'prevention'=>'Remove affected leaves or plants.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Mite damage',
            'prevention'=>'Remove nettles and other weeds from fields.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Mite damage',
            'prevention'=>'Water your crop regularly as stressed trees and plants are less tolerant to spider mite damage.'
        ]);

        Pest_prevention::create([
            'pest_name'=>'Mite damage',
            'prevention'=>'Apply water to pathways and other dusty areas at regular intervals to avoid dusty conditions in the field.'
        ]);


    }
}
