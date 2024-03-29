<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Stocks extends Model
{

    protected $table = "stocks";

    protected $fillable = [
        'quantity',
        'amount',
        'books_id'
    ];

    protected $hidden = [
        "id"
    ];

    public function books():HasOne
    {
        return $this->hasOne(Books::class, "books_id");
    }
}
