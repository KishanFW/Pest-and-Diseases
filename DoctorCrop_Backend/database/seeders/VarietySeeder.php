<?php

namespace Database\Seeders;

use App\Models\Variety;
use Illuminate\Database\Seeder;

class VarietySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Variety::create([
            'variety_name'=>'Amanda F1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/amanda.jpg'
        ]);

        Variety::create([
            'variety_name'=>'Anjalee-F1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/anjalee.jpg'
        ]);


        Variety::create([
            'variety_name'=>'HORDI Lenairi 1',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/hordi.jpg'
        ]);

        Variety::create([
            'variety_name'=>'Thinnaweli purple',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/thinnawely.png'
        ]);

        Variety::create([
            'variety_name'=>'Padagoda(BW-11)',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/padagoda.png'
        ]);

        Variety::create([
            'variety_name'=>'SM-164',
            'crop_name'=>'Brinjal',
            'img_path'=>'assets/crops/brinjal/brinjalvarieties/SM.png'
        ]);

        Variety::create([
            'variety_name'=>'Agra(Puwalu)',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/puwalu.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Amban',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/amban.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Anamalu',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/anamalu.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Cavendish',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/Cavendish.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Kandula',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/kandula.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Kolikuttu',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/kolikttu.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Nadee(Ambul kesel)',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/Ambul.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Parakum(Sini kesel)',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/Sinikesel.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Rathambala',
            'crop_name'=>'Banana',
            'img_path'=>'assets/crops/Banana/Bananavaraieties/rathambala.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Matale Green',
            'crop_name'=>'Bitter Gourd',
            'img_path'=>'assets/crops/bitterground/Bittergroundvarieties/Mathale-Green.jpg',
        ]);

        Variety::create([
            'variety_name'=>'MC 43',
            'crop_name'=>'Bitter Gourd',
            'img_path'=>'assets/crops/bitterground/Bittergroundvarieties/MC-43.png',
        ]);

        Variety::create([
            'variety_name'=>'Neerogi',
            'crop_name'=>'Bitter Gourd',
            'img_path'=>'assets/crops/bitterground/Bittergroundvarieties/neerogi.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Thinnavely white',
            'crop_name'=>'Bitter Gourd',
            'img_path'=>'assets/crops/bitterground/Bittergroundvarieties/thinnaweliwhite.png',
        ]);

        Variety::create([
            'variety_name'=>'Firewage',
            'crop_name'=>'Carrot',
            'img_path'=>'assets/crops/carrot/carrotvarieties/fw.jpg',
        ]);

        Variety::create([
            'variety_name'=>'Lanka carrot',
            'crop_name'=>'Carrot',
            'img_path'=>'assets/crops/carrot/carrotvarieties/lc.jpg',
        ]);

        Variety::create([
            'variety_name'=>'New kuroda',
            'crop_name'=>'Carrot',
            'img_path'=>'assets/crops/carrot/carrotvarieties/New Kuroda.png',
        ]);

        Variety::create([
            'variety_name'=>'Terracotta',
            'crop_name'=>'Carrot',
            'img_path'=>'assets/crops/carrot/carrotvarieties/TERRACOTTA.jpg',
        ]);

        Variety::create([
            'variety_name'=>'HORDI Mu- 01',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/HORDI-MU-1.png',
        ]);

        Variety::create([
            'variety_name'=>'Kirikawadi',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/kirikawadi.png',
        ]);

        Variety::create([
            'variety_name'=>'MU-51',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/MU-51.png',
        ]);

        Variety::create([
            'variety_name'=>'Shani',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/shani.png',
        ]);

        Variety::create([
            'variety_name'=>'Suranimala',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/suranimala.png',
        ]);

        Variety::create([
            'variety_name'=>'Suwarne',
            'crop_name'=>'Cassava',
            'img_path'=>'assets/crops/cassava/cassavavarieties/swarna.png',
        ]);


    }
}
