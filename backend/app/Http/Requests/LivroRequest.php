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
                'titulo' => 'required|string|max:40',
                'editora' => 'required|string|max:40',
                'edicao' => 'required|integer|min:1',
                'ano_publicacao' => 'required|integer|min:1|digits:4',
                'valor' => 'required|numeric|min:0',

                'autores' => 'required|array|min:1',
                'autores.*' => 'integer|exists:autores,codau',
                'assuntos' => 'required|array|min:1',
                'assuntos.*' => 'integer|exists:assuntos,codas',
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'titulo' => 'sometimes|required|string|max:40',
                'editora' => 'sometimes|required|string|max:40',
                'edicao' => 'sometimes|required|integer|min:1',
                'ano_publicacao' => 'sometimes|required|integer|min:1|digits:4',
                'valor' => 'sometimes|required|numeric|min:0',                

                'autores' => 'required|array|min:1',
                'autores.*' => 'integer|exists:autores,codau',
                'assuntos' => 'required|array|min:1',
                'assuntos.*' => 'integer|exists:assuntos,codas',
            ];
        }

        return [];
    }
}
