<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Pestsymptom;

class PestsymptomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pestsymptom::create([
            'pest_id'=>1,
            'symptoms'=>'<ul>
            <li>Damage can be identified by drooping stems and black holes in the fruit.</li>
            <br>
            <li> The pores are filled with excretory material.</li>
            <br>
            <li>Larvae can be seen when damaged pods and fruit are cut. </li>
            <br>
            <li>Plant growth is stunted due to larval damage.</li>
            </ul>'

        ]);

        Pestsymptom::create([
            'pest_id'=>2,
            'symptoms'=>"<ul>
            <li> A few leaves of the plant are bunched up and the larvae are fed in them. </li>
            <br>
            <li> Here the remaining parts are eaten except the leaf's veinal.</li>
            <br>
            <li> The growth of the plant is stunted due to the destruction of the apical leaves. </li>
            </ul>"
        ]);

        Pestsymptom::create([
            'pest_id'=>3,
            'symptoms'=>'<ul>
            <li>The emerging adult is light green and both the emerging adult and the larva causes damage to the plant.</li>
            <br>
            <li>Sap sucking from the underside of the leaf causes leaf shrinkage, curling, and yellowing from the leaf edge to the mi
              ddle.
              Therefore, th</li>
            <br>
            <li>Therefore, the growth of the plant is weak. </li>
            <br>
            <li>It also acts as the vector of phytoplasma (small leaf blight) which infects the brinjal crop.</li>
            </ul>'
        ]);

        Pestsymptom::create([
            'pest_id'=>4,
            'symptoms'=>'<ul>
            <li> Mites suck sap from leaves and fruits. When the juice is sucked from the fruit, the outer skin of the fruit becomes ro
              ugh and turns brown.</li>
            <br>
            <li>The fruits are distorted.</li>
            <br>
            <li>When damaging the leaves, the mites are more common on the underside, and leaf rolling, browning, and dry diebac
              k are seen. </li>
            <br>
            <li>In the early stages of leaf damage caused by spider mites, the surface of the leaves may turn yellow in places.</li>
            </ul>'
        ]);



    }
}
