<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Disease;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Disease::create([
            'disease_name'=>'Damping-Off',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Pythium spp.,  Phytophthora spp., Fusarium spp.,  Rhizoctonia spp. and  Sclerotium rolfsii',
            'management'=>'<ul>
            <li>Prepare nursery beds in well drained virgin soil</li>
            <li>Nursery sterilization – burning, solarization or with chemicals</li>
            <li>Remove affected plants with the adjacent soil</li>
            <li>Seed treatment (should be done just before seeding)-Thiram 80% WP  – 5g/ kg -Thiophanate-methyl  50% WP  + Thiram  30% WP –  4g/ kg -Captan 50% WP  – 6g/ kg.</li>
            <li>Soil treatment – Drench with a recommended fungicide around the base of the plant as spot application
              – Thiophanate-methyl 50% WP  + Thiram 30% WP  –  50g/50l / 10m2 – Thiram 80% WP –  70g/50l    10m2 – Captan  50% WP  –  60g/50l / 10m2</li>
          </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Collar rot',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Sclerotium rolfsii',
            'management'=>'<ul>
            <li>Destroy affected plants with the adjacent soil</li>
            <li>Improve drainage</li>
            <li>Deeply plough the land and expose to affected soil to bright sunlight</li>
            <li>Avoid root damage at transplanting</li>
            <li>Soil treatment – Drench with a recommended fungicide around the base of the plant as spot application
              – Thiophanate-methyl 50% WP  + Thiram 30% WP  –  50g/50l / 10m2 – Thiram 80% WP –  70g/50l / 10m2 – Captan  50% WP  –  60g/50l / 10m2</li>

          </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Fusarium wilt',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Fusarium oxysporum f.sp lycopersici',
            'management'=>' <ul>
            <li>Destroy affected plants with the adjacent soil</li>
            <li>Improve drainage</li>
            <li>Deeply plough the land and expose to affected soil to bright sunlight</li>
            <li>Avoid root damage at transplanting </li>
            <li>Soil treatment – Drench with a recommended fungicide around the base of the plant as spot application
              – Thiophanate-methyl 50% WP  + Thiram 30% WP  –  50g/50l / 10m2 – Thiram 80% WP –  70g/50l / 10m2
              – Captan  50% WP  –  60g/50l / 10m2   </li>
          </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Powdery mildew',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Podosphaera xanthii',
            'management'=>' <ul>
            <li>Use recommended fungicides at initial stage of disease development (Refer: Pesticide recommendation DOA, 2019)</li>
            <ul>
              <li>Apply sulfur 80% WG 50 g/10 l of water</li>
              <li>Chlorothalonil 500g/l SC- 30 ml/10 l of water</li>
              <li>Carbendazim 50% WP- 7 g/10 l of water</li>
            </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Anthracnose',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Colletotrichum gloeosporioides',
            'management'=>'<ul>
            <li>Use of healthy seeds </li>
            <li>Avoid excess overhead irrigation </li>
            <li>Remove and destroy infected fruits </li>
            <li>Seed treatment (should be done just before seeding)–Thiram 80% WP  – 5g/ kg -Thiophanate-methyl  50% WP  + Thiram  30% WP –  4g/ kg -Captan 50% WP  – 6g/ kg. </li>
            <li>Foliar application of fungicides start at flowering stage in rainy season
              – Fluzinam 500g/1 SC – 10 ml/10l of water – Metiram 55% +  Pyraclostrobin 5%  WP  – 20 g/10l  of water – Cabendazim 50%  WG  – 7 g/10l   of water – Thiophanate-methyl  70% WP  –  6g/10l of water –  Chlorothalonil 500 SC  – 30ml/10l of water</li>
           </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Phomopsis blight',
            'disease_type'=>'Fungal Diseases',
            'causal_organism'=>'Phomopsis vexans',
            'management'=>' <ul>
            <li>Remove and destruction of infected fruits</li>
            <li>Use recommended fungicides at initial stage of disease development (Refer: Pesticide recommendation DOA, 2019 -Chlorothalonil 500g/l SC- 30 ml/10 l of water -Carbendazim 50% WP- 7 g/10 l of water – Thiophanate-methyl  70% WP  of 6g/10l  of water</li>
            </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Bacterial wilt',
            'disease_type'=>'Bacterial diseases',
            'causal_organism'=>'Ralstonia solanacearum',
            'management'=>' <ul>
            <li>Remove and destroy affected plants with soil </li>
            <li>Destroy crop debris after harvesting </li>
            <li>Crop rotation with non-susceptible crop (cruciferous vegetables and okra) help in reducing the disease incidence </li>
            <li>Use of resistant varieties </li>
            <li>Disinfect all farm implements/tools with bleach after they have been</li>
            <li>No chemical controlling method </li>
            </ul>'
        ]);

        Disease::create([
            'disease_name'=>'Little leaf disease',
            'disease_type'=>'Phytoplasma disease',
            'causal_organism'=>'Phytoplasma The disease is transmitted by a leaf hopper(Hishimonus phycitiy)',
            'management'=>' <ul>
            <li>Remove and burn infected plants. </li>
            <li>Control leaf hopper with recommended insecticides to minimize disease spread </li>
            </ul>'
        ]);



    }
}
