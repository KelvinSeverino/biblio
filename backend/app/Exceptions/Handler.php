<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Routing\Exceptions\RouteNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class Handler extends ExceptionHandler
{
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof RouteNotFoundException || $exception instanceof NotFoundHttpException) {
            return response()->json([
                'message' => 'Rota ou endpoint não encontrado.',
            ], 404);
        }

        if ($exception instanceof MethodNotAllowedHttpException) {
            return response()->json([
                'message' => 'Método HTTP não permitido para esta rota.',
            ], 405);
        }

        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'message' => 'Método não encontrado.',
            ], 404);
        }

        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'message' => 'Não autenticado.',
            ], 401);
        }

        if ($exception instanceof AuthorizationException) {
            return response()->json([
                'message' => 'Acesso não autorizado.',
            ], 403);
        }

        // if ($exception instanceof ValidationException) {
        //     $errors = collect($exception->errors())->flatten();
        //     $totalErrors = $errors->count();
        //     $firstError = $errors->first();            
        //     $message = $firstError;

        //     if ($totalErrors > 1) {
        //         $message .= ' (e mais ' . ($totalErrors - 1) . ' erro' . (($totalErrors - 1) > 1 ? 's' : '') . ')';
        //     }

        //     return response()->json([
        //         'message' => $message,
        //         'errors' => $exception->errors(),
        //     ], 422);
        // }

        if ($exception instanceof ThrottleRequestsException) {
            return response()->json([
                'message' => 'Muitas requisições. Por favor, tente novamente mais tarde.',
            ], 429);
        }

        if ($exception instanceof QueryException) {
            return response()->json([
                'message' => 'Erro no banco de dados.',
                'error' => $exception->getMessage(),
            ], 500);
        }
        
        return parent::render($request, $exception);

        // Erros genéricos
        // return response()->json([
        //     'message' => 'Erro interno do servidor.',
        //     'error' => config('app.debug') ? $exception->getMessage() : 'Consulte o administrador do sistema.',
        // ], 500);
    }
}

