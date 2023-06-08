<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntryBook extends Model
{
    use HasFactory;

    protected $table = "entries_books";

    protected $fillable = [
        "entries_id",
        "books_id",
        "quantity",
        "amount",
    ];

}
