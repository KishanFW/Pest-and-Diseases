<?php

namespace App\Http\Controllers;

use App\Models\Crop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function crops(){
        $crops = DB::select("select crop_name, img_path from crops");
        return response()->json($crops);
    }

    public function pestsofcrop($crop){
        $pestsdetails = DB::select("select pest_name, management from pests where pest_name in
                                    (select pest_name from crops_pests where crop_name = ?)",[$crop]);
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
}
