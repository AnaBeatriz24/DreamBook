<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Suppliers extends Model
{
    use HasFactory;

    protected $table = "suppliers";

    protected $fillable = [
        'name',
        'cnpj',
    ];

    protected $hidden = [
        "id"
    ];

    public function entries():BelongsTo
    {
        return $this->belongsTo(Entries::class, "suppliers_id");
    }
}
