<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainPage extends AbstractController
{
    function Base()
    {
        return $this->render('base.html.twig');
    }
}
