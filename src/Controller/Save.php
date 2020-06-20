<?php


namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Save extends AbstractController
{
    function save()
    {
        return $this->render('save.html.twig');

    }
}


