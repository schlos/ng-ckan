'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('ResourcesCtrl', function ($scope, $routeParams, ckanService) {
    $scope.dataset = {
      'title': 'Encuesta Nacional de satisfacción a usuarios del servicio de guardería del IMSS.',
      'notes': 'Encuesta que permite captar la percepción de los derechohabientes usuarios del servicio de guardería del IMSS.',
      'gov_type': 'Estatal',
      'metadata_modified': '2015-02-12T01:05:52.060810',
      'metadata_created': '2014-09-03T05:45:10.193263',
      'dcat_modified': '2014-08-08T09:00:00',
      'dcat_publisher_email': 'datos.abiertos@imss.gob.mx',
      'organization': {
        'title': 'IMSS',
        'description': 'El IMSS, es la institución con mayor presencia en la atención a la salud y en la protección social de los mexicanos desde su fundación en 1943, para ello, combina la investigación y la práctica médica, con la administración de los recursos para el retiro de sus asegurados, para brindar tranquilidad y estabilidad a los trabajadores y sus familias, ante cualquiera de los riesgos especificados en la Ley del Seguro Social.\r\n\r\nHoy en día, más de la mitad de la población mexicana, tiene algo que ver con el Instituto, hasta ahora, la más grande en su género en América Latina.',
        'image_url': 'http://upload.wikimedia.org/wikipedia/commons/f/f4/IMSS.jpg',
        'is_organization': true
      },
      'resources': [
        {
          'description': 'Encuesta Nacional de satisfacción a usuarios del servicio de guardería del IMSS, Julio de 2010',
          'format': 'CSV',
          'name': 'Guarderías 2010',
          'url': 'http://datos.imss.gob.mx/sites/default/files/Base Guarderías Mayo 10_Final _portal.csv'
        },
        {
          'description': 'Encuesta Nacional de satisfacción a usuarios del servicio de guardería del IMSS, Julio de 2011',
          'format': 'CSV',
          'name': 'Guarderías 2011',
          'url': 'http://datos.imss.gob.mx/sites/default/files/110922_Base encuesta nacional de guarderías Julio11_U.csv'
        }
      ]
    };

    ckanService.showDataset($routeParams.datasetId)
      .then(function(result) {
        $scope.dataset = result;
      });
  });

