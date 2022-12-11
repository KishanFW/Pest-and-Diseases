<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiseasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases', function (Blueprint $table) {
            $table->smallInteger('disease_id')->autoIncrement();
            $table->smallInteger('crop_id');
            $table->foreign('crop_id')->references('crop_id')->on('crops');
            $table->string('variety_name')->nullable();
            $table->foreign('variety_name')->references('variety_name')->on('varieties');
            $table->string('disease_name')->unique();
            $table->string('disease_type')->nullable();
            $table->string('causal_organism');
            $table->longText('management');
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
        Schema::dropIfExists('diseases');
    }
}
