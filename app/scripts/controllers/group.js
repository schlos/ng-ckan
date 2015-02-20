'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('GroupCtrl', ['$scope', function ($scope) {
    // http://catalogo.datos.gob.mx/api/3/action/group_show?id=rmx
    $scope.group = {
      'display_name': 'ReconstrucciónMX',
      'description': 'La Estrategia Digital Nacional:\r\n\r\n\'23. Prevenir y mitigar los daños causados por desastres naturales mediante el uso de las TIC\'\r\n\r\nhttp://www.presidencia.gob.mx/edn/',
      'image_display_url': '',
      'title': 'ReconstrucciónMX',
      'package_count': 1,
      'created': '2014-10-28T19:51:40.279167',
      'approval_status': 'approved',
      'is_organization': false,
      'state': 'active',
      'extras': [],
      'image_url': '',
      'groups': [],
      'num_followers': 0,
      'revision_id': '7585220e-8911-4d0f-99a4-0e02274be7a6',
      'packages': [
        {
          'license_title': 'License Not Specified',
          'maintainer': '',
          'relationships_as_object': [],
          'private': false,
          'maintainer_email': 'equipo@datos.gob.mx',
          'revision_timestamp': '2014-10-28T19:07:16.575927',
          'id': '5cd29654-4669-4938-ba0d-ade1c7ed4b2c',
          'metadata_created': '2014-10-28T19:00:19.151858',
          'metadata_modified': '2015-01-09T23:37:22.448277',
          'author': '',
          'author_email': '',
          'state': 'active',
          'version': '',
          'creator_user_id': '61464db5-c56e-483a-9510-b30d874f1a22',
          'type': 'dataset',
          'resources': [
            {
              'resource_group_id': '4979d99c-ca60-47af-b0f2-49ab37cae096',
              'cache_last_updated': null,
              'revision_timestamp': '2014-10-28T19:10:32.899353',
              'webstore_last_updated': '2014-10-28T20:10:32.729392',
              'id': 'acbc6f7f-32cd-467d-8ee0-a71b4db7d647',
              'size': null,
              'state': 'active',
              'hash': '1d2ace25b35dcac3af535c83da2803b7',
              'description': 'Proyectos de reconstrucción en el 2013.',
              'format': 'CSV',
              'tracking_summary': {
                'total': 21,
                'recent': 2
              },
              'last_modified': null,
              'url_type': 'upload',
              'mimetype': null,
              'cache_url': null,
              'name': 'Reconstrucción 2013',
              'created': '2014-10-28T20:05:18.203036',
              'url': 'http://catalogo.datos.gob.mx/dataset/5cd29654-4669-4938-ba0d-ade1c7ed4b2c/resource/acbc6f7f-32cd-467d-8ee0-a71b4db7d647/download/fondenreconstruccion2013.csv',
              'webstore_url': 'active',
              'mimetype_inner': null,
              'position': 0,
              'revision_id': '51602fc2-90f0-4861-a36e-d5c814e9b696',
              'resource_type': null
            }
          ],
          'num_resources': 1,
          'tags': [
            {
              'vocabulary_id': null,
              'display_name': 'desastres naturales',
              'name': 'desastres naturales',
              'revision_timestamp': '2014-10-28T19:00:19.151858',
              'state': 'active',
              'id': '915e221f-12f0-4661-b44e-c070543c1c12'
            }
          ],
          'tracking_summary': {
            'total': 147,
            'recent': 20
          },
          'license_id': 'notspecified',
          'relationships_as_subject': [],
          'num_tags': 4,
          'organization': null,
          'name': 'fonden',
          'isopen': false,
          'gov_type': [
            'Federal'
          ],
          'url': '',
          'notes': 'El Fondo de Desastres Naturales de México (FONDEN) fue establecido a finales de los años 90’s como un mecanismo presupuestario para apoyar de manera eficaz y oportuna a la rehabilitación de la infraestructura federal y estatal afectada por desastres naturales.\r\n\r\nEn la actualidad, el FONDEN está compuesto por dos instrumentos presupuestarios complementarios: el Programa FONDEN para la Reconstrucción y el Programa Fondo para la Prevención de Desastres Naturales (FOPREDEN), y sus respectivos fideicomisos.\r\n\r\nPara mayor información http://www.proteccioncivil.gob.mx/es/ProteccionCivil/Libro_FONDEN',
          'owner_org': null,
          'extras': [],
          'title': 'Fonden',
          'revision_id': 'b1be608c-8fb1-4441-a0d6-3a3b039caab4'
        }
      ],
      'type': 'group',
      'id': '3f4eaea7-2024-458e-9e57-e7e20c9fb86c',
      'tags': [],
      'name': 'rmx'
    };

  }]);
