<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCropsDiseasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crops_diseases', function (Blueprint $table) {
            $table->String('crop_name');
            $table->foreign('crop_name')->references('crop_name')->on('crops');
            $table->String('disease_name');
            $table->foreign('disease_name')->references('disease_name')->on('diseases');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crops_diseases');
    }
}
