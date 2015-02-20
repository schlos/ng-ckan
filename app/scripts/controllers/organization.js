'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:OrganizationCtrl
 * @description
 * # OrganizationCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('OrganizationCtrl', ['$scope', function ($scope) {
    // http://catalogo.datos.gob.mx/api/3/action/organization_show?id=conapo
    $scope.organization = {
      'display_name': 'CONAPO',
      'description': 'La misión del Consejo Nacional de Población es la planeación demográfica del país a fin de incluir a la población en los programas de desarrollo económico y social que se formulen dentro del sector gubernamental y vincular sus objetivos a las necesidades que plantean los fenómenos demográficos.',
      'image_display_url': 'http://catalogo.datos.gob.mx/uploads/group/20141126-194100.9137838pig5bf.jpeg',
      'title': 'CONAPO',
      'package_count': 1,
      'created': '2014-06-19T16:47:02.896549',
      'approval_status': 'approved',
      'is_organization': true,
      'state': 'active',
      'extras': [],
      'image_url': '20141126-194100.9137838pig5bf.jpeg',
      'groups': [],
      'num_followers': 0,
      'revision_id': 'aaa3a8d4-5da2-4671-925c-51c8efc5899c',
      'packages': [
        {
        'license_title': 'License Not Specified',
        'maintainer': '',
        'relationships_as_object': [],
        'private': false,
        'maintainer_email': '',
        'revision_timestamp': '2014-07-17T00:30:06.874297',
        'id': 'dc3039a4-a4a0-4337-9387-9144816e88b1',
        'metadata_created': '2014-07-08T19:01:19.063495',
        'metadata_modified': '2015-01-09T23:28:09.657624',
        'author': '',
        'author_email': '',
        'state': 'active',
        'version': '',
        'creator_user_id': 'b78795a2-5f92-4797-bf5a-0ce2cbbbbab7',
        'type': 'dataset',
        'resources': [
          {
          'resource_group_id': 'ec73a7e5-f232-4392-9c9a-710e4331326b',
          'cache_last_updated': null,
          'revision_timestamp': '2014-10-23T02:25:23.707861',
          'webstore_last_updated': null,
          'id': '188f489a-2e59-4520-9a80-13cd18d73692',
          'size': null,
          'state': 'active',
          'hash': '',
          'description': 'Proyecciones de Población por Entidad Federativa 2010 - 2050, consulta el diccionario de datos http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Nacional_y_Entidades/Descriptor/Diccionario_Proyecciones_por_Entidad_Federativa.csv',
          'format': 'CSV',
          'tracking_summary': {
            'total': 99,
            'recent': 12
          },
          'last_modified': null,
          'url_type': null,
          'mimetype': null,
          'cache_url': null,
          'name': 'Entidades Federativas 2010/2050',
          'created': '2014-10-23T03:25:23.833704',
          'url': 'http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Nacional_y_Entidades/CSV/basepryentMX.csv',
          'webstore_url': null,
          'mimetype_inner': null,
          'position': 0,
          'revision_id': 'fcd00fbf-2938-4557-9f94-2cc668147132',
          'resource_type': null
        },
        {
          'resource_group_id': 'ec73a7e5-f232-4392-9c9a-710e4331326b',
          'cache_last_updated': null,
          'revision_timestamp': '2014-10-23T02:25:23.707861',
          'webstore_last_updated': null,
          'id': '0be99101-386d-49e0-95be-d1377f0fe3de',
          'size': null,
          'state': 'active',
          'hash': '',
          'description': 'Proyecciones de Población a nivel Municipal 2010 - 2030, consulta el diccionario de datos http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Municipios/Descriptor/Diccionario_Proyecciones_por_Municipios.csv',
          'format': 'CSV',
          'tracking_summary': {
            'total': 148,
            'recent': 26
          },
          'last_modified': null,
          'url_type': null,
          'mimetype': null,
          'cache_url': null,
          'name': 'Municipios 2010/2030',
          'created': '2014-10-23T03:25:23.833760',
          'url': 'http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Municipios/CSV/baseprymunMX.csv',
          'webstore_url': null,
          'mimetype_inner': null,
          'position': 1,
          'revision_id': 'fcd00fbf-2938-4557-9f94-2cc668147132',
          'resource_type': null
        },
        {
          'resource_group_id': 'ec73a7e5-f232-4392-9c9a-710e4331326b',
          'cache_last_updated': null,
          'revision_timestamp': '2014-10-23T02:25:23.707861',
          'webstore_last_updated': null,
          'id': 'a6b73a70-e828-4ff1-a587-12973d8a7a13',
          'size': null,
          'state': 'active',
          'hash': '',
          'description': 'Proyecciones de Población a nivel Localidad 2010 - 2030, consulta el diccionario de datos http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Localidades/Descriptor/Diccionario_Proyecciones_por_Localidad.csv',
          'format': 'CSV',
          'tracking_summary': {
            'total': 67,
            'recent': 5
          },
          'last_modified': null,
          'url_type': null,
          'mimetype': null,
          'cache_url': null,
          'name': 'Por localidad 2010/2030',
          'created': '2014-10-23T03:25:23.833773',
          'url': 'http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Localidades/CSV/baseprylocMX.csv',
          'webstore_url': null,
          'mimetype_inner': null,
          'position': 2,
          'revision_id': 'fcd00fbf-2938-4557-9f94-2cc668147132',
          'resource_type': null
        }
        ],
        'num_resources': 9,
        'tags': [
          {
          'vocabulary_id': null,
          'display_name': 'demografía',
          'name': 'demografía',
          'revision_timestamp': '2014-07-08T19:01:19.063495',
          'state': 'active',
          'id': '80d308cb-8637-46e8-899a-605e9d02e4f0'
        }
        ],
        'tracking_summary': {
          'total': 1431,
          'recent': 247
        },
        'groups': [],
        'license_id': 'notspecified',
        'relationships_as_subject': [],
        'num_tags': 9,
        'organization': {
          'description': 'La misión del Consejo Nacional de Población es la planeación demográfica del país a fin de incluir a la población en los programas de desarrollo económico y social que se formulen dentro del sector gubernamental y vincular sus objetivos a las necesidades que plantean los fenómenos demográficos.',
          'created': '2014-06-19T16:47:02.896549',
          'title': 'CONAPO',
          'name': 'conapo',
          'revision_timestamp': '2014-11-26T19:41:00.921310',
          'is_organization': true,
          'state': 'active',
          'image_url': '20141126-194100.9137838pig5bf.jpeg',
          'revision_id': 'aaa3a8d4-5da2-4671-925c-51c8efc5899c',
          'type': 'organization',
          'id': '82ec0ad5-941f-4b0c-938e-a44b99b2312f',
          'approval_status': 'approved'
        },
        'name': 'proyecciones-de-la-poblacion-de-mexico',
        'gov_type': [
          'Federal'
        ],
        'url': '',
        'notes': 'La Secretaría General del Consejo Nacional de Población tiene entre sus responsabilidades, como establece el artículo 37, fracción ii, del reglamento de la Ley General de Población, analizar, evaluar, sistematizar y producir información sobre los fenómenos demográficos, así como elaborar proyecciones de población.\nLas estimaciones demográficas para el periodo 1990-2010 y las proyecciones de población para el horizonte 2010-2030. Dicha información es necesaria y relevante para llevar a cabo la planeación demográfica, económica y social del país, al mismo tiempo que una herramienta de conocimiento valiosa para estimar múltiples requerimientos futuros en servicios e infraestructura así como otras necesidades sociales.\nCabe resaltar que los vectores de población están referidos al 1 de Julio del año presente.',
        'owner_org': '82ec0ad5-941f-4b0c-938e-a44b99b2312f',
        'extras': [
          {
          'key': 'dcat_modified',
          'value': '2014-10-22T20:00:00Z'
        },
        {
          'key': 'dcat_publisher_email',
          'value': 'sergio.velarde@conapo.gob.mx'
        }
        ],
        'title': 'Proyecciones de la población de México',
        'revision_id': '1361ae17-1251-45b2-addd-fc5e93d2bbc4'
      }
      ],
      'id': '82ec0ad5-941f-4b0c-938e-a44b99b2312f',
      'tags': [],
      'name': 'conapo'
    };

  }]);
