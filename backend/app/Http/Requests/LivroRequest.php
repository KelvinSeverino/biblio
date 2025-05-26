<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LivroRequest extends FormRequest
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
                'Titulo' => 'required|string|max:40',
                'Editora' => 'required|string|max:40',
                'Edicao' => 'required|integer|min:1',
                'AnoPublicacao' => 'required|string|size:4',
                'valor' => 'required|numeric|min:0',
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'Titulo' => 'sometimes|required|string|max:40',
                'Editora' => 'sometimes|required|string|max:40',
                'Edicao' => 'sometimes|required|integer|min:1',
                'AnoPublicacao' => 'sometimes|required|string|size:4',
                'valor' => 'sometimes|required|numeric|min:0',
            ];
        }

        return [];
    }
}
