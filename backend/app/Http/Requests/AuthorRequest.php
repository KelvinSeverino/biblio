<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;

class AuthorRequest extends FormRequest
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
                'nome' => [
                    'required',
                    'string',
                    'max:40',
                    Rule::unique('autores', 'nome'),
                ],
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'nome' => [
                    'required',
                    'string',
                    'max:40',
                    Rule::unique('autores', 'nome')->ignore($this->route('autor'),'codau'), 
                ],
            ];
        }

        return [];
    }
}
