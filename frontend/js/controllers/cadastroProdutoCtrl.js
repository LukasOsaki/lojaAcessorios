angular.module("cadastroProduto").controller("cadastroProdutoCtrl", function ($scope, $http) {
    $scope.app = "Cadastro de Produto";
    $scope.produtos = [];

    var carregarProdutos = function () {
        $http.get("http://localhost:3333/produto").then(function (response) {
            $scope.produtos = response.data
        });
    };

    $scope.cadastrarProduto = function (produto) {
        $http.post("http://localhost:3333/produto", produto).then(function (response) {
            delete $scope.produto;
            $scope.produtoForm.$setPristine();
            carregarProdutoss();
        });
    };
    carregarProdutos();
});