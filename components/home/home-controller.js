function DialogController(a,b,c,d,e){c.getProject(e.pName).then(function(b){a.project=b}),a.cancel=function(){b.cancel()},a.detail=function(){d.go("project",{pKey:a.project.$id}),b.hide()}}angular.module("portfolioApp").controller("HomeCtrl",["$scope","$mdDialog","projectService","$state",function(a,b,c,d){console.log("Home controller"),a.data={searchText:null,loading:!0,error:null,selectedTags:null},a.commonTags=["engineering","programming","javascript","volunteering"],c.getProjects().then(function(b){a.projects=b,a.data.loading=!1,console.log("projects loaded:",a.projects)}),a.openProject=function(d){console.log("open project:",a.projects[d]),a.project=c.setCurrentProject(a.projects[d]),b.show({controller:DialogController,templateUrl:"components/home/home-dialog.html"}).then(function(){a.data.error=null},function(b){a.data.error=b})},a.setProject=function(b){console.log("open project:",b),a.project=c.setCurrentProject(b),d.go("project",{pKey:b})},a.closeProject=function(){a.currentProject=null},a.addTag=function(b){a.data.searchText?(a.data.selectedTags||(a.data.selectedTags=a.data.searchText.split(",")),a.data.selectedTags.length>1&&(a.data.selectedTags=_.without(a.data.selectedTags,""," "),console.log("$scope.data.selectedTags:",a.data.selectedTags),a.data.selectedTags.push(b),console.log("with push:",a.data.selectedTags),a.data.searchText=a.data.selectedTags.join(","))):a.data.searchText=b+","}}]),DialogController.$inject=["$scope","$mdDialog","projectService","$state","$stateParams"];