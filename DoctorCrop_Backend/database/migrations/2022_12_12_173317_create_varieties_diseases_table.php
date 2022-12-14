<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVarietiesDiseasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('varieties_diseases', function (Blueprint $table) {
            $table->String('variety_name');
            $table->foreign('variety_name')->references('variety_name')->on('varieties');
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
        Schema::dropIfExists('varieties_diseases');
    }
}
