<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pests', function (Blueprint $table) {
            $table->SmallIntiger('pest_id')->autoIncrement();
            $table->smallInteger('crop_id');
            $table->foreign('crop_id')->references('crop_id')->on('crops');
            $table->string('variety_name')->nullable;
            $table->foreign('variety_name')->references('variety_name')->on('varieties')->nullable;
            $table->String('pest_name');
            $table->String('management');
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
        Schema::dropIfExists('pests');
    }
}
