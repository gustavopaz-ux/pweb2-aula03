<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Produto;

// CONTROLLER de Categorias — mesmo padrão do ProdutoController.
// Sem SQL escrito à mão e sem HTML aqui: só pede dados ao Model e escolhe a View.
class CategoriaController extends Controller
{
    // Listagem: GET /categorias
    public function index()
    {
        $categorias = Categoria::orderBy('id')->get();

        return view('categorias.index', [
            'categorias' => $categorias,
        ]);
    }

    // Detalhe: GET /categorias/{id}
    public function show(int $id)
    {
        // findOrFail devolve 404 automaticamente se a categoria não existir.
        $categoria = Categoria::findOrFail($id);

        // Produtos que pertencem a essa categoria (mesmo nome).
        $produtos = Produto::where('categoria', $categoria->nome)->get();

        return view('categorias.show', [
            'categoria' => $categoria,
            'produtos' => $produtos,
        ]);
    }
}
