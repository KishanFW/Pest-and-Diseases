<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Disease_symptom;

class DiseaseSymptomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Disease_symptom::create([
            'disease_name'=>'Damping-Off',
            'symptom'=>'Sudden collapsing seedlings at the base of the stem'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Damping-Off',
            'symptom'=>'Root rot and seedling death'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Damping-Off',
            'symptom'=>'Brownish black discoloration at the base due to Rhizoctonia spp'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Collar rot',
            'symptom'=>'Yellowing of leaves and wilt'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Collar rot',
            'symptom'=>'Decaying near collar region'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Collar rot',
            'symptom'=>'Mycelia mat with white / brown Sclerotia on collar region'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Fusarium wilt',
            'symptom'=>'Yellowing of leaves and wilt'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Fusarium wilt',
            'symptom'=>'Vascular discoloration of stem'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Fusarium wilt',
            'symptom'=>'Root rot and dying of the plant'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Powdery mildew',
            'symptom'=>'Circular yellow patches or spots appear on the lower surface of the leaves.'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Powdery mildew',
            'symptom'=>'White powdery residue on the upper leaf surface.'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Anthracnose',
            'symptom'=>'Sunken circular lesions with tan to orange to black concentric rings in their center.'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Anthracnose',
            'symptom'=>'Fruiting bodies with pink masses of conidia may ooze from lesions.'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Phomopsis blight',
            'symptom'=>'Small canker gray spots with black margins appear on stem and petioles'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Phomopsis blight',
            'symptom'=>'Center of the spot becomes gray and black due to pycnidia development'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Phomopsis blight',
            'symptom'=>'Soft and watery fruit spots become black and mummified'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Bacterial wilt',
            'symptom'=>'Slight wilting of single branch/ branches'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Bacterial wilt',
            'symptom'=>'Sudden and permanent wilting of entire plant'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Bacterial wilt',
            'symptom'=>'Discoloration of the vascular tissues'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Bacterial wilt',
            'symptom'=>'Slimy viscous bacterial ooze comes out from the cut end of affected parts when immersed in clear'
        ]);



        Disease_symptom::create([
            'disease_name'=>'Little leaf disease',
            'symptom'=>'leaves are narrow, soft, smooth and yellow'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Little leaf disease',
            'symptom'=>'Internodes of the stem become shorten'
        ]);


        Disease_symptom::create([
            'disease_name'=>'Little leaf disease',
            'symptom'=>'Auxiliary buds get enlarged but their petioles and leaves remain shortened and give the plant a bushy appearance.'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Little leaf disease',
            'symptom'=>'flowers remain green/ no flowering'
        ]);

        Disease_symptom::create([
            'disease_name'=>'Little leaf disease',
            'symptom'=>'Fruiting is rare'
        ]);


    }
}
