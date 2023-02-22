<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\CropController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('crops',[ApiController::class,'crops']);
Route::get('pestsofcrop/{crop}',[ApiController::class,'pestsofcrop']);
Route::get('pestimgs',[ApiController::class,'pestimgs']);
Route::get('pestsymptoms',[ApiController::class,'pestsymptoms']);
Route::get('diseasesofcrop/{crop}',[ApiController::class,'diseasesofcrop']);
Route::get('diseasetypes', [ApiController::class, 'diseasetypes']);
Route::get('diseaseimgs',[ApiController::class,'diseaseimgs']);
Route::get('diseasesymptoms',[ApiController::class,'diseasesymptoms']);

Route::get('varietiesofcrop/{crop}',[ApiController::class,'varietiesofcrop']);
Route::get('symptomcatagories', [ApiController::class, 'symptomcatagories']);

Route::get('pestsymptmsofcrop/{crop}/{catagories}', [ApiController::class, 'pestsymptmsofcrop']);
Route::get('diseasesymptmsofcrop/{crop}/{catagories}', [ApiController::class, 'diseasesymptmsofcrop']);
Route::get('symptomsofcrop/{crop}/{catagories}', [ApiController::class, 'symptomsofcrop']);

Route::get('pestsymptmsofvariety/{variety}/{catagories}', [ApiController::class, 'pestsymptmsofvariety']);
Route::get('diseasesymptmsofvariety/{variety}/{catagories}', [ApiController::class, 'diseasesymptmsofvariety']);
Route::get('symptomsofvariety/{variety}/{catagories}', [ApiController::class, 'symptomsofvariety']);
