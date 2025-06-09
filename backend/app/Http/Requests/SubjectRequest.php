<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SubjectRequest extends FormRequest
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
                'descricao' => [
                    'required',
                    'string',
                    'max:20',
                    Rule::unique('assuntos', 'descricao'),
                ],
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'descricao' => [
                    'required',
                    'string',
                    'max:20',
                    Rule::unique('assuntos', 'descricao')->ignore($this->route('assunto'),'codas'), 
                ],
            ];
        }

        return [];
    }
}
