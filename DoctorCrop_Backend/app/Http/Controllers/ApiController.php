<?php

namespace App\Http\Controllers;

use App\Models\Crop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function crops($lang)
    {
        $crops = DB::select("select crop_name, translatable_crop_name, img_path from crops");

        // To get the translated data
        foreach ($crops as $crop) {
            $translatable_crop_name = json_decode($crop->translatable_crop_name, true);
            if (is_array($translatable_crop_name) && isset($translatable_crop_name[$lang])) {
                $crop->translatable_crop_name = $translatable_crop_name[$lang];
            }
        }
        return response()->json($crops);
    }

    public function pestsofcrop($lang, $crop)
    {
        $pestsdetails = DB::select("select pest_name, translatable_pest_name, management from pests where pest_name in
                                    (select pest_name from crops_pests where crop_name = ?)", [$crop]);

        // To get the translated data
        foreach ($pestsdetails as $pestsdetail) {
            $translatable_pest_name = json_decode($pestsdetail->translatable_pest_name, true);
            if (is_array($translatable_pest_name) && isset($translatable_pest_name[$lang])) {
                $pestsdetail->translatable_pest_name = $translatable_pest_name[$lang];
            }

            $translatable_management = json_decode($pestsdetail->management, true);
            if (is_array($translatable_management) && isset($translatable_management[$lang])) {
                $pestsdetail->management = $translatable_management[$lang];
            }
        }
        return response()->json($pestsdetails);
    }

    public function pestimgs(){
        $imgpaths = DB::select("select pest_name, img_path from pest_img_paths");
        return response()->json($imgpaths);
    }

    public function pestsymptoms(){
        $symtoms = DB::select("select pest_name, symptom from pest_symptoms");
        return response()->json($symtoms);
    }

    public function diseasesofcrop($crop){
        $diseasesdetails = DB::select("select disease_name, disease_type, causal_organism, management from diseases where disease_name in
                                    (select disease_name from crops_diseases where crop_name = ?)",[$crop]);
        return response()->json($diseasesdetails);
    }

    public function diseasetypes(){
        $diseasetypes = DB::select("select distinct disease_type from diseases");
        return response()->json($diseasetypes);
    }

    public function diseaseimgs(){
        $diseaseimgs = DB::select("select disease_name, img_path from disease_img_paths");
        return response()->json($diseaseimgs);
    }

    public function diseasesymptoms(){
        $diseasesymptoms = DB::select("select disease_name, symptom from disease_symptoms");
        return response()->json($diseasesymptoms);
    }

    public function varietiesofcrop($crop){
        $varieties = DB::select("select variety_name, img_path from varieties where crop_name = ?",[$crop]);
        return response()->json($varieties);
    }

    public function pestsymptmsofcrop($crop){
        $symptoms = DB::select("select distinct symptom from pest_symptoms where pest_name in
                                 (select pest_name from crops_pests where crop_name = ?)",[$crop]);

        return response()->json($symptoms);
    }

    public function diseasesymptmsofcrop($crop){
        $symptoms = DB::select("select distinct symptom from disease_symptoms where disease_name in
                                 (select disease_name from crops_diseases where crop_name = ?)",[$crop]);

        return response()->json($symptoms);
    }
}
