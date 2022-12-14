<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCropsPestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crops_pests', function (Blueprint $table) {
            $table->string('crop_name');
            $table->foreign('crop_name')->references('crop_name')->on('crops');
            $table->string('pest_name');
            $table->foreign('pest_name')->references('pest_name')->on('pests');
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
        Schema::dropIfExists('crops_pests');
    }
}
