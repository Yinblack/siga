<?php
class ControllerRoutes extends Controller
{
    public function __construct() {
        parent::__construct();
    }

    public function index()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->INICIO = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/all_homes.js"></script>
            <script src="assets/js/parallax.min.js"></script>
            <script src="assets/js/home.js"></script>
            <script src="assets/js/jquery.validate.min.js"></script>
            <script src="assets/js/sweetalert2.all.js"></script>
            <script src="assets/js/scrollreveal.min.js"></script>
            <script src="assets/js/contacto.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('home');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function landing2()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->INICIO = 'active';
        $this->_view->css = '
            <link rel="stylesheet" href="assets/css/rangeslider.css">
            <link rel="stylesheet" href="assets/css/landing2.css">
        ';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/all_homes.js"></script>
            <script src="assets/js/rangeslider.min.js"></script>
            <script src="assets/js/home2.js"></script>
        ';
        $this->_view->renderizar('header2');
        $this->_view->renderizar('home2');
        $this->_view->renderizar('contacto');
        $this->_view->renderizar('footer');
    }

    public function Quiero_ser_partner()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->Partner = 'active';
        $this->_view->css = '';
        $this->_view->js = '
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/sweetalert2.all.js"></script>
        <script src="assets/js/contacto.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('Quiero_ser_partner');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function Pequena_empresa()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->Partner = 'active';
        $this->_view->css = '';
        $this->_view->js = '
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/sweetalert2.all.js"></script>
        <script src="assets/js/pequena_empresa.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('pequena_empresa');
        $this->_view->renderizar('footer2');
    }

    public function Mediana_empresa()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->Partner = 'active';
        $this->_view->css = '';
        $this->_view->js = '
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/sweetalert2.all.js"></script>
        <script src="assets/js/pequena_empresa.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('mediana_empresa');
        $this->_view->renderizar('footer2');
    }

    public function Gran_empresa()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas';
        $this->_view->Partner = 'active';
        $this->_view->css = '';
        $this->_view->js = '
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/sweetalert2.all.js"></script>
        <script src="assets/js/pequena_empresa.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('gran_empresa');
        $this->_view->renderizar('footer2');
    }
/*
    public function prueba()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Reliza una prueba';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/prueba.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('prueba');
        $this->_view->renderizar('footer');
    }
*/
    public function prueba()
    {
      $this->_view->titulo = 'Sistema de Inventarios y Ventas | Reliza una prueba';
      $this->_view->css = '';
      $this->_view->js = '
          <script src="assets/js/slick.js"></script>
          <script src="assets/js/jquery.validate.min.js"></script>
          <script src="assets/js/sweetalert2.all.js"></script>
          <script src="assets/js/prueba2.js"></script>
      ';
      $this->_view->renderizar('header');
      $this->_view->renderizar('prueba2');
      $this->_view->renderizar('footer2');
    }

    public function beneficios()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Beneficios';
        $this->_view->beneficios = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/icloudpos.js"></script>
            <script src="assets/js/jquery.validate.min.js"></script>
            <script src="assets/js/sweetalert2.all.js"></script>
            <script src="assets/js/contacto.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('que_hara_siga_porti3');
        $this->_view->renderizar('icloud_pos');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function quienes_somos()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Quienes Somos';
        $this->_view->QuienesSomos = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/icloudpos.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('Quienes_somos');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function rapido_eficiente()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Quienes Somos';
        $this->_view->QuienesSomos = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/parallax.min.js"></script>
            <script src="assets/js/rapido_eficiente.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('rapido_eficiente');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function videos_tutoriales()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Quienes Somos';
        $this->_view->QuienesSomos = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/parallax.min.js"></script>
            <script src="assets/js/videos_tutoriales.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('videos_tutoriales');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

    public function planes()
    {
        $this->_view->titulo = 'Sistema de Inventarios y Ventas | Nuestros planes';
        $this->_view->QuienesSomos = 'active';
        $this->_view->css = '';
        $this->_view->js = '
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/parallax.min.js"></script>
            <script src="assets/js/planes.js"></script>
        ';
        $this->_view->renderizar('header');
        $this->_view->renderizar('planes');
        $this->_view->renderizar('contacto2');
        $this->_view->renderizar('footer2');
    }

}
?>
