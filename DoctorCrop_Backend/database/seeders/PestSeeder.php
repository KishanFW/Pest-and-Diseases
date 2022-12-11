<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pest;

class PestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pest::create([
            'crop_id'=>3,
            'pest_name'=>'Borer and fruit borer',
            'management'=>' <ul>
            <li>Applying a live or non-living barrier (corn, sorghum or insect resistant net) around the brinjal field to a height of abo
              ut 2 m.</li>
            <br>
            <li> When this damage was first seen in cultivated plants, cut underneath the affected parts of the damaged area and remo
              ve them from the plant and destroy them.</li>
           <br>
            <li>Check the crop once a week.</li>
            <br>
            <li>This damage can be controlled by spraying a suitable insecticide at the time of 50% flowering.
            </li>
            <br>
            <li>Gain an understanding of the number of damaged fruit at harvest and apply a recommended insecticide only if the nu
              mber of damaged fruit is more than 5%.</li>
            <br>
            <li>Pay attention to pre-harvest timing and avoid continuous use of the same insecticide.</li>
            <br>
            <li>Be aware of pre-harvest timing when applying insecticides at harvest.</li>
            <br>
            <li>Chemical suppression
              <ul>Apply recommended agrochemicals as recommended</ul>
              </li>
          </ul>'
        ]);

        Pest::create([
            'crop_id'=>3,
            'pest_name'=>'Leaf-shrinking caterpillar',
            'management'=>' <ul>
            <li>Break up and destroy the tightly packed leaves.</li>
            <br>
            <li>Apply recommended agrochemicals as recommended</li>
            <br>
            <li>Harvest only after at least 7-10 days of applying a recommended insecticide.</li>
          </ul>'
        ]);

        Pest::create([
            'crop_id'=>3,
            'pest_name'=>'Leaf aphid',
            'management'=>' <ul>
            <li>Good crop maintenance and in case of widespread damage, control with a recommended insecticide.</li>
            <br>
            <li>Apply recommended agrochemicals as recommended.</li>
          </ul>'

        ]);

        Pest::create([
            'crop_id'=>3,
            'pest_Name'=>'Mite damage',
            'management'=>' <ul>
            <li>Good crop maintenance and adequate irrigation (especially under dry weather conditions); water deficit crops are mo
              re susceptible to damage.</li>
            <br>
            <li>Spray irrigation can reduce the mite population in the crop.</li>
            <br>
            <li>If damage spreads, control with a recommended insecticide.</li>'

        ]);
    }
}
