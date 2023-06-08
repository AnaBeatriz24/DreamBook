<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentMethods extends Model
{
    use HasFactory;

    protected $table = "payment_methods";

    protected $fillable = [
        'method'
    ];

    protected $hidden = [
        "id"
    ];

    public function sales():BelongsTo
    {
        return $this->belongsTo(Sales::class, "paymentMethods_id");
    }

}
