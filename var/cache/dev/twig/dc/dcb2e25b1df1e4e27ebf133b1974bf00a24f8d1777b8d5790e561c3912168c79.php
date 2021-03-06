<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* save.html.twig */
class __TwigTemplate_9b7f051a9f94603e4845eb12edaf0ee60da8502f18c132b41819be9391b8e691 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "save.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 9
        echo "</head>
<body>
";
        // line 11
        $this->displayBlock('body', $context, $blocks);
        // line 12
        $this->displayBlock('javascripts', $context, $blocks);
        // line 13
        echo "<form  method=\"post\" action=\"\" id=\"ajax_form\">
    <section class=\"wrapper\">
        <section class=\"pm\">
            <div>
    <p><b>Код мероприятия:</b><br>
        <input type=\"text\" size=\"70\">
            </div>
            <div>
    <p><b>Название:</b><br>
        <input type=\"text\" size=\"70\">
    </p>
                </div>
            <div>
    <p><b>Место проведения:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Дата и время проведения:</b><br>
        <input type=\"date\">
    </p>
                </div>
            <div>
    <p><b>Преподаватель:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Максимальное кол-во участников:</b><br>
        <input type=\"text\" size=\"30\">
    </p>
                </div>
            <div>
    <p><b>Прочая информация:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Подразделение(Название):</b><br>
        <select size=\"3\" multiple name=\"hero[]\">
            <option disabled>Выберите мероприятие</option>
            <option value=\"Чебурашка\">Чебурсаня</option>
            <option selected value=\"Крокодил Гена\">Крокодил Коля</option>
            <option value=\"Шапокляк\">Андркляк</option>
            <option value=\"Крыса Лариса\">Крыса Оля</option>
        </select></p>
                </div>
            <div>
    <p><b>Тип мероприятия(Название):</b><br>
        <select size=\"3\" multiple name=\"hero[]\">
            <option disabled>Выберите мероприятие</option>
            <option value=\"Чебурашка\">Чебурашка</option>
            <option selected value=\"Крокодил Гена\">Крокодил Гена</option>
            <option value=\"Шапокляк\">Шапокляк</option>
            <option value=\"Крыса Лариса\">Крыса Лариса</option>
        </select></p>
                </div>
        </section>
        <section class=\"light\">

                <input type=\"submit\" value=\"Отправить\" >


                <input type=\"button\" value=\"Очистить\" id=\"ex\">



        </section>
    </section>
</form>
</body>
</html>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 7
        echo "        <link rel=\"stylesheet\" href=\"/asset/css/css1.css\">
    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 11
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 12
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("save");
        echo " ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "save.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  181 => 12,  169 => 11,  161 => 7,  154 => 6,  142 => 5,  64 => 13,  62 => 12,  60 => 11,  56 => 9,  54 => 6,  50 => 5,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>{% block title %}{% endblock %}</title>
    {% block stylesheets  %}
        <link rel=\"stylesheet\" href=\"/asset/css/css1.css\">
    {% endblock %}
</head>
<body>
{% block body %}{% endblock %}
{% block javascripts %}{{ encore_entry_script_tags('save')}} {% endblock %}
<form  method=\"post\" action=\"\" id=\"ajax_form\">
    <section class=\"wrapper\">
        <section class=\"pm\">
            <div>
    <p><b>Код мероприятия:</b><br>
        <input type=\"text\" size=\"70\">
            </div>
            <div>
    <p><b>Название:</b><br>
        <input type=\"text\" size=\"70\">
    </p>
                </div>
            <div>
    <p><b>Место проведения:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Дата и время проведения:</b><br>
        <input type=\"date\">
    </p>
                </div>
            <div>
    <p><b>Преподаватель:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Максимальное кол-во участников:</b><br>
        <input type=\"text\" size=\"30\">
    </p>
                </div>
            <div>
    <p><b>Прочая информация:</b><br>
        <textarea size=\"70\"></textarea>
    </p>
                </div>
            <div>
    <p><b>Подразделение(Название):</b><br>
        <select size=\"3\" multiple name=\"hero[]\">
            <option disabled>Выберите мероприятие</option>
            <option value=\"Чебурашка\">Чебурсаня</option>
            <option selected value=\"Крокодил Гена\">Крокодил Коля</option>
            <option value=\"Шапокляк\">Андркляк</option>
            <option value=\"Крыса Лариса\">Крыса Оля</option>
        </select></p>
                </div>
            <div>
    <p><b>Тип мероприятия(Название):</b><br>
        <select size=\"3\" multiple name=\"hero[]\">
            <option disabled>Выберите мероприятие</option>
            <option value=\"Чебурашка\">Чебурашка</option>
            <option selected value=\"Крокодил Гена\">Крокодил Гена</option>
            <option value=\"Шапокляк\">Шапокляк</option>
            <option value=\"Крыса Лариса\">Крыса Лариса</option>
        </select></p>
                </div>
        </section>
        <section class=\"light\">

                <input type=\"submit\" value=\"Отправить\" >


                <input type=\"button\" value=\"Очистить\" id=\"ex\">



        </section>
    </section>
</form>
</body>
</html>", "save.html.twig", "C:\\Users\\Nicekita\\Downloads\\OSPanel\\domains\\Practice\\FrontEndPractice\\templates\\save.html.twig");
    }
}
