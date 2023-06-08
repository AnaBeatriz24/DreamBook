<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesBooks extends Model
{
    use HasFactory;

    protected $table = "sales_books";

    protected $fillable = [
        "sales_id",
        "books_id",
        "quantity",
        "amount",
    ];
}
