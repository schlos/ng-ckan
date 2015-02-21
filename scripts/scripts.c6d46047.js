"use strict";angular.module("ngCkanApp",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/conjuntos"}).when("/conjuntos",{templateUrl:"views/datasets.html",controller:"DatasetsCtrl"}).when("/conjuntos/:datasetId",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/instituciones",{templateUrl:"views/organizations.html",controller:"OrganizationsCtrl"}).when("/instituciones/:organizationId",{templateUrl:"views/organization.html",controller:"OrganizationCtrl"}).when("/grupos",{templateUrl:"views/groups.html",controller:"GroupsCtrl"}).when("/grupos/:groupId",{templateUrl:"views/group.html",controller:"GroupCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ngCkanApp").controller("DatasetsCtrl",["$scope","ckanService",function(a,b){a.start=0,b.listDatasets(a.start).then(function(b){a.datasets=b.datasets,a.resultsCount=b.resultsCount}),a.query=function(a){return _.filter(this.datasets,function(b){return!_.isNull(b.title.match(a))||!_.isNull(b.notes.match(a))})}}]),angular.module("ngCkanApp").controller("ResourcesCtrl",["$scope","$routeParams","ckanService",function(a,b,c){c.showDataset(b.datasetId).then(function(b){a.dataset=b})}]),angular.module("ngCkanApp").controller("OrganizationsCtrl",["$scope","ckanService",function(a,b){b.listOrganizations().then(function(b){a.organizations=b}),a.query=function(a){return _.filter(this.organizations,function(b){return!_.isNull(b.display_name.match(a))})}}]),angular.module("ngCkanApp").controller("OrganizationCtrl",["$scope","$routeParams","ckanService",function(a,b,c){c.showOrganization(b.organizationId).then(function(b){a.organization=b})}]),angular.module("ngCkanApp").controller("GroupsCtrl",["$scope","ckanService",function(a,b){b.listGroups().then(function(b){a.groups=b}),a.query=function(a){return _.filter(this.groups,function(b){return!_.isNull(b.display_name.match(a))})}}]),angular.module("ngCkanApp").controller("GroupCtrl",["$scope","$routeParams","ckanService",function(a,b,c){c.showGroup(b.groupId).then(function(b){a.group=b})}]),angular.module("ngCkanApp").directive("search",["$timeout",function(a){return{restrict:"A",scope:{search:"@",controller:"=",update:"="},link:function(b,c){var d;c.on("keyup",function(){void 0!==d&&a.cancel(d),d=a(function(){var a=(c.val(),"");b.controller.query(a).$promise.then(function(a){_.each(a,function(a){var c=_.find(b.update,{id:a.id});c||b.update.push(a)}),_.remove(b.update,function(b){return!_.find(a,{id:b.id})})})},200)})}}}]),angular.module("ngCkanApp").service("ckanService",["$http",function(a){function b(a){return n=a.data.result.count,h=a.data.result.results,{datasets:h,resultsCount:n}}function c(a){return i=a.data.result}function d(a){return j=a.data.result}function e(a){return k=a.data.result}function f(a){return l=a.data.result}function g(a){return m=a.data.result}var h,i,j,k,l,m,n,o="http://catalogo.datos.gob.mx/api/3/action/";this.listDatasets=function(c){return a.get(o+"package_search?q=&rows=10&start="+c).then(b)},this.showDataset=function(b){return a.get(o+"package_show?id="+b).then(c)},this.listOrganizations=function(){return a.get(o+"organization_list?all_fields=true").then(d)},this.showOrganization=function(b){return a.get(o+"organization_show?id="+b).then(e)},this.listGroups=function(){return a.get(o+"group_list?all_fields=true").then(f)},this.showGroup=function(b){return a.get(o+"group_show?id="+b).then(g)}}]),angular.module("ngCkanApp").directive("govTypesMenu",function(){return{templateUrl:"views/gov-types-menu.html",restrict:"E"}}),angular.module("ngCkanApp").directive("datasetsCategories",function(){return{templateUrl:"views/datasets-categories.html",restrict:"E"}}),angular.module("ngCkanApp").directive("alphabetMenu",function(){return{templateUrl:"views/alphabet-menu.html",restrict:"E"}}),angular.module("ngCkanApp").filter("formats",function(){return function(a){var b=_.pluck(a.resources,"format");return _.uniq(b)}});