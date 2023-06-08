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
        'publishers_id'
    ];

    protected $hidden = [
        "id"
    ];

    public function stocks():BelongsTo
    {
        return $this->belongsTo(Stocks::class, "books_id");
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
        return $this->belongsToMany(Entries::class, "entries_books", "books_id", "entries_id")->using(EntryBook::class);
    }

    public function sales():BelongsToMany
    {
        return $this->belongsToMany(Sales::class, "sales_book", "books_id", "sales_id")->using(SalesBooks::class);
    }
}
