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

Route::get('{lang}/crops',[ApiController::class,'crops']);
Route::get('{lang}/pestsofcrop/{crop}',[ApiController::class,'pestsofcrop']);
Route::get('{lang}/pestimgs',[ApiController::class,'pestimgs']);
Route::get('{lang}/pestsymptoms',[ApiController::class,'pestsymptoms']);
Route::get('{lang}/diseasesofcrop/{crop}',[ApiController::class,'diseasesofcrop']);
Route::get('{lang}/diseasetypes', [ApiController::class, 'diseasetypes']);
Route::get('{lang}/diseaseimgs',[ApiController::class,'diseaseimgs']);
Route::get('{lang}/diseasesymptoms',[ApiController::class,'diseasesymptoms']);
Route::get('{lang}/varietiesofcrop/{crop}',[ApiController::class,'varietiesofcrop']);
Route::get('{lang}/pestsymptmsofcrop/{crop}', [ApiController::class, 'pestsymptmsofcrop']);
Route::get('{lang}/diseasesymptmsofcrop/{crop}', [ApiController::class, 'diseasesymptmsofcrop']);
