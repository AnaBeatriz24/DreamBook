<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Books extends Model
{
    use HasFactory;

    protected $table = "books";

    protected $fillable = [
        'title',
        'description',
        'isbn',
        'img',
        'publishers_id',
        "id"
    ];

    protected $hidden = [
        'status'
    ];

    public function stocks():HasOne
    {
        return $this->hasOne(Stocks::class, "books_id", "id");
    }

    public function publishers():HasMany
    {
        return $this->hasMany(Publisher::class, "publishers_id");
    }

    public function authors():BelongsToMany
    {
        return $this->belongsToMany(Authors::class, "books_authors", "books_id", "authors_id");
    }

    public function genders():BelongsToMany
    {
        return $this->belongsToMany(Genders::class, "books_genders", "books_id", "genders_id");
    }

    public function entries():BelongsToMany
    {
        return $this->belongsToMany(Entries::class, 'entries_books', 'entries_id', 'books_id', "id", 'id')->withPivot("quantity", "amount");
    }

    public function sales():BelongsToMany
    {
        return $this->belongsToMany(Sales::class, 'sales_books', 'sales_id', 'books_id', "id", 'id')->withPivot("quantity", "amount");
    }
}
