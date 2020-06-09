<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProduitController extends AbstractController
{
    /**
     * @Route("produits", name="produit")
     */
    public function index()
    {
        return $this->render('produits/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
