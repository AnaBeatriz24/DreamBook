<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Entries extends Model
{
    use HasFactory;

    protected $table = "entries";

    protected $fillable = [
        'dateBuy',
    ];

    protected $hidden = [
        "id"
    ];

    public function suppliers():BelongsTo
    {
        return $this->belongsTo(User::class, "suppliers_id");
    }

    public function users():BelongsTo
    {
        return $this->belongsTo(User::class, "users_id");
    }


}
