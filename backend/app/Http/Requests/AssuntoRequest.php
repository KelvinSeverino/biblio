<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AssuntoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if ($this->isMethod('post')) {
            return [
                'Descricao' => 'required|string|max:20',
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'Descricao' => 'sometimes|required|string|max:20',
            ];
        }

        return [];
    }
}
