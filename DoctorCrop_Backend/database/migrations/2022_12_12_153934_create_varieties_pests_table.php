<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVarietiesPestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('varieties_pests', function (Blueprint $table) {
            $table->string('variety_name');
            $table->foreign('variety_name')->references('variety_name')->on('varieties');
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
        Schema::dropIfExists('varieties_pests');
    }
}
